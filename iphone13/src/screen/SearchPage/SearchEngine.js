import React, { useState, useCallback} from 'react';
import './SearchPage.css';
import './SearchEngine.css';
import useIconClick from './useIconClick';
import { useNavigate } from 'react-router-dom';


const SearchEngine = ({urlQuery, fetchSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState(urlQuery||'');//url로 입력시 input창에도 검색어 뜨게
  const navigate = useNavigate();

  /*
  검색
  */

  //검색창 input에서 onChange할때마다 searchQuery update
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  //검색창에 입력시 url 변경 + fetch search result호출
  const handleSearch = useCallback(() => {
    if (!searchQuery.trim()) return;

    navigate(`/search/${searchQuery}`, { replace: true });

    fetchSearchResults(searchQuery);
  }, [fetchSearchResults, navigate, searchQuery]);
  
  /*
  버튼 아이콘
  */
 
  const handleSearchButtonIconClick = () => {
    handleIconClick(1);
    handleSearch();
  };
  //icon 클릭시 변경
  const {
    searchButtonIconClicked,
    handleIconClick,
  } = useIconClick();
 
  //KeyDown에서 Enter시에도 검색가능하도록
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchButtonIconClick();
    }
  };

  // 이미지 파일 경로 설정
  const searchButtonImageSrc = searchButtonIconClicked
    ? process.env.PUBLIC_URL + "/images/search_button_clicked.png"
    : process.env.PUBLIC_URL + "/images/search_button.png";

  return (
    <div>
      <div className="SearchEngine">
        <div className="inputContainerStyle">
          <input
            className="searchInputStyle"
            type="text"
            placeholder=""
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button className="searchButtonStyle" onClick={handleSearchButtonIconClick}>
            <img
              src={searchButtonImageSrc}
              alt="search_engine_button"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchEngine;
