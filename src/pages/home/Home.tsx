import React from 'react';
import './Home.css';
import Logo from '../../components/layout/header/logo/Logo';
import SearchBar from '../../components/layout/header/searchBar/SearchBar';
import NavigationBar from '../../components/layout/header/navigationBar/NavigationBar';

function Home(){
    return (
        <div className='home-container'>
            <div className='header-container'>
                <Logo />
                <SearchBar />
                <NavigationBar />
            </div>
            <div className='main-container'>
                홈 화면입니다.
            </div>
            <div className='footer-container'>
                푸터 영역
            </div>
        </div>
    );
}

export default Home;