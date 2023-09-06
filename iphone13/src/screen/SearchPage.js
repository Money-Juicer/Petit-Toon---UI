import React, { useEffect, useState } from 'react';
import Home from "./SearchPage/Home";
import SearchEngine from './SearchPage/SearchEngine';
import Profiles from './SwiperScroll/SwiperProfilesLR'; 
import Thumbnails from './SwiperScroll/SwiperThumbnails'; 
import "./SearchPage/SearchPage.css"
import { useParams } from 'react-router';

import { searchToon, searchUser } from '../API/SearchAPI.js';

const SearchPage = () => {
  const [userResult, setUserResult] = useState([]);
  const [toonResult, setToonResult] = useState([]);

  const { searchQuery } = useParams();
  const [currentUserPage, setCurrentUserPage] = useState(0);
  const [currentToonPage, setCurrentToonPage] = useState(0);

  useEffect(() => {
    if (searchQuery) {
      searchUser(searchQuery, currentUserPage, 9, (data) => {setUserResult(data.users);});
      searchToon(searchQuery, currentToonPage, 9, (data) => {setToonResult(data.cartoons);});
    }
  }, [searchQuery]);

  useEffect(() => {
    if(userResult.length === 0)
      setCurrentUserPage(0);
  }, [userResult]);

  useEffect(() => {
    if(toonResult.length === 0)
      setCurrentToonPage(0);
  }, [toonResult]);


  useEffect(() => {
    if(searchQuery)
      searchUser(searchQuery, currentUserPage, 9, (data) => {
        setUserResult([...userResult, ...data.users]);
      });
  }, [currentUserPage]);

  useEffect(() => {
    if(searchQuery)
      searchToon(searchQuery, currentToonPage, 9, (data) => {
        setToonResult([...toonResult, ...data.cartoons]);
      });
  }, [currentToonPage]);



  const handleUserIntersect = () => {
    setCurrentUserPage(currentUserPage+1);
    console.log("유저 재검색");
  };

  const handleToonIntersect = () => {
    setCurrentToonPage(currentToonPage+1);
    console.log("툰 재검색");
  };

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
        <Profiles 
          users={userResult}
          handleIntersect={handleUserIntersect}
        /> 
      </div>
      <div className="item">
        <Thumbnails 
          toons={toonResult} 
          handleIntersect={handleToonIntersect}
        />
      </div>
    </div>
  );
};

export default SearchPage;
