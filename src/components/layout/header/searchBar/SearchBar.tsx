import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <div className='searchBar-container'>
            {/* 검색창 */}
            <img
                src="/SearchIcon.png" /* public 정적 폴더는 생략이 가능함 */
                alt="검색 아이콘"
                className="searchBar-icon"
            />
            <input
                type="text"
                placeholder="예시 검색"
                className="searchBar-input"
            />
        </div>
    );
}

export default SearchBar;