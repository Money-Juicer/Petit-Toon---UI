import React, { useState } from "react";
import useDetectClose from "./useDetectClose";
import useIconClick from "./useIconClick";
import * as Styled from "./MenuStyles";
import * as Button from "../Buttons/Button_styled"

const menuTmp = () => {
  // ...
};

const DropdownMenu = () => {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const {
    menuIconClicked,
    storeIconClicked,
    searchIconClicked,
    mapIconClicked,
    petitIconClicked,
    eventIconClicked,
    mypageIconClicked,
    handleIconClick,
  } = useIconClick();

  return (
    <Styled.Wrapper>
      <Styled.DropdownContainer>
        {/*header menu button 헤더상의 메뉴 버튼*/}
        {/*0. menu button*/}
        <Button.DropdownButton
          onClick={() => {
            myPageHandler();
            handleIconClick(0);
          }}
          ref={myPageRef}
        >
          <img
            src={
              process.env.PUBLIC_URL +
              (menuIconClicked
                ? "./images/menu_icon_clicked.png"
                : "./images/menu_icon.png")
            }
            alt="메뉴 아이콘"
          />
        </Button.DropdownButton>
        {/*header menu open 오픈된 메뉴*/}
        <Styled.Menu $isDropped={myPageIsOpen}>
          <Styled.MenuTitle>메뉴|Menu</Styled.MenuTitle>
          <Styled.MenuContainer>
            {/*header menu안의 buttons*/}
            {/*1. store icon */}
            <Button.MenuButton
              onClick={() => {
                menuTmp();
                handleIconClick(1);
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  (storeIconClicked
                    ? "./images/store_clicked.png"
                    : "./images/store.png")
                }
                alt="store icon"
              />
              <span>스토어</span>
            </Button.MenuButton>
            {/*2. search-engine icon */}
            <Button.MenuButton
              onClick={() => {
                menuTmp();
                handleIconClick(2);
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  (searchIconClicked
                    ? "./images/search_clicked.png"
                    : "./images/search.png")
                }
                alt="search icon"
              />
              <span>검색</span>
            </Button.MenuButton>
            {/*3 map icon */}
            <Button.MenuButton
              onClick={() => {
                menuTmp();
                handleIconClick(3);
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  (mapIconClicked
                    ? "./images/map_clicked.png"
                    : "./images/map.png")
                }
                alt="map icon"
              />
              <span>탐색</span>
            </Button.MenuButton>
            {/*4. petit icon */}
            <Button.MenuButton
              onClick={() => {
                menuTmp();
                handleIconClick(4);
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  (petitIconClicked
                    ? "./images/petit_clicked.png"
                    : "./images/petit.png")
                }
                alt="petit icon"
              />
              <span>이주의 쁘띠</span>
            </Button.MenuButton>
            {/*5. event icon */}
            <Button.MenuButton
              onClick={() => {
                menuTmp();
                handleIconClick(5);
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  (eventIconClicked
                    ? "./images/event_clicked.png"
                    : "./images/event.png")
                }
                alt="event icon"
              />
              <span>공지/이벤트</span>
            </Button.MenuButton>
            {/*6. mypage icon */}
            <Button.MenuButton
              onClick={() => {
                menuTmp();
                handleIconClick(6);
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  (mypageIconClicked
                    ? "./images/mypage_clicked.png"
                    : "./images/mypage.png")
                }
                alt="mypage icon"
              />
              <span>마이페이지</span>
            </Button.MenuButton>
          </Styled.MenuContainer>
        </Styled.Menu>
        {/* 삼각형 요소 */}
        <Styled.TriangleWrapper>
          <Styled.TriangleOuter $isDropped={myPageIsOpen} />
          <Styled.TriangleInner $isDropped={myPageIsOpen} />
        </Styled.TriangleWrapper>
      </Styled.DropdownContainer>
    </Styled.Wrapper>
  );
};

export default DropdownMenu;
