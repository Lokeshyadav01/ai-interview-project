from datetime import datetime
from pydantic import BaseModel


class ResumeResponse(BaseModel):
    id: int
    filename: str
    filepath: str
    uploaded_at: datetime
    user_id: int

    model_config = {
        "from_attributes": True
    }