import React from 'react';
import './Logo.css';

function Logo() {
    return (
        <div className='logo-container'>
            {/* //이미지 삽입 필요하므로 img 태그 사용 */}
            <img
                src="/Logo.png" /* public 정적 폴더는 생략이 가능함 */
                alt="로고"
                className="logo-image"
                />
        </div>
    );
}

export default Logo;