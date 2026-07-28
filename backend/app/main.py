from fastapi import FastAPI

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

# Create database tables
Base.metadata.create_all(bind=engine)

# Register API routers
app.include_router(auth_router)
app.include_router(resume_router)
app.include_router(analyzer_router)


@app.get("/")
def root():
    return {
        "message": "Welcome to AI Interview Coach API 🚀"
    }