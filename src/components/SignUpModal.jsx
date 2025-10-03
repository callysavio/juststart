const SignUpModal = ({ show, onClose, onSignup, disableSignup }) => {
  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '24px',
        width: '90%',
        maxWidth: '600px',
        position: 'relative',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          ×
        </button>

        {/* Modal Content */}
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>
          We have built this analysis with the limited information you provided, and we are just getting started.
        </h2>

        <p style={{ marginBottom: '12px' }}>
          Here is more you can do when you sign up:
        </p>

        <ol style={{ paddingLeft: '20px', marginBottom: '24px' }}>
          <li><strong>Fine-tune your analysis</strong> to capture and update every skill and career goal with higher precision.</li>
          <li><strong>Discover jobs</strong> you qualify for based on your skills from job boards.</li>
          <li><strong>Optimize your Resume</strong> with tools that restructure your experience and highlight transferable skills that make employers notice you.</li>
          <li><strong>Receive focused training recommendations</strong> to strengthen your profile for any career path you choose.</li>
        </ol>

        {disableSignup && (
          <p style={{ color: 'red', fontWeight: 'bold', marginBottom: '12px' }}>
            You are already signed up.
          </p>
        )}

        <button
          onClick={onSignup}
          disabled={disableSignup}
          style={{
            backgroundColor: disableSignup ? "#9CA3AF" : "#1D4ED8",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "14px",
            cursor: disableSignup ? "not-allowed" : "pointer",
          }}
        >
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default SignUpModal;
