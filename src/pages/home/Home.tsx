import React from 'react';
import './Home.css';
import Logo from '../../components/layout/header/logo/Logo';
import SearchBar from '../../components/layout/header/searchBar/SearchBar';
import NavigationBar from '../../components/layout/header/navigationBar/NavigationBar';
import InnerFooterFrame from '../../components/layout/footer/innerFooterFrame/InnerFooterFrame';

const footerData: string[][] = [
  ["이용약관", "개인정보처리방침", "광고안내"],
  ["홈페이지 소개", "회사 소개", "제휴 안내", "제휴 안내"],
  ["기타등등", "기타사항", "etc"]
];

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
                <InnerFooterFrame strings = {footerData[0]}/>
                <InnerFooterFrame strings = {footerData[1]}/>
                <InnerFooterFrame strings = {footerData[2]}/>
            </div>
        </div>
    );
}

export default Home;