from pydantic import BaseModel
from datetime import datetime


class AnalysisResponse(BaseModel):
    id: int
    user_id: int
    resume_id: int
    job_description: str
    ai_feedback: str
    created_at: datetime

    class Config:
        from_attributes = True