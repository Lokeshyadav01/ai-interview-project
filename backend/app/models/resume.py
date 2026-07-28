from sqlalchemy import (
    Column,
    Integer,
    String,
    ForeignKey,
    DateTime,
    Text
)

from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.database.database import Base


class Resume(Base):
    __tablename__ = "resumes"

    id = Column(Integer, primary_key=True, index=True)

    filename = Column(String, nullable=False)

    filepath = Column(String, nullable=False)

    # Stores the extracted resume text
    extracted_text = Column(Text)

    uploaded_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    owner = relationship(
        "User",
        back_populates="resumes"
    )