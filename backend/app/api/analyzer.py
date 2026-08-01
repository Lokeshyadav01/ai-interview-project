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
    Upload resume and perform complete AI analysis.
    """

    # ---------------------------------
    # Validate File
    # ---------------------------------

    allowed_extensions = [".pdf", ".docx"]

    extension = os.path.splitext(
        resume.filename
    )[1].lower()

    if extension not in allowed_extensions:
        raise HTTPException(
            status_code=400,
            detail="Only PDF and DOCX files are allowed."
        )

    # ---------------------------------
    # Create Upload Folder
    # ---------------------------------

    os.makedirs(
        UPLOAD_FOLDER,
        exist_ok=True
    )

    unique_filename = (
        f"{uuid.uuid4()}{extension}"
    )

    filepath = os.path.join(
        UPLOAD_FOLDER,
        unique_filename
    )

    # ---------------------------------
    # Save Resume
    # ---------------------------------

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(
            resume.file,
            buffer
        )

    # ---------------------------------
    # Extract Resume Text
    # ---------------------------------

    resume_text = extract_resume_text(
        filepath
    )

    # ---------------------------------
    # Save Resume in Database
    # ---------------------------------

    resume_db = Resume(
        filename=resume.filename,
        filepath=filepath,
        extracted_text=resume_text,
        user_id=current_user.id,
    )

    db.add(resume_db)
    db.commit()
    db.refresh(resume_db)

    # ---------------------------------
    # ATS Skill Matching
    # ---------------------------------

    ats_result = match_job_description(
        resume_text,
        job_description,
    )

    # ---------------------------------
    # AI Resume Analysis
    # ---------------------------------

    ai_result = analyze_resume(
        resume_text
    )

    # ---------------------------------
    # Feedback Generator
    # ---------------------------------

    feedback = generate_feedback(
        ats_result
    )

    # ---------------------------------
    # Gemini AI Review
    # ---------------------------------

    ai_review = review_resume(
        resume_text,
        job_description,
    )

    # ---------------------------------
    # Save Analysis History
    # ---------------------------------

    save_analysis(
        db=db,
        user_id=current_user.id,
        resume_id=resume_db.id,
        job_description=job_description,
        ai_feedback=ai_review,
    )

    # ---------------------------------
    # Final Response
    # ---------------------------------

    return {

        "success": True,

        "filename": resume.filename,

        "resume_id": resume_db.id,

        # ATS
        "ats_score": ats_result["ats_score"],
        
        "category_scores": ats_result["category_scores"],

        "matched_skills": ats_result["matched_skills"],

        "missing_skills": ats_result["missing_skills"],

        # Statistics
        "word_count": ai_result["word_count"],

        "sections_found": ai_result["sections_found"],

        # Resume Analysis
        "strengths": ai_result["strengths"],

        "weaknesses": ai_result["weaknesses"],

        "resume_suggestions": ai_result["suggestions"],

        # Feedback
        "feedback": feedback,

        # Gemini
        "gemini_review": ai_review,

    }