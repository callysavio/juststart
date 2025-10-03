import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../styles/SignUpScreen.css";

const SignUpScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Password validation rules
  const passwordValidations = {
    length: formData.password.length >= 10,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    number: /\d/.test(formData.password),
    special: /[@$!%*?&]/.test(formData.password),
  };

  const isStrongPassword =
    passwordValidations.length &&
    passwordValidations.uppercase &&
    passwordValidations.lowercase &&
    passwordValidations.number &&
    passwordValidations.special;

  // Handle form submission
  const handleSubmit = async () => {
    if (!formData.name.trim()) {
      toast.error("Name is required.");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required.");
      return;
    }

    if (!formData.password.trim()) {
      toast.error("Password is required.");
      return;
    }

    if (!isStrongPassword) {
      toast.error(
        "Password must be at least 10 characters long, include uppercase, lowercase, number, and special character."
      );
      return;
    }

    try {
      setLoading(true);

      // Get profile from localStorage
      const profile =
        JSON.parse(localStorage.getItem("userProfessionalDetails")) || {};
      const userType = localStorage.getItem("userType");

      if (!profile) {
        toast.error(
          "Profile data missing. Please go back and complete your profile."
        );
        return;
      }

      const mappedProfile = {
        type: userType || "student",
        job_title: profile.jobTitles || "",
        course: profile.degrees || "",
        certification: profile.certifications || "",
        portfolio_url: profile.linkedin || "",
      };

      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        profile: mappedProfile,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        payload
      );

      if (res.data.success) {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.data.user));

        toast.success("Registration successful");

        setTimeout(() => {
          navigate("/preliminaryanalysis");
        }, 1500);
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#FDFDFD",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 400,
          background: "white",
          padding: 24,
          borderRadius: 16,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {/* Header */}
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <img
            src="/assets/signup-icon.svg"
            alt="Sign Up Icon"
            style={{ width: 66, height: 58 }}
          />
          <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0E0E0E" }}>
            Sign Up
          </h2>
        </div>

        {/* Form Fields */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {["name", "email", "password"].map((field, i) => (
            <div
              key={i}
              style={{ display: "flex", flexDirection: "column", gap: 8 }}
            >
              <label
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  textTransform: "capitalize",
                }}
              >
                {field}
              </label>
              <input
                name={field}
                type={field === "password" ? "password" : "text"}
                placeholder={`Enter your ${field}`}
                value={formData[field]}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: 48,
                  padding: "10px 16px",
                  borderRadius: 8,
                  border: "1px solid #E5E7EB",
                  fontSize: 14,
                  fontFamily: "Montserrat, sans-serif",
                  boxSizing: "border-box",
                }}
              />
              {field === "password" && (
                <div style={{ marginTop: 4, fontSize: 12, color: "#6B7280" }}>
                  <p
                    style={{
                      color: passwordValidations.length ? "green" : "red",
                      margin: 0,
                    }}
                  >
                    {passwordValidations.length ? "✅" : "❌"} At least 10
                    characters
                  </p>
                  <p
                    style={{
                      color: passwordValidations.uppercase ? "green" : "red",
                      margin: 0,
                    }}
                  >
                    {passwordValidations.uppercase ? "✅" : "❌"} One uppercase
                    letter
                  </p>
                  <p
                    style={{
                      color: passwordValidations.lowercase ? "green" : "red",
                      margin: 0,
                    }}
                  >
                    {passwordValidations.lowercase ? "✅" : "❌"} One lowercase
                    letter
                  </p>
                  <p
                    style={{
                      color: passwordValidations.number ? "green" : "red",
                      margin: 0,
                    }}
                  >
                    {passwordValidations.number ? "✅" : "❌"} One number
                  </p>
                  <p
                    style={{
                      color: passwordValidations.special ? "green" : "red",
                      margin: 0,
                    }}
                  >
                    {passwordValidations.special ? "✅" : "❌"} One special
                    character (@$!%*?&)
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          style={{
            height: 48,
            background: "#0863C1",
            color: "white",
            fontWeight: 600,
            fontSize: 16,
            borderRadius: 100,
            border: "none",
            cursor: "pointer",
          }}
          disabled={loading}
        >
          {loading ? "Processing..." : "Sign Up"}
        </button>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <hr style={{ flex: 1, borderColor: "#E5E7EB" }} />
          <span style={{ color: "#9997A1", fontSize: 16 }}>or</span>
          <hr style={{ flex: 1, borderColor: "#E5E7EB" }} />
        </div>

        {/* Social Login Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
          }}
        >
          {[
            { src: "/assets/google.svg", alt: "Google" },
            { src: "/assets/facebook.svg", alt: "Facebook" },
            { src: "/assets/linkedin.svg", alt: "LinkedIn" },
            { src: "/assets/x.svg", alt: "X (Twitter)" },
          ].map((icon, i) => (
            <div
              key={i}
              style={{
                padding: 10,
                background: "white",
                borderRadius: 40,
                border: "1px solid #0863C1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
              }}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                style={{
                  width: "80%",
                  height: "80%",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
