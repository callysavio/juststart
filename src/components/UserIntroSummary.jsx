import React from 'react';

const UserIntroSummary = ({
  userName = "Sanjam",
  jobHistory = "IT Support Engineer",
  academicHistory = "Computer Science",
  skillCount = 100,
  matchCount = 50
}) => {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      marginBottom: '48px',
      background: '#F1F5F9',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* Greeting */}
      <div>
        <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px', color: '#0863C1' }}>
          Hello {userName},
        </h3>
        <p style={{ fontSize: '16px', color: '#333' }}>
          Thank you for taking this first step with Spark Careers.
        </p>
      </div>

      {/* User Data + Summary */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{
          flex: 1,
          minWidth: '280px',
          background: '#3B4C68',
          color: 'white',
          padding: '16px',
          borderRadius: '8px'
        }}>
          <p style={{ fontWeight: 500, fontSize: '15px' }}>Here’s the information you provided us:</p>
          <p style={{ marginTop: '12px', fontSize: '15px', lineHeight: 1.6 }}>
            <strong>Job History:</strong> {jobHistory}<br />
            <strong>Academic History:</strong> {academicHistory}
          </p>
        </div>

        <div style={{
          flex: 2,
          minWidth: '280px',
          background: '#E5EDF8',
          color: '#0E0E0E',
          padding: '16px',
          borderRadius: '8px'
        }}>
          <p style={{ fontSize: '15px', lineHeight: 1.6 }}>
            Based on the information you shared, we have created a personalized analysis of the potential skills you possess and additional career paths where you could truly excel.
          </p>
          <p style={{ marginTop: '12px', fontSize: '15px', lineHeight: 1.6 }}>
            Your results reveal opportunities you might not have considered, backed by data-driven insights about where your unique combination of skills creates competitive advantage.
          </p>
          <p style={{ marginTop: '12px', fontSize: '15px', lineHeight: 1.6 }}>
            Ready to explore what’s possible? Your analysis awaits on the following pages.
          </p>
        </div>
      </div>

      {/* Metrics */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        marginTop: '16px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: '#DDE6F2',
          padding: '16px 20px',
          borderRadius: '8px',
          flex: 1,
          minWidth: '220px'
        }}>
          <div style={{ fontSize: '32px', fontWeight: 700, color: '#0E0E0E' }}>{skillCount}</div>
          <div style={{ fontSize: '15px', fontWeight: 600 }}>
            Core Strengths &<br />Potential Transferable Skills
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: '#DDE6F2',
          padding: '16px 20px',
          borderRadius: '8px',
          flex: 1,
          minWidth: '220px'
        }}>
          <div style={{ fontSize: '32px', fontWeight: 700, color: '#0E0E0E' }}>{matchCount}</div>
          <div style={{ fontSize: '15px', fontWeight: 600 }}>
            High Match<br />Career Opportunities
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserIntroSummary;
