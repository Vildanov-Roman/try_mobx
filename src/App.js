import React, { useState } from "react";
import PostList from "./components/Post";
import ImageList from "./components/Image";
import Loader from "./components/Loader";

import styled from "styled-components";

const App = () => {
  const [showImgs, setShowImgs] = useState(false);
  const [showPosts, setShowPosts] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleShowImages = () => {
    setShowImgs(true);
    setShowPosts(false);
    setLoading(true)
  };

  const handleShowPosts = () => {
    setShowPosts(true);
    setShowImgs(false);
    setLoading(true);
  };

  const handleBack = () => {
    setShowImgs(false);
    setShowPosts(false);
    setLoading(false)
  };

  const handleLoader = (loadingState) => {
    setLoading(loadingState);
  };

  return (
    <div>
      {(showImgs || showPosts) && (
        <div>
          <BtnBack onClick={handleBack}>Return to choosing</BtnBack>
        </div>
      )}
      {showImgs && <ImageList setLoading={handleLoader}/>}
      {showPosts && <PostList setLoading={handleLoader}/>}
      {!showImgs && !showPosts && !loading && (
        <div>
          <Title>Make your choice</Title>
          <ButtonWrap>
            <BtnImg onClick={handleShowImages}>Images</BtnImg>
            <BtnPosts onClick={handleShowPosts}>Posts</BtnPosts>
          </ButtonWrap>
        </div>
      )}
      {loading && <Loader />}
    </div>
  );
};

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #4eb5e5;
  margin-bottom: 50px;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BtnImg = styled.button`
  width: 130px;
  height: 40px;
  background: linear-gradient(to bottom, #4eb5e5 0%, #389ed5 100%); /* W3C */
  border: none;
  border-radius: 5px;
  position: relative;
  border-bottom: 4px solid #2b8bc6;
  color: #fbfbfb;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  font-size: 15px;
  text-align: center;
  text-indent: 5px;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;

  &:active {
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);
    top: 1px;
  }
`;

const BtnPosts = styled.button`
  width: 130px;
  height: 40px;
  background: linear-gradient(to bottom, #4eb5e5 0%, #389ed5 100%); /* W3C */
  border: none;
  border-radius: 5px;
  position: relative;
  border-bottom: 4px solid #2b8bc6;
  color: #fbfbfb;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  font-size: 15px;
  text-align: center;
  text-indent: 5px;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;

  &:active {
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);
    top: 1px;
  }
`;

const BtnBack = styled.button`
  top: 50px;
  left: 35px;
  width: 130px;
  height: 40px;
  background: linear-gradient(to bottom, #4eb5e5 0%, #389ed5 100%); /* W3C */
  border: none;
  border-radius: 5px;
  position: relative;
  border-bottom: 4px solid #2b8bc6;
  color: #fbfbfb;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  font-size: 15px;
  text-align: center;
  text-indent: 5px;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;

  &:active {
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);
    top: 50px;
    left: 35px;
  }
`;

export default App;
