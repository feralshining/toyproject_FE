import React from "react";

const Logo: React.FC = () => {
  return (
    <img className="icon" src="/logo192.png" alt="Logo" /> //public 폴더는 빌드 시 루트 경로임
  );
};

export default Logo;