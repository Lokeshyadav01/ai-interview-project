from sqlalchemy import Column, Integer, Text, ForeignKey, DateTime
from sqlalchemy.sql import func

from app.database.database import Base


class Analysis(Base):
    __tablename__ = "analyses"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer, ForeignKey("users.id"))

    resume_id = Column(Integer, ForeignKey("resumes.id"))

    job_description = Column(Text)

    ai_feedback = Column(Text)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )