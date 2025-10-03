import React from 'react';
import '../styles/PreSignUpPopUp.css';

const PreSignUpPopUp = () => {
  return (
    <>
<div style={{width: '100%', height: '100%', padding: 24, background: 'white', borderRadius: 16, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
    <div style={{width: 328, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', height: 416, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', height: 114}} />
            <div style={{alignSelf: 'stretch', height: 114, color: '#0E0E0E', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>Ready for your full results? <br/><br/>Sign up to unlock personalized job matches, training opportunities, and detailed career insights.</div>
        </div>
        <div style={{alignSelf: 'stretch', height: 48, padding: 10, background: '#0863C1', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{width: 327, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                <div style={{color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>Sign Up</div>
            </div>
        </div>
    </div>
</div>
    </>
  );
};

export default PreSignUpPopUp;
