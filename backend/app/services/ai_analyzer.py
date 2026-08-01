import re

TECH_SKILLS = {
    "python",
    "java",
    "c++",
    "c",
    "javascript",
    "typescript",
    "react",
    "nodejs",
    "fastapi",
    "django",
    "flask",
    "sql",
    "mysql",
    "postgresql",
    "mongodb",
    "docker",
    "git",
    "github",
    "aws",
    "azure",
    "tensorflow",
    "pytorch",
    "machine learning",
    "deep learning",
    "data science",
    "nlp",
    "computer vision",
    "html",
    "css",
}

SECTIONS = [
    "summary",
    "objective",
    "education",
    "experience",
    "work experience",
    "projects",
    "skills",
    "technical skills",
    "certifications",
    "achievements",
    "internships",
    "languages",
]

EMAIL_REGEX = r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
PHONE_REGEX = r"(\+91)?[6-9]\d{9}"
LINKEDIN_REGEX = r"linkedin\.com"
GITHUB_REGEX = r"github\.com"


def analyze_resume(text: str):
    """
    Advanced Resume Analysis
    """

    resume = text.lower()

    # -----------------------------
    # Skills
    # -----------------------------

    found_skills = []

    missing_skills = []

    for skill in TECH_SKILLS:

        if re.search(re.escape(skill), resume):
            found_skills.append(skill)

        else:
            missing_skills.append(skill)

    ats_score = int(
        (len(found_skills) / len(TECH_SKILLS)) * 100
    )

    # -----------------------------
    # Word Count
    # -----------------------------

    word_count = len(text.split())

    # -----------------------------
    # Resume Sections
    # -----------------------------

    sections_found = []

    for section in SECTIONS:

        if section in resume:
            sections_found.append(section.title())

    # -----------------------------
    # Contact Information
    # -----------------------------

    has_email = bool(
        re.search(EMAIL_REGEX, text)
    )

    has_phone = bool(
        re.search(PHONE_REGEX, text)
    )

    has_linkedin = bool(
        re.search(LINKEDIN_REGEX, resume)
    )

    has_github = bool(
        re.search(GITHUB_REGEX, resume)
    )

    # -----------------------------
    # Strengths
    # -----------------------------

    strengths = []

    if has_email:
        strengths.append(
            "Professional email address found."
        )

    if has_phone:
        strengths.append(
            "Phone number included."
        )

    if has_linkedin:
        strengths.append(
            "LinkedIn profile included."
        )

    if has_github:
        strengths.append(
            "GitHub profile included."
        )

    if word_count >= 400:
        strengths.append(
            "Resume contains detailed information."
        )

    if len(found_skills) >= 10:
        strengths.append(
            "Strong technical skillset."
        )

    if "projects" in resume:
        strengths.append(
            "Projects section found."
        )

    if "experience" in resume:
        strengths.append(
            "Experience section found."
        )

    if "education" in resume:
        strengths.append(
            "Education section included."
        )

    # -----------------------------
    # Weaknesses
    # -----------------------------

    weaknesses = []

    if not has_linkedin:
        weaknesses.append(
            "LinkedIn profile missing."
        )

    if not has_github:
        weaknesses.append(
            "GitHub profile missing."
        )

    if word_count < 300:
        weaknesses.append(
            "Resume content is too short."
        )

    if "summary" not in resume:
        weaknesses.append(
            "Professional summary missing."
        )

    if "certifications" not in resume:
        weaknesses.append(
            "Certifications section missing."
        )

    if len(found_skills) < 8:
        weaknesses.append(
            "Add more relevant technical skills."
        )

    # -----------------------------
    # Suggestions
    # -----------------------------

    suggestions = []

    if not has_linkedin:
        suggestions.append(
            "Add your LinkedIn profile."
        )

    if not has_github:
        suggestions.append(
            "Add your GitHub profile."
        )

    if word_count < 350:
        suggestions.append(
            "Increase resume content with measurable achievements."
        )

    if "projects" not in resume:
        suggestions.append(
            "Add 2-3 industry-level projects."
        )

    if "experience" not in resume:
        suggestions.append(
            "Include internship or work experience."
        )

    if "certifications" not in resume:
        suggestions.append(
            "Add relevant certifications."
        )

    if len(found_skills) < 10:
        suggestions.append(
            "Include more keywords from the job description."
        )

    # -----------------------------
    # Final Result
    # -----------------------------

    return {

        "ats_score": ats_score,

        "found_skills": sorted(found_skills),

        "missing_skills": sorted(missing_skills),

        "word_count": word_count,

        "sections_found": sections_found,

        "strengths": strengths,

        "weaknesses": weaknesses,

        "suggestions": suggestions,

    }