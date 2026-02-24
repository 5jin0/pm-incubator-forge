"""Account router - sync by kakao_id to get account_id after Kakao login."""
from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from database import get_db
from models import Account

router = APIRouter(prefix="/account", tags=["account"])


class SyncBody(BaseModel):
    kakao_id: int


class SyncResponse(BaseModel):
    account_id: str


@router.post("/sync", response_model=SyncResponse)
async def post_sync(body: SyncBody, db: AsyncSession = Depends(get_db)) -> SyncResponse:
    kakao_str = str(body.kakao_id)
    result = await db.execute(select(Account).where(Account.kakao_id == kakao_str))
    account = result.scalar_one_or_none()
    if account is None:
        account = Account(kakao_id=kakao_str)
        db.add(account)
        await db.flush()
    return SyncResponse(account_id=account.id)
