import React from "react";

const NavigationBar: React.FC = () => {
  return (
    <div className="navigation-container">
      <button className="nav-button">
        <div className="text-wrapper">공지사항</div>
      </button>
      <div className="dropdown">
        <div className="text-wrapper">게시판</div>
          <div className="dropdown-button">
            <img className="polygon" src="img/polygon-1.svg" alt="dropdown" />
          </div>
      </div>
      <button className="nav-button">
        <div className="text-wrapper">상점</div>
      </button>
      <button className="nav-button">
        <div className="text-wrapper">고객센터</div>
      </button>
    </div>
  );
};

export default NavigationBar;