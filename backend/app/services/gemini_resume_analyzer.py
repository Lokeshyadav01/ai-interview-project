import json
from google import genai

from app.config import settings


client = genai.Client(
    api_key=settings.GEMINI_API_KEY
)


def analyze_resume_ai(
    resume_text: str,
    job_description: str,
):
    """
    AI Resume Analysis using Gemini.
    Returns a structured JSON response.
    """

    prompt = f"""
You are an expert ATS Resume Analyzer.

Analyze the resume against the Job Description.

Return ONLY valid JSON.

Resume:
{resume_text}

Job Description:
{job_description}

Rules:
- ATS score must be between 0 and 100.
- Identify all matching skills.
- Identify all missing skills.
- Count the total words in the resume.
- Detect resume sections.
- Give strengths.
- Give weaknesses.
- Give improvement suggestions.
- Give grammar score (0-100).
- Give formatting score (0-100).
- Give projects score (0-100).
- Give experience score (0-100).
- Write a detailed AI review.

Return EXACTLY this JSON:

{{
    "ats_score": 0,
    "matched_skills": [],
    "missing_skills": [],
    "word_count": 0,
    "sections_found": [],
    "strengths": [],
    "weaknesses": [],
    "suggestions": [],
    "grammar_score": 0,
    "formatting_score": 0,
    "projects_score": 0,
    "experience_score": 0,
    "overall_review": ""
}}

Do NOT return markdown.

Do NOT return explanation.

Only JSON.
"""

    try:

        response = client.models.generate_content(
            model="gemini-3.6-flash",
            contents=prompt,
        )

        text = response.text.strip()

        # Remove markdown if Gemini wraps JSON
        if text.startswith("```json"):
            text = text.replace("```json", "")
            text = text.replace("```", "")
            text = text.strip()

        data = json.loads(text)

        return data

    except Exception as e:

        print("\n========== GEMINI ERROR ==========")
        print(e)
        print("==================================\n")

        return {
            "ats_score": 0,
            "matched_skills": [],
            "missing_skills": [],
            "word_count": len(resume_text.split()),
            "sections_found": [],
            "strengths": [],
            "weaknesses": [],
            "suggestions": [
                "Unable to analyze resume using Gemini."
            ],
            "grammar_score": 0,
            "formatting_score": 0,
            "projects_score": 0,
            "experience_score": 0,
            "overall_review": "Gemini AI analysis failed. Please try again.",
        }