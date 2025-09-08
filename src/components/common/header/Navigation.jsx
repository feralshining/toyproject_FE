import React from 'react';

function Navigation() {
  return (
    <div className="navigation-bar">
      <button className="button">
        <div className="text-wrapper-2">공지사항</div>
      </button>
      <div className="dropdown-button">
        <div className="dropdown-button-2">
          <div className="text-wrapper-3">게시판</div>
          <img className="polygon" src="img/polygon-1.svg" alt="dropdown" />
        </div>
      </div>
      <button className="button">
        <div className="text-wrapper-2">상점</div>
      </button>
      <button className="button">
        <div className="text-wrapper-2">고객센터</div>
      </button>
    </div>
  );
}

export default Navigation;
