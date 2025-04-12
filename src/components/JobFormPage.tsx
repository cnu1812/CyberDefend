import React, { useState } from "react";
import { useParams } from "react-router-dom";

const JobFormPage = () => {
  const { slug } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    resumeLink: "",
  });

  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("Submitting application...");
  
    if (!formData.resumeLink.trim()) {
      setStatus("Please provide your resume link.");
      setSubmitting(false);
      return;
    }
  
    try {
      const payload = {
        position: slug,
        ...formData,
      };
  
      await fetch(
        "https://script.google.com/macros/s/AKfycbwaOyKXJi2rvvuonMNIZXskHgeZVDRsAFe10PNPlnmR6zr6CmAp9nkca0LQ1Ol7iNiFzg/exec",
        {
          method: "POST",
          mode: "no-cors", // ✅ required
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
  
      setStatus("✅ Application submitted! We'll be in touch.");
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("❌ Error submitting application.");
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 capitalize text-accent">
        Apply for: {slug?.replace(/-/g, " ")}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {["name", "phone", "email", "linkedin", "github", "resumeLink"].map((field) => (
          <div key={field}>
            <label className="block mb-1 text-sm capitalize">
              {field === "resumeLink" ? "Resume Link (Google Drive, etc.)" : field}
            </label>
            <input
              required
              type={field === "email" ? "email" : "text"}
              name={field}
              onChange={handleChange}
              placeholder={field === "resumeLink" ? "https://drive.google.com/..." : ""}
              className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={submitting}
          className="bg-accent hover:bg-white text-black font-bold px-6 py-3 rounded transition"
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>

        {status && <p className="mt-4 text-accent">{status}</p>}
      </form>
    </div>
  );
};

export default JobFormPage;
