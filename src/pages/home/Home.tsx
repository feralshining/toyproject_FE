import React from 'react';
import './Home.css';
import Header from '../../components/common/header/Header.tsx';

const Home: React.FC = () => {
    return (
        <div className='main-page'>
            <Header />
            {/* <Main />
            <Footer /> */}
        </div>
    );
};

export default Home;