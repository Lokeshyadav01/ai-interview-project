from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.database.database import Base, engine
import app.database.base

from app.api.auth import router as auth_router
from app.api.resume import router as resume_router
from app.api.analyzer import router as analyzer_router


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION
)

# -----------------------------
# CORS Configuration
# -----------------------------
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Create database tables
# -----------------------------
Base.metadata.create_all(bind=engine)

# -----------------------------
# Register routers
# -----------------------------
app.include_router(auth_router)
app.include_router(resume_router)
app.include_router(analyzer_router)


@app.get("/")
def root():
    return {
        "message": "Welcome to AI Interview Coach API 🚀"
    }