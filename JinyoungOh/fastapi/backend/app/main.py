from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config.env import load_env
from app.kakao_authentication.controller.kakao_oauth_controller import router as kakao_oauth_router

# New routers (backend root)
from database import engine, get_db
from models.base import Base
from engagement.router import router as engagement_router
from quiz.router import router as quiz_router
from aggregation.router import router as analytics_router
from account.router import router as account_router

# Import models so Base.metadata has all tables
from models import Account, EventLog, QuizAttempt  # noqa: F401

# 애플리케이션 전역에서 .env 1회 로드 보장 (uvicorn이 app.main:app 직접 로드 시에도 동작)
load_env()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(kakao_oauth_router)
app.include_router(engagement_router)
app.include_router(quiz_router)
app.include_router(analytics_router)
app.include_router(account_router)


@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


@app.get("/")
def root():
    return {"message": "Hello"}
