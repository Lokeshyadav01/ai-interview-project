import os
import shutil

from fastapi import APIRouter, UploadFile, File, Form, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.models.resume import Resume
from fastapi import Depends
from app.auth.dependencies import get_current_user
from app.models.user import User
from app.services.resume_parser import extract_resume_text
from app.services.jd_matcher import match_job_description
from app.services.feedback_generator import generate_feedback
from app.services.ai_analyzer import analyze_resume
from app.services.gemini_service import review_resume
from app.services.analysis_service import save_analysis


router = APIRouter(
    prefix="/analyze",
    tags=["ATS Analyzer"]
)

UPLOAD_FOLDER = "uploads"


@router.post("/resume")
async def analyze_resume_endpoint(
    resume: UploadFile = File(...),
    job_description: str = Form(...),
    current_user: User = Depends(get_current_user),
):
    """
    Analyze Resume
    """

    # Create uploads folder
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)

    # Save uploaded resume
    filepath = os.path.join(
        UPLOAD_FOLDER,
        resume.filename
    )

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(resume.file, buffer)

    # Extract text
    resume_text = extract_resume_text(filepath)

    # Save resume to database
    resume_db = Resume(
        filename=resume.filename,
        filepath=filepath,
        extracted_text=resume_text,
        user_id=1      # Temporary user until JWT authentication
    )

    db.add(resume_db)
    db.commit()
    db.refresh(resume_db)

    # ATS Skill Matching
    ats_result = match_job_description(
        resume_text,
        job_description
    )

    # Rule Based Analysis
    ai_result = analyze_resume(resume_text)

    # Feedback Generator
    feedback = generate_feedback(
        ats_result
    )

    # Gemini AI Review
    ai_review = review_resume(
        resume_text,
        job_description
    )

    # Save Analysis to Database
    save_analysis(
        db=db,
        user_id=1,
        resume_id=resume_db.id,
        job_description=job_description,
        ai_feedback=ai_review
    )

    # API Response
    return {
        "filename": resume.filename,

        "ats_score": ats_result["ats_score"],

        "matched_skills": ats_result["matched_skills"],

        "missing_skills": ats_result["missing_skills"],

        "feedback": feedback,

        "word_count": ai_result["word_count"],

        "sections_found": ai_result["sections_found"],

        "resume_suggestions": ai_result["suggestions"],

        "gemini_review": ai_review
    }