import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import imageStore from '../stors/ImageStore';
import Loader from './Loader'

import styled from 'styled-components';

const ImageList = observer(() => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await imageStore.fetchImages();
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    imageStore.query = searchQuery.trim();
    imageStore.currentPage = 1;
    imageStore.fetchImages();
  };

  const handleLoadMore = () => {
    imageStore.loadMoreImages();
  };

  return (
    <div>
      <InputWrap>
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Btn onClick={handleSearch}>Search</Btn>
      </InputWrap>      
      <Gallery>
        {imageStore.images.map(({id, webformatURL, tags}) => (
          <Item key={id}>
            <Img src={webformatURL} alt={tags} />
          </Item>
        ))}
      </Gallery>
      {loading && <Loader />}
      {!loading && imageStore.images.length >= 12 && (
        <Btn onClick={handleLoadMore}>Load More</Btn>
      )}
    </div>
  );
});

const InputWrap = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;

  margin-bottom: 15px;
`;

const Input = styled.input`
width: 500px;
height: 35px;
`;

const Img = styled.img`
  border-radius: 5px;
  display: block;
  /* max-width: 100%;
  height: auto; */
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

const Item = styled.li`  
  box-shadow: 5px 10px 10px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

const Btn = styled.button`
width: 130px;
height: 40px;
background: linear-gradient(to bottom, #4eb5e5 0%,#389ed5 100%); /* W3C */
border: none;
border-radius: 5px;
position: relative;
border-bottom: 4px solid #2b8bc6;
color: #fbfbfb;
font-weight: 600;
font-family: 'Open Sans', sans-serif;
text-shadow: 1px 1px 1px rgba(0,0,0,.4);
font-size: 15px;
text-align: center;
text-indent: 5px;
box-shadow: 0px 3px 0px 0px rgba(0,0,0,.2);
cursor: pointer;
margin-left: 5px;
margin-right: 5px;

&:active {
  box-shadow: 0px 2px 0px 0px rgba(0,0,0,.2);
  top: 1px;
}`;

export default ImageList;
