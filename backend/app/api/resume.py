import os
import shutil

from fastapi import APIRouter, UploadFile, File, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.resume import Resume
from app.models.user import User

from app.auth.oauth2 import get_current_user
from app.services.resume_parser import extract_resume_text


router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)

UPLOAD_FOLDER = "uploads/resumes"


@router.post("/upload")
async def upload_resume(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):

    # Allow only PDF and DOCX files
    allowed_extensions = [".pdf", ".docx"]

    extension = os.path.splitext(file.filename)[1].lower()

    if extension not in allowed_extensions:
        raise HTTPException(
            status_code=400,
            detail="Only PDF and DOCX files are allowed."
        )

    # Create upload directory
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)

    filepath = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    # Save uploaded file
    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract text from resume
    extracted_text = extract_resume_text(filepath)

    # Save details to database
    new_resume = Resume(
        filename=file.filename,
        filepath=filepath,
        extracted_text=extracted_text,
        user_id=current_user.id
    )

    db.add(new_resume)
    db.commit()
    db.refresh(new_resume)

    return {
        "message": "Resume uploaded successfully!",
        "resume_id": new_resume.id,
        "filename": new_resume.filename
    }