import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="search-container">
      <div className="search-icon">
        <img className="icon" src="돋보기 아이콘 삽입" alt="search" />
      </div>
      <div className="search-input">
        <div className="search-text">예시 검색</div>
      </div>
    </div>
  );
};

export default SearchBar;