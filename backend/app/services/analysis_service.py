from sqlalchemy.orm import Session

from app.models.analysis import Analysis


def save_analysis(
    db: Session,
    user_id: int,
    resume_id: int,
    job_description: str,
    ai_feedback: str,
):
    analysis = Analysis(
        user_id=user_id,
        resume_id=resume_id,
        job_description=job_description,
        ai_feedback=ai_feedback,
    )

    db.add(analysis)
    db.commit()
    db.refresh(analysis)

    return analysis


def get_user_analysis(db: Session, user_id: int):
    return (
        db.query(Analysis)
        .filter(Analysis.user_id == user_id)
        .order_by(Analysis.created_at.desc())
        .all()
    )