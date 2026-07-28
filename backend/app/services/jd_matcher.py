from app.services.skill_extractor import extract_skills


def match_job_description(resume_text: str, job_description: str):
    """
    Compare resume skills with job description skills.
    """

    resume_skills = set(extract_skills(resume_text))
    jd_skills = set(extract_skills(job_description))

    matched_skills = sorted(list(resume_skills & jd_skills))
    missing_skills = sorted(list(jd_skills - resume_skills))

    if len(jd_skills) == 0:
        score = 0
    else:
        score = round((len(matched_skills) / len(jd_skills)) * 100)

    return {
        "ats_score": score,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills,
    }