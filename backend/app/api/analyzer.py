import os
import uuid
import shutil

from fastapi import (
    APIRouter,
    UploadFile,
    File,
    Form,
    Depends,
    HTTPException,
)
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.models.resume import Resume
from app.models.user import User

from app.auth.dependencies import get_current_user

from app.services.resume_parser import extract_resume_text
from app.services.jd_matcher import match_job_description
from app.services.feedback_generator import generate_feedback
from app.services.ai_analyzer import analyze_resume
from app.services.gemini_service import review_resume
from app.services.analysis_service import save_analysis


router = APIRouter(
    prefix="/analyze",
    tags=["ATS Analyzer"],
)

UPLOAD_FOLDER = "uploads"


@router.post("/resume")
async def analyze_resume_endpoint(
    resume: UploadFile = File(...),
    job_description: str = Form(...),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """
    Upload a resume, compare it with a job description,
    generate ATS score, AI feedback, and save everything.
    """

    # Validate file type
    allowed_extensions = [".pdf", ".docx"]

    extension = os.path.splitext(
        resume.filename
    )[1].lower()

    if extension not in allowed_extensions:
        raise HTTPException(
            status_code=400,
            detail="Only PDF and DOCX files are allowed.",
        )

    # Create uploads folder
    os.makedirs(
        UPLOAD_FOLDER,
        exist_ok=True,
    )

    # Generate unique filename
    unique_filename = (
        f"{uuid.uuid4()}{extension}"
    )

    filepath = os.path.join(
        UPLOAD_FOLDER,
        unique_filename,
    )

    # Save uploaded file
    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(
            resume.file,
            buffer,
        )

    # Extract text from resume
    resume_text = extract_resume_text(
        filepath
    )

    # Save resume in database
    resume_db = Resume(
        filename=resume.filename,
        filepath=filepath,
        extracted_text=resume_text,
        user_id=current_user.id,
    )

    db.add(resume_db)
    db.commit()
    db.refresh(resume_db)

    # ATS Matching
    ats_result = match_job_description(
        resume_text,
        job_description,
    )

    # Rule-Based Resume Analysis
    ai_result = analyze_resume(
        resume_text
    )

    # Feedback Generator
    feedback = generate_feedback(
        ats_result
    )

    # Gemini AI Review
    ai_review = review_resume(
        resume_text,
        job_description,
    )

    # Save analysis
    save_analysis(
        db=db,
        user_id=current_user.id,
        resume_id=resume_db.id,
        job_description=job_description,
        ai_feedback=ai_review,
    )

    # Final API Response
    return {
        "success": True,
        "filename": resume.filename,
        "resume_id": resume_db.id,

        "ats_score": ats_result["ats_score"],

        "matched_skills": ats_result["matched_skills"],

        "missing_skills": ats_result["missing_skills"],

        "feedback": feedback,

        "word_count": ai_result["word_count"],

        "sections_found": ai_result["sections_found"],

        "resume_suggestions": ai_result["suggestions"],

        "gemini_review": ai_review,
    }