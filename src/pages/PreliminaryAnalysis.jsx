import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FloatingButtons from "../components/FloatingButtons";
import SignUpModal from "../components/SignUpModal";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  CartesianGrid,
} from "recharts";

const PreliminaryAnalysis = () => {
  const [showModal, setShowModal] = useState(false);
  const [skills, setSkills] = useState([]);
  const [jobMatchData, setJobMatchData] = useState([]);
  const [profile, setProfile] = useState(null);
  const [skillsCount, setSkillsCount] = useState(null);
  const [jobsCount, setJobsCount] = useState(null);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [signupButtonDisabled, setSignupButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const initializeData = async () => {
      try {
        setLoading(true);
        setError(null);

        const storedProfile = localStorage.getItem("userProfessionalDetails");
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          try {
            const parsedUser = JSON.parse(storedUser);
            if (parsedUser.name) {
              setUserName(parsedUser.name);
            }
          } catch (error) {
            console.error("Error parsing stored user:", error);
          }
        }

        if (storedProfile) {
          setProfile(JSON.parse(storedProfile));
        }

        if (token) {
          setIsSignedUp(true);
          setSignupButtonDisabled(true);
          await fetchSignedUpUserData(token);
        } else {
          fetchLocalData();
        }
      } catch (err) {
        console.error("Error initializing data:", err);
        setError("Failed to load data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    initializeData();
  }, []);

  const fetchSignedUpUserData = async (token) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/skill-job-analysis`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );


      // Corrected: axios responses have .data property and .status, not .ok and .json()
      if (res.status !== 200) {
        throw new Error("Failed to fetch user data");
      }

      updateStateWithAnalysis(res.data.data);
    } catch (error) {
      console.error("Error fetching signed-up user data:", error);
      setError("Failed to fetch user data from server");
      fetchLocalData(); // fallback to local if API fails
    }
  };

  const fetchLocalData = () => {
    const storedData = localStorage.getItem("skillJobMatchData");

    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        updateStateWithAnalysis(parsedData);
      } catch (error) {
        console.error("Error parsing stored skill job match data:", error);
        setError("Failed to parse stored data");
      }
    } else {
      setError(
        "No data available. Please complete the skills assessment first."
      );
    }
  };

  const updateStateWithAnalysis = (parsedData) => {
    try {
      setSkillsCount(parsedData.skills_count || 0);
      setJobsCount(parsedData.jobs_count || 0);

      const extractedSkills = (parsedData.skills || [])
        .filter((item) => item && typeof item.potential_skill === "string")
        .map((item) => item.potential_skill);

      const extractedJobs = (parsedData.jobs || [])
        .filter((item) => item && typeof item.title === "string")
        .map((item) => ({
          job: item.title,
          relevance: Number(item.match_confidence_percentage) || 0,
        }));

      setSkills(extractedSkills);
      setJobMatchData(extractedJobs);
    } catch (error) {
      console.error("Error updating state with analysis:", error);
      setError("Failed to process analysis data");
    }
  };

  const handleSeeMore = () => setShowModal(true);
  const handleExit = () => window.close();
  const handleSignup = () => {
    setShowModal(false);
    navigate("/signupscreen");
  };

  const categoryColors = {
    communication: "#E3F2FD",
    data: "#E8F5E9",
    policy: "#FFF3E0",
    hardware: "#F3E5F5",
    software: "#FCE4EC",
    budget: "#E0F7FA",
    manage: "#FFFDE7",
    code: "#E0E0E0",
  };

  // Loading state
  if (loading) {
    return (
      <div
        style={{
          padding: "48px 16px",
          background: "#F8FAFC",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "4px solid #E2E8F0",
              borderTop: "4px solid #0863C1",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto 16px",
            }}
          ></div>
          <p style={{ color: "#64748B", fontSize: "16px" }}>
            Loading your analysis...
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div
        style={{
          padding: "48px 16px",
          background: "#F8FAFC",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#FEF2F2",
            border: "1px solid #FECACA",
            borderRadius: "8px",
            padding: "24px",
            maxWidth: "500px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#DC2626", marginBottom: "8px" }}>Error</h3>
          <p style={{ color: "#7F1D1D", marginBottom: "16px" }}>{error}</p>

          <button
            onClick={() => navigate("/introscreen")}
            style={{
              background: "green",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Get Start
          </button>
        </div>
      </div>
    );
  }

  // No profile state
  if (!profile) {
    return (
      <div
        style={{
          padding: "48px 16px",
          background: "#F8FAFC",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#FEF3C7",
            border: "1px solid #FDE68A",
            borderRadius: "8px",
            padding: "24px",
            maxWidth: "500px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#92400E", marginBottom: "8px" }}>
            No Profile Found
          </h3>
          <p style={{ color: "#78350F" }}>
            Please complete your professional profile first.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Add CSS for spinner animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <div
        style={{
          padding: "48px 16px",
          background: "#F8FAFC",
          minHeight: "100vh",
          fontFamily: "Inter, sans-serif",
          color: "#0E0E0E",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "960px",
            background: "#ffffff",
            padding: "32px",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#0863C1",
              marginBottom: "32px",
              borderBottom: "2px solid #E0E0E0",
              paddingBottom: "8px",
            }}
          >
            Preliminary Skills & Job Match Report
          </h2>

          {/* How we analyze your data */}
          <section
            style={{
              marginBottom: "48px",
              padding: "24px",
              background: "#F8FAFC",
              borderRadius: "12px",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#1E293B",
                marginBottom: "12px",
              }}
            >
              How We Analyze Your Data
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#334155",
                marginBottom: "12px",
              }}
            >
              At Spark Careers, we've built the foundation for smarter career
              discovery. Our comprehensive database combines career
              opportunities, global job classifications, academic degrees, and
              their associated skills.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#334155",
                marginBottom: "32px",
              }}
            >
              Here's how we do this:
            </p>

            {/* Steps Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "24px",
              }}
            >
              {/* Step 1 */}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    backgroundColor: "#E2E8F0",
                    borderRadius: "8px",
                    width: "64px",
                    height: "64px",
                    margin: "0 auto 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Replaced material-icons with emoji */}
                  <span style={{ fontSize: "32px" }}>⚙️</span>
                </div>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    marginBottom: "8px",
                  }}
                >
                  Step 1
                </h4>
                <p style={{ fontSize: "14px", color: "#475569" }}>
                  You share your background, experience, and interests with us.
                </p>
              </div>

              {/* Step 2 */}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    backgroundColor: "#E2E8F0",
                    borderRadius: "8px",
                    width: "64px",
                    height: "64px",
                    margin: "0 auto 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "32px" }}>📊</span>
                </div>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    marginBottom: "8px",
                  }}
                >
                  Step 2
                </h4>
                <p style={{ fontSize: "14px", color: "#475569" }}>
                  Our advanced analytics engine identifies the skills you
                  possess and maps them to career opportunities that match your
                  profile.
                </p>
              </div>

              {/* Step 3 */}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    backgroundColor: "#E2E8F0",
                    borderRadius: "8px",
                    width: "64px",
                    height: "64px",
                    margin: "0 auto 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "32px" }}>💡</span>
                </div>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    marginBottom: "8px",
                  }}
                >
                  Step 3
                </h4>
                <p style={{ fontSize: "14px", color: "#475569" }}>
                  We deliver a tailored analysis revealing not just what you can
                  do, but where your potential can take you.
                </p>
              </div>
            </div>
          </section>

          {/* Introduction Summary Section */}
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              marginBottom: "48px",
              background: "#F1F5F9",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.04)",
            }}
          >
            {/* Greeting */}
            <div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  marginBottom: "8px",
                  color: "#0863C1",
                }}
              >
                Hello, {userName || ""}
              </h3>
              <p style={{ fontSize: "16px", color: "#333" }}>
                Thank you for taking this first step with Spark Careers.
              </p>
            </div>

            {/* User Data + Summary */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              {/* Left column – User data */}
              <div
                style={{
                  flex: 1,
                  minWidth: "280px",
                  background: "#3B4C68",
                  color: "white",
                  padding: "16px",
                  borderRadius: "8px",
                }}
              >
                <p style={{ fontWeight: 500, fontSize: "15px" }}>
                  Here's the information you provided us:
                </p>
                <p
                  style={{
                    marginTop: "12px",
                    fontSize: "15px",
                    lineHeight: 1.6,
                  }}
                >
                  <strong>Job History:</strong>{" "}
                  {profile.jobTitles || "Not provided"}
                  <br />
                  <strong>Academic History:</strong>{" "}
                  {profile.degrees || "Not provided"}
                </p>
              </div>

              {/* Right column – Summary message */}
              <div
                style={{
                  flex: 2,
                  minWidth: "280px",
                  background: "#E5EDF8",
                  color: "#0E0E0E",
                  padding: "16px",
                  borderRadius: "8px",
                }}
              >
                <p style={{ fontSize: "15px", lineHeight: 1.6 }}>
                  Based on the information you shared, we have created a
                  personalized analysis of the potential skills you possess and
                  additional career paths where you could truly excel.
                </p>
                <p
                  style={{
                    marginTop: "12px",
                    fontSize: "15px",
                    lineHeight: 1.6,
                  }}
                >
                  Your results reveal opportunities you might not have
                  considered, backed by data-driven insights about where your
                  unique combination of skills creates competitive advantage.
                </p>
                <p
                  style={{
                    marginTop: "12px",
                    fontSize: "15px",
                    lineHeight: 1.6,
                  }}
                >
                  Ready to explore what's possible? Your analysis awaits on the
                  following pages.
                </p>
              </div>
            </div>

            {/* Metrics Row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginTop: "16px",
              }}
            >
              {/* Skills Metric */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "#DDE6F2",
                  padding: "16px 20px",
                  borderRadius: "8px",
                  flex: 1,
                  minWidth: "220px",
                }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "#0E0E0E",
                  }}
                >
                  {skillsCount || 0}
                </div>
                <div style={{ fontSize: "15px", fontWeight: 600 }}>
                  Core Strengths &<br />
                  Potential Transferable Skills
                </div>
              </div>

              {/* Matches Metric */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "#DDE6F2",
                  padding: "16px 20px",
                  borderRadius: "8px",
                  flex: 1,
                  minWidth: "220px",
                }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "#0E0E0E",
                  }}
                >
                  {jobsCount || 0}
                </div>
                <div style={{ fontSize: "15px", fontWeight: 600 }}>
                  High Match
                  <br />
                  Career Opportunities
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section style={{ margin: "48px 0" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "16px",
                color: "#333",
              }}
            >
              Aggregation of Your Potential Skills
            </h3>
            {skills.length > 0 ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: "12px",
                }}
              >
                {skills.map((skill, index) => {
                  const matchedCategory = Object.keys(categoryColors).find(
                    (key) => skill.toLowerCase().includes(key)
                  );
                  const backgroundColor =
                    categoryColors[matchedCategory] || "#F1F5F9";

                  return (
                    <div
                      key={index}
                      style={{
                        backgroundColor,
                        padding: "10px 12px",
                        borderRadius: "30px",
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#333",
                        textAlign: "center",
                        boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {skill}
                    </div>
                  );
                })}
              </div>
            ) : (
              <p style={{ color: "#64748B", fontStyle: "italic" }}>
                No skills data available. Please complete your assessment.
              </p>
            )}
          </section>

          {/* Job Match Chart */}
          <section style={{ marginTop: "48px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "16px",
                color: "#333",
              }}
            >
              High Match Career Opportunities
            </h3>
            {jobMatchData.length > 0 ? (
              (() => {
                const barHeight = 40; // height per bar
                const chartHeight = jobMatchData.length * barHeight;
          
                return (
                  <div style={{ width: "100%", height: chartHeight }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        layout="vertical"
                        data={jobMatchData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 100]} />
                        <YAxis
                          type="category"
                          dataKey="job"
                          width={250}
                          tick={{ fontSize: 11, fontWeight: 400 }} 
                        />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Bar dataKey="relevance" fill="#42A5F5">
                          <LabelList
                            dataKey="relevance"
                            position="right"
                            formatter={(value) => `${value}%`}
                            style={{ fontSize: 11, fontWeight: 400 }}
                          />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                );
              })()
            ) : (
              <p style={{ color: "#64748B", fontStyle: "italic" }}>
                No job match data available. Please complete your assessment.
              </p>
            )}
          </section>
        </div>

        <FloatingButtons onSeeMore={handleSeeMore} onExit={handleExit} />
        <SignUpModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onSignup={handleSignup}
          disableSignup={signupButtonDisabled}
          signupMessage={isSignedUp ? "User already signed up" : ""}
        />
      </div>
    </>
  );
};

export default PreliminaryAnalysis;
