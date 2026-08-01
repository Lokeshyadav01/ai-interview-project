from app.services.skill_extractor import extract_skills


def match_job_description(resume_text: str, job_description: str):
    """
    Advanced ATS Matching
    """

    resume_text_lower = resume_text.lower()

    resume_skills = set(extract_skills(resume_text))
    jd_skills = set(extract_skills(job_description))

    matched_skills = sorted(list(resume_skills & jd_skills))
    missing_skills = sorted(list(jd_skills - resume_skills))

    # -----------------------------
    # Skill Score (40%)
    # -----------------------------

    if len(jd_skills) == 0:
        skill_score = 0
    else:
        skill_score = (
            len(matched_skills) / len(jd_skills)
        ) * 40

    # -----------------------------
    # Resume Length (10%)
    # -----------------------------

    words = len(resume_text.split())

    if words >= 500:
        length_score = 10
    elif words >= 350:
        length_score = 8
    elif words >= 250:
        length_score = 6
    else:
        length_score = 3

    # -----------------------------
    # Projects (15%)
    # -----------------------------

    if "project" in resume_text_lower:
        project_score = 15
    else:
        project_score = 0

    # -----------------------------
    # Experience (15%)
    # -----------------------------

    experience_keywords = [
        "experience",
        "internship",
        "intern",
        "software engineer",
        "developer",
        "analyst",
        "worked"
    ]

    if any(word in resume_text_lower for word in experience_keywords):
        experience_score = 15
    else:
        experience_score = 0

    # -----------------------------
    # Education (10%)
    # -----------------------------

    education_keywords = [
        "education",
        "b.tech",
        "bachelor",
        "degree",
        "university",
        "college"
    ]

    if any(word in resume_text_lower for word in education_keywords):
        education_score = 10
    else:
        education_score = 0

    # -----------------------------
    # Contact Details (10%)
    # -----------------------------

    contact_score = 0

    if "@" in resume_text:
        contact_score += 4

    if "linkedin" in resume_text_lower:
        contact_score += 3

    if "github" in resume_text_lower:
        contact_score += 3

    # -----------------------------
    # Final ATS Score
    # -----------------------------

    ats_score = round(
        skill_score
        + length_score
        + project_score
        + experience_score
        + education_score
        + contact_score
    )

    ats_score = min(100, ats_score)

    # -----------------------------
    # Category Scores
    # -----------------------------

    category_scores = {
        "skills": round(skill_score / 40 * 100) if jd_skills else 0,
        "resume_length": round(length_score / 10 * 100),
        "projects": round(project_score / 15 * 100),
        "experience": round(experience_score / 15 * 100),
        "education": round(education_score / 10 * 100),
        "contact": round(contact_score / 10 * 100),
    }

    return {
        "ats_score": ats_score,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills,
        "category_scores": category_scores,
    }