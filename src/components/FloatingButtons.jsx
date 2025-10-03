import React from 'react';

const FloatingButtons = ({ onSeeMore, onExit }) => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 9999,
      display: 'flex',
      gap: '16px',
      padding: '12px 24px',
      backgroundColor: '#ffffff',
      border: '1px solid #CBD5E1',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    }}>
      <button
        onClick={onSeeMore}
        style={{
          padding: '10px 20px',
          backgroundColor: '#1D4ED8',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        See More
      </button>
      <button
        onClick={onExit}
        style={{
          padding: '10px 20px',
          backgroundColor: '#E2E8F0',
          color: '#1E293B',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        Exit
      </button>
    </div>
  );
};

export default FloatingButtons;
