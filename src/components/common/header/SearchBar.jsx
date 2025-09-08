import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="icon-frame">
        <div className="overlap-group">
          <div className="ellipse"></div>
          <div className="div"></div>
          <div className="rectangle"></div>
        </div>
      </div>
      <div className="search-input">
        <div className="text-wrapper">예시 검색</div>
      </div>
    </div>
  );
}

export default SearchBar;
