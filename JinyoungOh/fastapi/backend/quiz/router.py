"""Quiz router - start, progress, complete, abandon."""
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession

from database import get_db
from quiz.service import (
    start_attempt,
    get_attempt,
    progress_attempt,
    complete_attempt,
    abandon_attempt,
    list_attempts_by_account,
)

router = APIRouter(prefix="/quiz", tags=["quiz"])


class StartBody(BaseModel):
    account_id: str
    quiz_id: str
    difficulty_level: str  # LOW | MID | HIGH


class StartResponse(BaseModel):
    attempt_id: str


class ProgressBody(BaseModel):
    account_id: str
    attempt_id: str


class ProgressResponse(BaseModel):
    ok: bool


class CompleteBody(BaseModel):
    account_id: str
    attempt_id: str
    score: int


class CompleteResponse(BaseModel):
    ok: bool


class AbandonBody(BaseModel):
    account_id: str
    attempt_id: str


class AbandonResponse(BaseModel):
    ok: bool


@router.post("/start", response_model=StartResponse)
async def post_start(body: StartBody, db: AsyncSession = Depends(get_db)) -> StartResponse:
    attempt = await start_attempt(
        db, body.account_id, body.quiz_id, body.difficulty_level
    )
    return StartResponse(attempt_id=attempt.id)


@router.post("/progress", response_model=ProgressResponse)
async def post_progress(body: ProgressBody, db: AsyncSession = Depends(get_db)) -> ProgressResponse:
    attempt = await get_attempt(db, body.attempt_id, body.account_id)
    if attempt is None:
        raise HTTPException(status_code=404, detail="Attempt not found")
    try:
        await progress_attempt(db, body.account_id, body.attempt_id)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    return ProgressResponse(ok=True)


@router.post("/complete", response_model=CompleteResponse)
async def post_complete(body: CompleteBody, db: AsyncSession = Depends(get_db)) -> CompleteResponse:
    attempt = await get_attempt(db, body.attempt_id, body.account_id)
    if attempt is None:
        raise HTTPException(status_code=404, detail="Attempt not found")
    try:
        await complete_attempt(db, body.account_id, body.attempt_id, body.score)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    return CompleteResponse(ok=True)


@router.post("/abandon", response_model=AbandonResponse)
async def post_abandon(body: AbandonBody, db: AsyncSession = Depends(get_db)) -> AbandonResponse:
    attempt = await get_attempt(db, body.attempt_id, body.account_id)
    if attempt is None:
        raise HTTPException(status_code=404, detail="Attempt not found")
    try:
        await abandon_attempt(db, body.account_id, body.attempt_id)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    return AbandonResponse(ok=True)


class AttemptItem(BaseModel):
    id: str
    quiz_id: str
    difficulty_level: str
    status: str
    score: int | None
    created_at: str
    finished_at: str | None


@router.get("/history", response_model=list[AttemptItem])
async def get_history(
    account_id: str,
    db: AsyncSession = Depends(get_db),
) -> list[AttemptItem]:
    attempts = await list_attempts_by_account(db, account_id)
    return [
        AttemptItem(
            id=a.id,
            quiz_id=a.quiz_id,
            difficulty_level=a.difficulty_level,
            status=a.status,
            score=a.score,
            created_at=a.created_at.isoformat() if a.created_at else "",
            finished_at=a.finished_at.isoformat() if a.finished_at else None,
        )
        for a in attempts
    ]
