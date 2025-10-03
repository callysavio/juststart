import React from 'react';
import '../styles/FinalOnboardingSplashScreen.css';
import image78 from '../assets/image78.svg';

const FinalOnboardingSplashScreen = () => {
  return (
    <>
<div style={{width: '100%', height: '100%', position: 'relative', background: '#FDFDFD', overflow: 'hidden'}}>
    <div style={{width: 327, left: 24, top: 309, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'inline-flex'}}>
        <div data-property-1="Frame 3" style={{width: 63.19, height: 63.19, position: 'relative'}}>
            <div style={{width: 63.19, height: 63.19, left: 0, top: 0, position: 'absolute', background: 'conic-gradient(from 180deg at 50.00% 50.00%, #0863C1 0deg, #0863C1 63deg, rgba(255, 255, 255, 0) 360deg)', borderRadius: 9999}} />
            <div style={{width: 9.48, height: 9.48, left: 27.17, top: 53.71, position: 'absolute', background: '#0863C1', borderRadius: 9999}} />
        </div>
        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', height: 27, textAlign: 'center', color: '#0E0E0E', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Great</div>
            <img src={image78} alt="Loading illustration" style={{ width: '100px', height: '100px' }} />
            <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', height: 47, textAlign: 'center', color: '#6C6C6C', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>We are finalizing things. This will just<br/>at take a second...</div>
            </div>
        </div>
    </div>
    <div data-property-1="light" style={{width: 375, height: 43, left: 0, top: 0, position: 'absolute'}}>
        <div style={{width: 68, height: 13, left: 287, top: 16.60, position: 'absolute', overflow: 'hidden'}}>
            <div style={{width: 18, height: 7.67, left: 44.50, top: 2.48, position: 'absolute', background: '#0E0E0E', borderRadius: 1.60}} />
        </div>
        <div style={{width: 180, height: 22, left: 0, top: 12, position: 'absolute'}}>
            <div style={{left: 20, top: 2, position: 'absolute', color: '#0E0E0E', fontSize: 15, fontFamily: 'Plus Jakarta Sans', fontWeight: '600', wordWrap: 'break-word'}}>19:27</div>
        </div>
    </div>
</div>
    </>
  );
};

export default FinalOnboardingSplashScreen;
