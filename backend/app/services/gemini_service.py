from google import genai
from app.config import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)


def review_resume(resume_text: str, job_description: str) -> str:
    prompt = f"""
You are an expert ATS Resume Reviewer.

Review the following resume against the given Job Description.

Return:

1. ATS Score (/100)

2. Strengths

3. Weaknesses

4. Missing Skills

5. Resume Improvements

6. Interview Preparation Tips

Resume:
{resume_text}

Job Description:
{job_description}
"""

    response = client.models.generate_content(
        model="gemini-3.5-flash",
        contents=prompt,
    )

    return response.text