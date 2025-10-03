import React from 'react';
import '../styles/ExplorePopUp.css';

const ExplorePopUp = () => {
  return (
    <>
<div style={{width: '100%', height: '100%', padding: 24, background: 'white', boxShadow: '0px 9px 20px rgba(0, 0, 0, 0.10)', borderRadius: 16, outline: '1px #ECECEC solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', height: 112, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
        <div style={{alignSelf: 'stretch', height: 48, position: 'relative', background: '#F5F5F5', borderRadius: 8}}>
            <div style={{left: 32, top: 14, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#0E0E0E', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>Explore Skill Opportunities</div>
        </div>
        <div style={{alignSelf: 'stretch', height: 48, position: 'relative', background: '#F5F5F5', borderRadius: 8}}>
            <div style={{left: 34, top: 14, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#0E0E0E', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>Explore Job Opportunities</div>
        </div>
    </div>
</div>
    </>
  );
};

export default ExplorePopUp;
