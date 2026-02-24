"""Aggregation router - participation and 4w retention."""
from datetime import date

from fastapi import APIRouter, Depends, Query
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession

from aggregation.service import get_participation, get_retention_4w
from database import get_db

router = APIRouter(prefix="/analytics", tags=["analytics"])


class ParticipationResponse(BaseModel):
    finished_users: int
    target_users: int
    participation_rate: float


class Retention4wResponse(BaseModel):
    retained_users: int
    total_users: int
    retention_rate: float


@router.get("/participation", response_model=ParticipationResponse)
async def get_participation_api(
    from_date: date = Query(..., alias="from"),
    to_date: date = Query(..., alias="to"),
    db: AsyncSession = Depends(get_db),
) -> ParticipationResponse:
    finished_users, target_users, participation_rate = await get_participation(
        db, from_date, to_date
    )
    return ParticipationResponse(
        finished_users=finished_users,
        target_users=target_users,
        participation_rate=participation_rate,
    )


@router.get("/retention/4w", response_model=Retention4wResponse)
async def get_retention_4w_api(
    anchor_date: date = Query(..., alias="anchor_date"),
    db: AsyncSession = Depends(get_db),
) -> Retention4wResponse:
    retained_users, total_users, retention_rate = await get_retention_4w(db, anchor_date)
    return Retention4wResponse(
        retained_users=retained_users,
        total_users=total_users,
        retention_rate=retention_rate,
    )
