import React, { useEffect, useState } from 'react';
import Home from "./SearchPage/Home";
import SearchEngine from './SearchPage/SearchEngine';
import Profiles from './SwiperScroll/SwiperProfilesLR'; 
import Thumbnails from './SwiperScroll/SwiperThumbnails'; 
import "./SearchPage/SearchPage.css"
import { useParams } from 'react-router';

import { search } from '../API/SearchAPI.js';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState({ users: [], toons: [] });
  const { searchQuery } = useParams();

  const get_cookie = (name) => {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
  }

  // 검색어가 변경될 때마다 API 호출
  useEffect(() => {
    if (searchQuery) {
      console.log(get_cookie('accessToken'));
      search(searchQuery, 0, 5, get_cookie('accessToken'), setSearchResults);
    }
  }, [searchQuery]);


  return (
    <div className="container">
      <div className="item">
        <Home />
      </div>
      <div className="item">
        <div className='searchLineUp'/>
        <SearchEngine />
        <div className='searchLineDown'/>
      </div>
      <div className="item">
        <Profiles users={searchResults.users} /> 
      </div>
      <div className="item">
        <Thumbnails toons={searchResults.toons} />
      </div>
    </div>
  );
};

export default SearchPage;
