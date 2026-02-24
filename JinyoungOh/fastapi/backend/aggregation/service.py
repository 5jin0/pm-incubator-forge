"""Aggregation service - participation and 4w retention."""
from datetime import date, datetime, timedelta

from sqlalchemy import distinct, func, select
from sqlalchemy.ext.asyncio import AsyncSession

from models import EventLog


async def get_participation(
    session: AsyncSession, from_date: date, to_date: date
) -> tuple[int, int, float]:
    """Returns (finished_users, target_users, participation_rate)."""
    from_ts = datetime.combine(from_date, datetime.min.time())
    to_ts = datetime.combine(to_date, datetime.max.time())

    # target_users: distinct accounts with SERVICE_VISIT between from/to
    target_q = (
        select(func.count(distinct(EventLog.account_id)))
        .where(EventLog.event_type == "SERVICE_VISIT")
        .where(EventLog.occurred_at >= from_ts, EventLog.occurred_at <= to_ts)
    )
    target_result = await session.execute(target_q)
    target_users = target_result.scalar() or 0

    # finished_users: distinct accounts with FINISH between from/to
    finished_q = (
        select(func.count(distinct(EventLog.account_id)))
        .where(EventLog.event_type == "FINISH")
        .where(EventLog.occurred_at >= from_ts, EventLog.occurred_at <= to_ts)
    )
    finished_result = await session.execute(finished_q)
    finished_users = finished_result.scalar() or 0

    participation_rate = (finished_users / target_users) if target_users else 0.0
    return finished_users, target_users, participation_rate


def _week_bounds(anchor: date, week_index: int) -> tuple[datetime, datetime]:
    """week_index 0 = week ending on anchor_date, 1 = previous week, etc."""
    end_date = anchor - timedelta(days=week_index * 7)
    start_date = end_date - timedelta(days=6)
    start_ts = datetime.combine(start_date, datetime.min.time())
    end_ts = datetime.combine(end_date, datetime.max.time())
    return start_ts, end_ts


async def get_retention_4w(
    session: AsyncSession, anchor_date: date
) -> tuple[int, int, float]:
    """Returns (retained_users, total_users, retention_rate)."""
    # 4 weeks: 0..3, ending at anchor_date (week 0 = last 7 days ending anchor_date)
    total_start, _ = _week_bounds(anchor_date, 3)
    _, total_end = _week_bounds(anchor_date, 0)

    # total_users: distinct users with SERVICE_VISIT in the 4-week window
    total_q = (
        select(distinct(EventLog.account_id))
        .where(EventLog.event_type == "SERVICE_VISIT")
        .where(EventLog.occurred_at >= total_start, EventLog.occurred_at <= total_end)
    )
    total_result = await session.execute(total_q)
    all_account_ids = [r[0] for r in total_result.fetchall()]
    total_users = len(all_account_ids)

    if total_users == 0:
        return 0, 0, 0.0

    retained = 0
    for account_id in all_account_ids:
        has_all_weeks = True
        for w in range(4):
            start_ts, end_ts = _week_bounds(anchor_date, w)
            q = (
                select(EventLog.id)
                .where(EventLog.account_id == account_id)
                .where(EventLog.event_type == "SERVICE_VISIT")
                .where(EventLog.occurred_at >= start_ts, EventLog.occurred_at <= end_ts)
                .limit(1)
            )
            r = await session.execute(q)
            if r.scalar() is None:
                has_all_weeks = False
                break
        if has_all_weeks:
            retained += 1

    retention_rate = (retained / total_users) if total_users else 0.0
    return retained, total_users, retention_rate
