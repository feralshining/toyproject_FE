import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Navigation from './NavigationBar';
import AuthButton from './AuthButton';

function Header() {
  return (
    <div className="header">
      <Logo />
      <SearchBar />
      <Navigation />
      <AuthButton />
    </div>
  );
}

export default Header;
