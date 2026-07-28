def analyze_resume(resume_text: str):
    """
    Analyze the resume and return basic AI-style insights.
    """

    words = resume_text.split()

    total_words = len(words)

    sections = []

    resume_lower = resume_text.lower()

    if "education" in resume_lower:
        sections.append("Education")

    if "experience" in resume_lower:
        sections.append("Experience")

    if "project" in resume_lower:
        sections.append("Projects")

    if "skill" in resume_lower:
        sections.append("Skills")

    suggestions = []

    if total_words < 250:
        suggestions.append(
            "Resume is too short. Add more project and experience details."
        )

    if "github" not in resume_lower:
        suggestions.append(
            "Add your GitHub profile."
        )

    if "linkedin" not in resume_lower:
        suggestions.append(
            "Add your LinkedIn profile."
        )

    if "docker" not in resume_lower:
        suggestions.append(
            "Learning Docker will improve backend opportunities."
        )

    return {
        "word_count": total_words,
        "sections_found": sections,
        "suggestions": suggestions
    }