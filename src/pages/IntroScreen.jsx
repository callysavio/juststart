import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/IntroScreen.css';

const IntroScreen = () => {
  console.log("✅ IntroScreen component mounted");

  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#FDFDFD',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '40px 5%',
      boxSizing: 'border-box',
      fontFamily: 'Montserrat, sans-serif',
      color: '#0E0E0E'
    }}>

      {/* Status Header */}
      <div style={{
        width: '100%',
        maxWidth: '1024px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 24
      }}>
        <span style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontWeight: 600,
          fontSize: 15
        }}> </span>
        <div style={{
          width: 18,
          height: 8,
          background: '#0E0E0E',
          borderRadius: 2
        }} />
      </div>

      {/* Main Content */}
      <div style={{
        width: '100%',
        maxWidth: 600,
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: 16 }}>Hello</h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: 16 }}>
          Welcome to SPARK Careers
        </h2>
        <p>I am Callistus</p>

        <p style={{
          fontSize: '1rem',
          fontWeight: 300,
          lineHeight: '1.6',
          color: '#6C6C6C'
        }}>
          With SPARK you can automatically analyze your education and work experience to extract your transferrable skills and match them to career and job opportunities.
          <br /><br />
          You also gain access to trainings curated to help you close any skills gaps identified.
        </p>
      </div>

      {/* CTA Button */}
      <div style={{
        width: '100%',
        maxWidth: 327,
        height: 48,
        background: '#0863C1',
        borderRadius: 100,
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.12)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: 600,
        color: 'white',
        cursor: 'pointer'
      }}
        onClick={() => navigate('/userexperiencelevelselection')}
      >
        Get Started
      </div>
    </div>
  );
};

export default IntroScreen;
