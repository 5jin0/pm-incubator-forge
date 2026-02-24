"""Engagement service - ensure account exists, record SERVICE_VISIT."""
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from models import Account, EventLog


async def ensure_account(session: AsyncSession, account_id: str) -> Account:
    result = await session.execute(select(Account).where(Account.id == account_id))
    account = result.scalar_one_or_none()
    if account is None:
        account = Account(id=account_id)
        session.add(account)
        await session.flush()
    return account


async def record_visit(session: AsyncSession, account_id: str) -> None:
    await ensure_account(session, account_id)
    event = EventLog(account_id=account_id, event_type="SERVICE_VISIT")
    session.add(event)
    await session.flush()
