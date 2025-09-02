import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ maxWidth: 600, margin: '40px auto', padding: 24, textAlign: 'center', background: '#f9f9f9', borderRadius: 12 }}>
            <h1 style={{ color: '#2d7ff9' }}>인터페이스 공유 커뮤니티</h1>
            <p>다양한 UI/UX 인터페이스를 공유하고, 의견을 나누는 커뮤니티입니다.</p>
            <div style={{ marginTop: 32 }}>
                <Link to="/community" style={{ padding: '12px 32px', background: '#2d7ff9', color: '#fff', borderRadius: 8, textDecoration: 'none', fontWeight: 'bold', fontSize: 18 }}>
                    커뮤니티 바로가기
                </Link>
            </div>
        </div>
    );
};

export default Home;
