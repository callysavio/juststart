import React from 'react';
import '../styles/PayWallScreen.css';

const PayWallScreen = () => {
  return (
    <>
<div style={{width: '100%', height: '100%', position: 'relative', background: 'white', overflow: 'hidden'}}>
    <img style={{width: 348, height: 704, left: 9, top: 121, position: 'absolute'}} src="https://placehold.co/348x704" />
    <div style={{width: 375, height: 121, left: 0, top: 0, position: 'absolute', background: '#0863C1'}} />
    <div data-property-1="light" style={{width: 375, height: 43, left: 0, top: 0, position: 'absolute'}}>
        <div style={{width: 68, height: 13, left: 287, top: 16.60, position: 'absolute', overflow: 'hidden'}}>
            <div style={{width: 18, height: 7.67, left: 44.50, top: 2.48, position: 'absolute', background: 'white', borderRadius: 1.60}} />
        </div>
        <div style={{width: 180, height: 22, left: 0, top: 12, position: 'absolute'}}>
            <div style={{left: 20, top: 2, position: 'absolute', color: 'white', fontSize: 15, fontFamily: 'Plus Jakarta Sans', fontWeight: '600', wordWrap: 'break-word'}}>19:27</div>
        </div>
    </div>
    <div style={{left: 268, top: 59, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
        <div style={{width: 28, height: 28, opacity: 0.20, borderRadius: 100}} />
        <img style={{width: 43, height: 45}} src="https://placehold.co/43x45" />
    </div>
    <div style={{left: 26, top: 73, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
        <div style={{width: 26, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 9, display: 'inline-flex'}} />
    </div>
</div>
    </>
  );
};

export default PayWallScreen;
