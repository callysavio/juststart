import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DataProcessingPlaceholderBufferScreen.css';

const DataProcessingPlaceholderBufferScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/preliminaryanalysis');
    }, 3500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#FDFDFD',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 24px',
      fontFamily: 'Montserrat, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 32,
        maxWidth: 400,
        width: '100%'
      }}>
        {/* 🔄 Spinner visual */}
<div style={{ width: 48, height: 48 }}>
  <svg
    viewBox="0 0 50 50"
    style={{ width: '100%', height: '100%' }}
    className="svg-spinner"
  >
    <circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke="#0863C1"
      strokeWidth="5"
      strokeLinecap="round"
      strokeDasharray="100, 200"
      strokeDashoffset="0"
    />
  </svg>
</div>


        {/* 🔤 Loading text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2 style={{ fontSize: 24, fontWeight: 400, margin: 0 }}>One moment!</h2>
          <p style={{
            fontSize: 16,
            fontWeight: 400,
            color: '#6C6C6C',
            lineHeight: 1.5
          }}>
            We are creating your skills inventory based on your selection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataProcessingPlaceholderBufferScreen;
