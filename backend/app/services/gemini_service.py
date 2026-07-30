from google import genai
from app.config import settings

print("API Key Loaded:", bool(settings.GEMINI_API_KEY))
print("API Key Prefix:", settings.GEMINI_API_KEY[:8])

from app.config import settings

# Create Gemini Client
client = genai.Client(
    api_key=settings.GEMINI_API_KEY
)


def review_resume(resume_text: str, job_description: str) -> str:
    """
    Review a resume using Gemini AI.
    """

    prompt = f"""
You are an expert ATS Resume Reviewer.

Review the following resume against the given Job Description.

Return the response in this format:

1. ATS Score (out of 100)

2. Strengths

3. Weaknesses

4. Missing Skills

5. Resume Improvements

6. Interview Preparation Tips

Resume:
------------------------
{resume_text}

Job Description:
------------------------
{job_description}
"""

    response = client.models.generate_content(
        model="gemini-3.5-flash-lite",
        contents=prompt,
    )

    return response.text