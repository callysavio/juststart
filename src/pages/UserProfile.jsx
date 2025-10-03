import React from 'react';
import '../styles/UserProfile.css';

const UserProfile = () => {
  return (
    <>
<div style={{width: '100%', height: '100%', position: 'relative', background: 'white', overflow: 'hidden'}}>
    <div data-property-1="light" style={{width: 375, height: 43, left: 0, top: 0, position: 'absolute'}}>
        <div style={{width: 68, height: 13, left: 287, top: 16.60, position: 'absolute', overflow: 'hidden'}}>
            <div style={{width: 18, height: 7.67, left: 44.50, top: 2.48, position: 'absolute', background: '#0E0E0E', borderRadius: 1.60}} />
        </div>
        <div style={{width: 180, height: 22, left: 0, top: 12, position: 'absolute'}}>
            <div style={{left: 20, top: 2, position: 'absolute', color: '#0E0E0E', fontSize: 15, fontFamily: 'Plus Jakarta Sans', fontWeight: '600', wordWrap: 'break-word'}}>19:27</div>
        </div>
    </div>
    <div style={{width: 327, height: 57, left: 24, top: 353, position: 'absolute', background: 'white'}}>
        <div style={{width: 327, height: 57, left: 0, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0)', borderBottom: '1px #E5E7EB solid'}}>
            <div style={{left: 16, top: 19, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                <div style={{color: '#0E0E0E', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>Change Password</div>
            </div>
            <div style={{width: 10, height: 16, left: 388, top: 20, position: 'absolute', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{width: 10, height: 16, position: 'relative', background: 'rgba(0, 0, 0, 0)'}} />
            </div>
            <div style={{width: 8.29, height: 14, left: 302, top: 21, position: 'absolute', background: '#6C6C6C'}} />
        </div>
    </div>
    <div style={{width: 327, height: 57, left: 24, top: 410, position: 'absolute', background: 'white'}}>
        <div style={{width: 327, height: 57, left: 0, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0)', borderBottom: '1px #E5E7EB solid'}}>
            <div style={{left: 16, top: 19, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                <div style={{color: '#0E0E0E', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>Payment Details</div>
            </div>
            <div style={{width: 10, height: 16, left: 388, top: 20, position: 'absolute', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{width: 10, height: 16, position: 'relative', background: 'rgba(0, 0, 0, 0)'}} />
            </div>
            <div style={{width: 8.29, height: 14, left: 302, top: 21, position: 'absolute', background: '#6C6C6C'}} />
        </div>
    </div>
    <div style={{width: 327, height: 48, padding: 10, left: 24, top: 273, position: 'absolute', background: '#0863C1', borderRadius: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
        <div style={{width: 327, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word'}}>Edit Profile</div>
        </div>
    </div>
    <div style={{width: 327, height: 64, left: 24, top: 43, position: 'absolute', borderBottom: '1px #E5E7EB solid'}}>
        <div style={{width: 341, height: 32, left: 0, top: 16, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
            <div style={{width: 17.50, height: 20, position: 'relative', background: 'rgba(0, 0, 0, 0)'}}>
                <div style={{width: 17.50, height: 20, left: 0, top: 0, position: 'absolute', overflow: 'hidden', justifyContent: 'center', alignItems: 'flex-end', display: 'inline-flex'}}>
                    <div style={{width: 17.50, height: 20, position: 'relative', background: 'rgba(0, 0, 0, 0)', overflow: 'hidden'}}>
                        <div style={{width: 16, height: 14, left: 0, top: 3, position: 'absolute', background: '#0E0E0E'}} />
                    </div>
                </div>
            </div>
            <div style={{color: 'var(--Secondary-color, #040707)', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '500', lineHeight: 32, wordWrap: 'break-word'}}>View profile details</div>
        </div>
    </div>
    <img style={{width: 114, height: 119, left: 131, top: 126, position: 'absolute'}} src="https://placehold.co/114x119" />
</div>
    </>
  );
};

export default UserProfile;
