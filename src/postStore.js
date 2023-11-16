// // import { observable, action, makeObservable } from 'mobx';

// // class PostStore {
// //   posts = [];
// //   currentPage = 1;
// //   postsPerPage = 12;

// //   constructor() {
// //     makeObservable(this, {
// //       posts: observable,
// //       currentPage: observable,
// //       postsPerPage: observable,
// //       fetchPosts: action,
// //       nextPage: action,
// //       prevPage: action,
// //     });
// //   }

// //   async fetchPosts() {
// //     try {
// //       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// //       const data = await response.json();
// //       this.posts = data;
// //     } catch (error) {
// //       console.error('Error fetching posts:', error);
// //     }
// //   }

// //   get totalPages() {
// //     return Math.ceil(this.posts.length / this.postsPerPage);
// //   }

// //   get paginatedPosts() {
// //     const startIndex = (this.currentPage - 1) * this.postsPerPage;
// //     const endIndex = startIndex + this.postsPerPage;
// //     return this.posts.slice(startIndex, endIndex);
// //   }

// //   nextPage() {
// //     if (this.currentPage < this.totalPages) {
// //       this.currentPage += 1;
// //     }
// //   }

// //   prevPage() {
// //     if (this.currentPage > 1) {
// //       this.currentPage -= 1;
// //     }
// //   }
// // }

// // const postStore = new PostStore();
// // export default postStore;


// //======================== IMAGE ============================//

// import { observable, action, makeObservable, makeAutoObservable } from 'mobx';

// class PostStore {
//   images = [];
//   currentPage = 1;
//   query = '';
//   perPage = 12;
//   apiKey = '29770100-1ae097b1dc8cc9c4855e1a138';

//   constructor() {
//     // makeObservable(this, {
//     //   images: observable,
//     //   currentPage: observable,
//     //   query: observable,
//     //   fetchImages: action,
//     //   loadMoreImages: action,
//     // });

//     makeAutoObservable(this)
//   }

//   async fetchImages() {
//     try {
//       const response = await fetch(`https://pixabay.com/api/?key=${this.apiKey}&page=${this.currentPage}&q=${this.query}&image_type=photo&orientation=horizontal&per_page=${this.perPage}`);
//       const data = await response.json();
//       this.images = data.hits;
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     }
//   }

//   async loadMoreImages() {
//     this.currentPage += 1;
//     try {
//       const response = await fetch(`https://pixabay.com/api/?key=${this.apiKey}&page=${this.currentPage}&q=${this.query}&image_type=photo&orientation=horizontal&per_page=${this.perPage}`);
//       const data = await response.json();
//       this.images = [...this.images, ...data.hits];
//     } catch (error) {
//       console.error('Error loading more images:', error);
//     }
//   }
// }

// const postStore = new PostStore();
// export default postStore;

