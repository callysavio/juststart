import React from 'react';

const SkillCard = ({ title, color, description }) => {
  return (
    <div style={{
      background: 'white',
      borderRadius: 8,
      border: '1px solid #ECECEC',
      padding: 16,
      marginBottom: 16,
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      fontFamily: 'Montserrat, sans-serif',
    }}>
      <div style={{
        fontSize: 18,
        fontWeight: 600,
        color: '#0E0E0E',
        marginBottom: 8,
      }}>
        {title}
      </div>
      <div style={{
        height: 4,
        width: 186,
        backgroundColor: color,
        borderRadius: 2,
        marginBottom: 12,
      }}></div>
      <div style={{
        fontSize: 16,
        fontWeight: 400,
        color: '#6C6C6C',
        lineHeight: '24px',
      }}>
        {description}
      </div>
    </div>
  );
};

export default SkillCard;
