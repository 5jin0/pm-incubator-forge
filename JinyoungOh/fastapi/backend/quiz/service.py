"""Quiz service - start, progress, complete, abandon with status transitions."""
from datetime import datetime

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from models import Account, EventLog, QuizAttempt

VALID_STATUS_TRANSITIONS = {
    "START": ["IN_PROGRESS", "FINISH", "ABANDONED"],  # Progress 없이 Finish/Exit(중도포기) 가능
    "IN_PROGRESS": ["ABANDONED", "FINISH"],
    "ABANDONED": [],
    "FINISH": [],
}


async def ensure_account(session: AsyncSession, account_id: str) -> Account:
    result = await session.execute(select(Account).where(Account.id == account_id))
    account = result.scalar_one_or_none()
    if account is None:
        account = Account(id=account_id)
        session.add(account)
        await session.flush()
    return account


async def get_attempt(session: AsyncSession, attempt_id: str, account_id: str) -> QuizAttempt | None:
    result = await session.execute(
        select(QuizAttempt).where(QuizAttempt.id == attempt_id, QuizAttempt.account_id == account_id)
    )
    return result.scalar_one_or_none()


def can_transition(current: str, new: str) -> bool:
    return new in VALID_STATUS_TRANSITIONS.get(current, [])


async def start_attempt(
    session: AsyncSession, account_id: str, quiz_id: str, difficulty_level: str
) -> QuizAttempt:
    await ensure_account(session, account_id)
    attempt = QuizAttempt(
        account_id=account_id,
        quiz_id=quiz_id,
        difficulty_level=difficulty_level,
        status="START",
    )
    session.add(attempt)
    await session.flush()
    return attempt


async def progress_attempt(session: AsyncSession, account_id: str, attempt_id: str) -> QuizAttempt:
    attempt = await get_attempt(session, attempt_id, account_id)
    if attempt is None:
        return None
    if not can_transition(attempt.status, "IN_PROGRESS"):
        raise ValueError("Invalid status transition")
    attempt.status = "IN_PROGRESS"
    await session.flush()
    return attempt


async def complete_attempt(
    session: AsyncSession, account_id: str, attempt_id: str, score: int
) -> QuizAttempt:
    attempt = await get_attempt(session, attempt_id, account_id)
    if attempt is None:
        return None
    if not can_transition(attempt.status, "FINISH"):
        raise ValueError("Invalid status transition")
    attempt.status = "FINISH"
    attempt.score = score
    attempt.finished_at = datetime.utcnow()
    await session.flush()
    # Emit FINISH event for analytics
    event = EventLog(account_id=account_id, event_type="FINISH", occurred_at=attempt.finished_at)
    session.add(event)
    await session.flush()
    return attempt


async def abandon_attempt(session: AsyncSession, account_id: str, attempt_id: str) -> QuizAttempt:
    attempt = await get_attempt(session, attempt_id, account_id)
    if attempt is None:
        return None
    if not can_transition(attempt.status, "ABANDONED"):
        raise ValueError("Invalid status transition")
    attempt.status = "ABANDONED"
    attempt.finished_at = datetime.utcnow()
    await session.flush()
    return attempt


async def list_attempts_by_account(
    session: AsyncSession, account_id: str
) -> list[QuizAttempt]:
    result = await session.execute(
        select(QuizAttempt)
        .where(QuizAttempt.account_id == account_id)
        .order_by(QuizAttempt.created_at.desc())
    )
    return list(result.scalars().all())
