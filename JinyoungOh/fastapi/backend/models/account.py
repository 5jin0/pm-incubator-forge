"""Account model - UUID primary key, optional kakao_id for sync."""
import uuid

from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from models.base import Base


class Account(Base):
    __tablename__ = "accounts"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    kakao_id: Mapped[str | None] = mapped_column(String(64), unique=True, nullable=True, index=True)

    event_logs = relationship("EventLog", back_populates="account", lazy="raise")
    quiz_attempts = relationship("QuizAttempt", back_populates="account", lazy="raise")
