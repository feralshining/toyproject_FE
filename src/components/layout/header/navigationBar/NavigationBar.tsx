import React from 'react';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <div className='navigationBar-container'>
            <button className='nav-button'>공지사항</button>
            
            {/* 게시판은 Dropdown 형식 */}
            <div className='nav-dropdown'>
                <button className='nav-button'>게시판</button>
                <img src="dropdown-arrow.png" className='dropdown-button'/>
            </div>
            <button className='nav-button'>상점</button>
            <button className='nav-button'>고객센터</button>
        </div>
    );
}

export default NavigationBar;