import api from "./api";

export const analyzeResume = async (file, jobDescription) => {
  const formData = new FormData();

  formData.append("resume", file);
  formData.append("job_description", jobDescription);

  const response = await api.post(
    "/analyze/resume",
    formData,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};