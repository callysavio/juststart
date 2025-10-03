import React from 'react';
import '../styles/IntroScreen1.css';

const IntroScreen1 = () => {
  return (
    <>
<div style={{width: '100%', height: '100%', position: 'relative', background: '#FDFDFD', overflow: 'hidden'}}>
    <div style={{width: 327, left: 24, top: 134, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 2, display: 'flex'}}>
            <img style={{width: 161, height: 161}} src="https://placehold.co/161x161" />
            <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                <div style={{width: 151, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', textAlign: 'center', color: '#0E0E0E', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>Hello John</div>
                    <div style={{textAlign: 'center', color: '#0E0E0E', fontSize: 20, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>Welcome to SPARK.</div>
                </div>
                <div style={{alignSelf: 'stretch', textAlign: 'center', color: '#6C6C6C', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '300', lineHeight: 24, wordWrap: 'break-word'}}>With SPARK you can automatically analyze your education and work experience to extract your transferrable skills match these skills to career and job opportunities. <br/><br/>You also gain access to trainings that a curated to help you close any skills gaps identified. </div>
            </div>
        </div>
        <div style={{alignSelf: 'stretch', height: 48, padding: 10, background: '#0863C1', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.12)', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{width: 327, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                <div style={{color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>Get Started</div>
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

export default IntroScreen1;
