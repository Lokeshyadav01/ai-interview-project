import re

COMMON_SKILLS = {

    # Programming Languages
    "python",
    "java",
    "c",
    "c++",
    "c#",
    "javascript",
    "typescript",
    "php",
    "go",
    "rust",
    "kotlin",
    "swift",
    "r",

    # Frontend
    "html",
    "css",
    "bootstrap",
    "tailwind css",
    "react",
    "next.js",
    "vue",
    "angular",

    # Backend
    "node.js",
    "express",
    "fastapi",
    "flask",
    "django",
    "spring boot",
    ".net",

    # Databases
    "sql",
    "mysql",
    "postgresql",
    "mongodb",
    "sqlite",
    "oracle",
    "redis",

    # Cloud
    "aws",
    "azure",
    "gcp",

    # DevOps
    "docker",
    "kubernetes",
    "jenkins",
    "git",
    "github",
    "gitlab",

    # Data Analytics
    "excel",
    "microsoft excel",
    "power bi",
    "tableau",
    "pandas",
    "numpy",
    "matplotlib",
    "seaborn",
    "plotly",

    # Machine Learning
    "machine learning",
    "deep learning",
    "artificial intelligence",
    "tensorflow",
    "keras",
    "pytorch",
    "opencv",
    "scikit-learn",
    "xgboost",

    # NLP
    "nlp",
    "natural language processing",
    "transformers",
    "bert",
    "huggingface",

    # Data Engineering
    "etl",
    "data cleaning",
    "data visualization",
    "data analysis",
    "data analytics",
    "statistical analysis",
    "statistics",
    "dashboard",
    "visual reporting",

    # Big Data
    "hadoop",
    "spark",
    "kafka",

    # CS Fundamentals
    "data structures",
    "algorithms",
    "oop",
    "operating systems",
    "computer networks",
    "dbms",

    # Soft Skills
    "communication",
    "problem solving",
    "critical thinking",
    "leadership",
    "teamwork",
    "time management",
}


def extract_skills(text: str):
    """
    Extract skills from resume or job description.
    """

    if not text:
        return []

    text = text.lower()

    found_skills = set()

    for skill in COMMON_SKILLS:

        pattern = r"\b" + re.escape(skill.lower()) + r"\b"

        if re.search(pattern, text):
            found_skills.add(skill)

    return sorted(list(found_skills))