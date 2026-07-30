import re


TECH_SKILLS = {
    "python",
    "java",
    "c++",
    "javascript",
    "react",
    "node",
    "fastapi",
    "django",
    "flask",
    "sql",
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
    "html",
    "css",
}


def analyze_resume(text: str):
    """
    Basic AI resume analysis.
    """

    resume = text.lower()

    found_skills = []

    missing_skills = []

    for skill in TECH_SKILLS:

        if re.search(re.escape(skill), resume):
            found_skills.append(skill)

        else:
            missing_skills.append(skill)

    score = int(
        (len(found_skills) / len(TECH_SKILLS)) * 100
    )

    return {
        "ats_score": score,
        "found_skills": sorted(found_skills),
        "missing_skills": sorted(missing_skills),
    }