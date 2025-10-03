import { useNavigate } from 'react-router-dom';

const UserExperienceLevelSelection = () => {
  const navigate = useNavigate();

  const handleSelect = (label) => {
    console.log(`Selected: ${label}`);

    // Map the label to API type format
    let typeValue = "";
    switch (label) {
      case "Student":
        typeValue = "student";
        break;
      case "Young Professional":
        typeValue = "professional";
        break;
      case "Experienced":
        typeValue = "experienced";
        break;
      default:
        typeValue = "";
    }

    // Store type in localStorage
    localStorage.setItem("userType", typeValue);

    // Go to next onboarding step
    navigate('/userprofessionaldetailsform');
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#FDFDFD',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 24px',
      boxSizing: 'border-box',
      fontFamily: 'Montserrat, sans-serif',
      color: '#0E0E0E'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 500,
        width: '100%',
      }}>
        <h2 style={{ fontSize: 24, fontWeight: 500, marginBottom: 32, textAlign: 'center' }}>
          Which of the following best describes you?
        </h2>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
          {['Student', 'Young Professional', 'Experienced'].map((label, index) => (
            <div
              key={index}
              style={{
                background: '#F5F5F5',
                borderRadius: 8,
                padding: '16px 0',
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
              onClick={() => handleSelect(label)}
              onMouseOver={e => e.currentTarget.style.background = '#e0e0e0'}
              onMouseOut={e => e.currentTarget.style.background = '#F5F5F5'}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserExperienceLevelSelection;
