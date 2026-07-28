import re

COMMON_SKILLS = {
    "python",
    "java",
    "c++",
    "c",
    "sql",
    "mysql",
    "postgresql",
    "mongodb",
    "fastapi",
    "flask",
    "django",
    "javascript",
    "typescript",
    "react",
    "nodejs",
    "html",
    "css",
    "git",
    "docker",
    "aws",
    "azure",
    "machine learning",
    "deep learning",
    "tensorflow",
    "pytorch",
    "nlp",
    "data structures",
    "algorithms",
    "oop"
}


def extract_skills(text: str):

    text = text.lower()

    skills = set()

    for skill in COMMON_SKILLS:
        pattern = r"\b" + re.escape(skill) + r"\b"

        if re.search(pattern, text):
            skills.add(skill)

    return sorted(list(skills))