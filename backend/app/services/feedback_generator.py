def generate_feedback(result: dict):
    feedback = []

    if result["ats_score"] >= 90:
        feedback.append("Excellent resume match.")
    elif result["ats_score"] >= 75:
        feedback.append("Good resume. A few improvements can increase your ATS score.")
    else:
        feedback.append("Your resume needs improvement for this job description.")

    if result["missing_skills"]:
        feedback.append(
            "Add these skills if you have experience with them: "
            + ", ".join(result["missing_skills"])
        )

    if len(result["matched_skills"]) < 5:
        feedback.append(
            "Include more relevant technical skills and projects."
        )

    feedback.append(
        "Use action verbs and quantify achievements with numbers."
    )

    return feedback