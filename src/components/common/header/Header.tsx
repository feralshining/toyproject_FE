import React from 'react';
import Logo from './Logo.tsx';
import SearchBar from './SearchBar.tsx';
import Navigation from './NavigationBar.tsx';
import AuthButton from './AuthButton.tsx';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      <Logo />
      <SearchBar />
      <Navigation />
      <AuthButton />
    </div>
  );
};

export default Header;