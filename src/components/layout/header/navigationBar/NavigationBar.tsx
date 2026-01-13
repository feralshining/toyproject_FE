import React from 'react';
import '/src/styles/Fonts.css';
import './NavigationBar.css';

function NavigationBar() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className='navigationBar-container'>
            <button className='nav-button'>공지사항</button>
            <div className='nav-dropdown-container'>
                <button 
                    className='nav-button dropdown-trigger'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    게시판
                    <img className='dropdown-arrow' src="dropdown-arrow.png" />
                </button>
                
                <ul className={`dropdown-item ${isOpen ? 'show' : ''}`}>
                    <li><a href="#">인기 게시판</a></li>
                    <li><a href="#">자유 게시판</a></li>
                    <li><a href="#">질문 게시판</a></li>
                    <li><a href="#">자료실</a></li>
                </ul>
            </div>
            <button className='nav-button'>상점</button>
            <button className='nav-button'>고객센터</button>
        </div>
    );
}

export default NavigationBar;