import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfessionalDetailsForm = () => {
  const [formData, setFormData] = useState({
    jobTitles: "",
    degrees: "",
    certifications: "",
    linkedin: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // URL validation helper
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async () => {
    // Required field validation
    if (!formData.jobTitles.trim()) {
      toast.error("Previous and Current Job Titles are required.");
      return;
    }

    if (!formData.degrees.trim()) {
      toast.error("Academic Degrees are required.");
      return;
    }

    // URL validation
    if (!formData.linkedin.trim()) {
      toast.error("LinkedIn or Portfolio URL is required.");
      return;
    }

    if (!isValidUrl(formData.linkedin)) {
      toast.error("Please enter a valid LinkedIn or Portfolio URL.");
      return;
    }

    setLoading(true);

    try {
      // Save form data to localStorage
      localStorage.setItem("userProfessionalDetails", JSON.stringify(formData));

      // Prepare payload
      const payload = {
        job_title: formData.jobTitles,
        course: formData.degrees,
      };

      // Send POST request using axios
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/skill-job-match`,
        payload
      );

      const data = response.data;

      if (data.success) {
        localStorage.setItem("skillJobMatchData", JSON.stringify(data.data));
      } else {
        console.error("API error:", data.message);
        toast.error("Something went wrong. Please try again.");
      }

      navigate("/dataprocessingplaceholderbufferscreen");
    } catch (error) {
      console.error("Request failed:", error);
      toast.error("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={pageWrapperStyle}>
      <div style={formContainerStyle}>
        <h2 style={titleStyle}>Professional Details</h2>

        <FormField
          label="Previous and Current Job Titles"
          name="jobTitles"
          placeholder="e.g. Marketing Analyst"
          value={formData.jobTitles}
          onChange={handleChange}
        />

        <FormField
          label="Academic Degrees You Hold"
          name="degrees"
          placeholder="e.g. BSc in Psychology"
          value={formData.degrees}
          onChange={handleChange}
        />

        <FormField
          label="Professional Certifications"
          name="certifications"
          placeholder="e.g. PMP, CPA"
          value={formData.certifications}
          onChange={handleChange}
        />

        <FormField
          label="LinkedIn / Portfolio URL"
          name="linkedin"
          placeholder="https://linkedin.com/in/your-profile"
          value={formData.linkedin}
          onChange={handleChange}
          type="url"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            ...buttonStyle,
            backgroundColor: loading ? "#5D9CEC" : "#0863C1",
          }}
        >
          {loading ? "Processing..." : "Submit"}
        </button>
      </div>
      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

const FormField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) => (
  <div>
    <label style={labelStyle}>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={inputStyle}
    />
  </div>
);

// Styles
const pageWrapperStyle = {
  minHeight: "100vh",
  width: "100%",
  backgroundColor: "#FDFDFD",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 24px",
  fontFamily: "Montserrat, sans-serif",
};

const formContainerStyle = {
  width: "100%",
  maxWidth: 400,
  backgroundColor: "white",
  padding: "32px 24px",
  borderRadius: 16,
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  display: "flex",
  flexDirection: "column",
  gap: 24,
};

const titleStyle = {
  fontSize: 22,
  fontWeight: 600,
  textAlign: "center",
  color: "#222",
};

const labelStyle = {
  fontWeight: 500,
  fontSize: 14,
  color: "#333",
};

const inputStyle = {
  marginTop: 8,
  width: "100%",
  padding: "10px 16px",
  borderRadius: 8,
  border: "1px solid #E5E7EB",
  fontSize: 14,
  fontFamily: "Montserrat, sans-serif",
  boxSizing: "border-box",
};

const buttonStyle = {
  color: "white",
  padding: "14px 0",
  borderRadius: 100,
  fontSize: 16,
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

export default UserProfessionalDetailsForm;
