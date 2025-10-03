import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import '../styles/LaunchSplashScreen.css'; // keep this if needed
import image78 from '../assets/image78.svg'; // 👈 Import image here

const LaunchSplashScreen = () => {
  const navigate = useNavigate();

useEffect(() => {
  const timer = setTimeout(() => {
    navigate('/introscreen'); // 👈 this path must match your router path for IntroScreen
  }, 3000); // 3 seconds

  return () => clearTimeout(timer); // Clean up on unmount
}, []); 
  
    return (
    <div style={{
      height: '100vh',
      width: '100%',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2rem',
      boxSizing: 'border-box',
    }}>
      
      {/* Top status bar */}
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '14px',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontWeight: 600,
        color: '#0E0E0E',
      }}>

       
      </div>

      {/* Center logo */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
      }}>
        <img
  src={image78}
  alt="Spark Logo"
  style={{ maxWidth: '80%', height: 'auto' }}
/>
      </div>

      {/* Bottom space (can be removed if not needed) */}
      <div style={{ height: '10vh' }}></div>
    </div>
  );
};

export default LaunchSplashScreen;
