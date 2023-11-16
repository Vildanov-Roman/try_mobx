// // // PostList.js
// // import React, { useEffect } from 'react';
// // import { observer } from 'mobx-react';
// // import postStore from './postStore';

// // import styled from 'styled-components'

// // const PostList = observer(() => {

// //   useEffect(() => {
// //     postStore.fetchPosts();
// //   }, []);

// //   return (
// //     <div>
// //       <Title>Post List</Title>      
// //       <List>
// //         {postStore.paginatedPosts.map((post) => (
// //           <Item key={post.id}>
// //             <TitlePost>{post.title}</TitlePost>
// //             <p>{post.body}</p>
// //           </Item>
// //         ))}
// //       </List>
// //       <ButtonWrap>
// //         <BtnPrev onClick={() => postStore.prevPage()}>Previous</BtnPrev>
// //         <Btn onClick={() => postStore.nextPage()}>Next</Btn>
// //       </ButtonWrap>
// //     </div>
// //   );
// // });


// // const Title = styled.h2`
// //   font-size: 1.5em;
// //   text-align: center;
// //   color: #4eb5e5;
// // `;

// // const List = styled.ul`
// //   display: grid;
// //   grid-template-columns: repeat(4, 1fr);
// //   grid-template-rows: repeat(3, 1fr);
// //   grid-column-gap: 10px;
// //   grid-row-gap: 10px;   
// // `;

// // const Item = styled.li`
// //   padding-left: 5px;
// //   padding-right: 5px;

// //   border: 1px solid #717172;
// //   border-radius: 10px;
// // `;

// // const TitlePost = styled.h3`
// //   font-size: 1em;
// //   text-align: center;
// //   color: #389ed5;

// //   background-color: #DBDBE2;
// //   border-radius: 10 10 0 0;
// // `;

// // const ButtonWrap = styled.ul`
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// // `;

// // const BtnPrev = styled.button`
// // width: 130px;
// // height: 40px;
// // background: linear-gradient(to bottom, #4eb5e5 0%,#389ed5 100%); /* W3C */
// // border: none;
// // border-radius: 5px;
// // position: relative;
// // border-bottom: 4px solid #2b8bc6;
// // color: #fbfbfb;
// // font-weight: 600;
// // font-family: 'Open Sans', sans-serif;
// // text-shadow: 1px 1px 1px rgba(0,0,0,.4);
// // font-size: 15px;
// // text-align: center;
// // text-indent: 5px;
// // box-shadow: 0px 3px 0px 0px rgba(0,0,0,.2);
// // cursor: pointer;
// // margin-left: 5px;
// // margin-right: 5px;

// // &:active {
// //   box-shadow: 0px 2px 0px 0px rgba(0,0,0,.2);
// //   top: 1px;
// // }

// // &:after {
// //   content: "";
// //   width: 0;
// //   height: 0;
// //   display: block;
// //   border-top: 20px solid #187dbc;
// //   border-bottom: 20px solid #187dbc;
// //   border-right: 16px solid transparent;
// //   border-left: 20px solid #187dbc;
// //   position: absolute;
// //   opacity: 0.6; 
// //   left: 0;
// //   top: 0;
// //   border-radius: 5px 0 0 5px;  
// // }
// // `;

// // const Btn = styled.button`
// // width: 130px;
// // height: 40px;
// // background: linear-gradient(to bottom, #4eb5e5 0%,#389ed5 100%); /* W3C */
// // border: none;
// // border-radius: 5px;
// // position: relative;
// // border-bottom: 4px solid #2b8bc6;
// // color: #fbfbfb;
// // font-weight: 600;
// // font-family: 'Open Sans', sans-serif;
// // text-shadow: 1px 1px 1px rgba(0,0,0,.4);
// // font-size: 15px;
// // text-align: center;
// // text-indent: 5px;
// // box-shadow: 0px 3px 0px 0px rgba(0,0,0,.2);
// // cursor: pointer;
// // margin-left: 5px;
// // margin-right: 5px;

// // &:active {
// //   box-shadow: 0px 2px 0px 0px rgba(0,0,0,.2);
// //   top: 1px;
// // }

// // &:after {
// //   content: "";
// //   width: 0;
// //   height: 0;
// //   display: block;
// //   border-top: 20px solid #187dbc;
// //   border-bottom: 20px solid #187dbc;
// //   border-left: 16px solid transparent;
// //   border-right: 20px solid #187dbc;
// //   position: absolute;
// //   opacity: 0.6; 
// //   right: 0;
// //   top: 0;
// //   border-radius: 0 5px 5px 0;  
// // }
// // `;

// // export default PostList;

// import React, { useEffect, useState } from 'react';
// import { observer } from 'mobx-react';
// import postStore from './postStore';

// import styled from 'styled-components';

// const ImageList = observer(() => {
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     postStore.fetchImages();
//   }, []);

//   const handleSearch = () => {
//     postStore.query = searchQuery.trim();
//     postStore.currentPage = 1;
//     postStore.fetchImages();
//   };

//   const handleLoadMore = () => {
//     postStore.loadMoreImages();
//   };

//   return (
//     <div>
//       <Title>Image List</Title>
//       <InputWrap>
//         <Input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <Btn onClick={handleSearch}>Search</Btn>
//       </InputWrap>      
//       <Gallery>
//         {postStore.images.map((image) => (
//           <Item key={image.id}>
//             <Img src={image.webformatURL} alt={image.tags} />
//           </Item>
//         ))}
//       </Gallery>
//       <button onClick={handleLoadMore}>Load More</button>
//     </div>
//   );
// });

// const Title = styled.h2`
//   font-size: 1.5em;
//   text-align: center;
//   color: #4eb5e5;
// `;

// const InputWrap = styled.div`
//   display: flex;  
//   align-items: center;
//   justify-content: center;

//   margin-bottom: 20px;
// `;

// const Input = styled.input`
// width: 500px;
// height: 35px;
// `;

// const Img = styled.img`
//   border-radius: 5px;
//   display: block;
//   /* max-width: 100%;
//   height: auto; */
//   width: 100%;
//   height: 260px;
//   object-fit: cover;
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   &:hover {
//     transform: scale(1.03);
//     cursor: zoom-in;
//   }
// `;

// const Item = styled.li`  
//   box-shadow: 5px 10px 10px 0px rgba(0, 0, 0, 0.2),
//   0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
// `;

// const Gallery = styled.ul`
//   display: grid;
//   max-width: calc(100vw - 48px);
//   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//   grid-gap: 16px;
//   margin-top: 0;
//   margin-bottom: 0;
//   padding: 0;
//   list-style: none;
//   margin-left: auto;
//   margin-right: auto;
//   margin-bottom: 20px;
// `;

// const Btn = styled.button`
// width: 130px;
// height: 40px;
// background: linear-gradient(to bottom, #4eb5e5 0%,#389ed5 100%); /* W3C */
// border: none;
// border-radius: 5px;
// position: relative;
// border-bottom: 4px solid #2b8bc6;
// color: #fbfbfb;
// font-weight: 600;
// font-family: 'Open Sans', sans-serif;
// text-shadow: 1px 1px 1px rgba(0,0,0,.4);
// font-size: 15px;
// text-align: center;
// text-indent: 5px;
// box-shadow: 0px 3px 0px 0px rgba(0,0,0,.2);
// cursor: pointer;
// margin-left: 5px;
// margin-right: 5px;

// &:active {
//   box-shadow: 0px 2px 0px 0px rgba(0,0,0,.2);
//   top: 1px;
// }`;

// export default ImageList;
