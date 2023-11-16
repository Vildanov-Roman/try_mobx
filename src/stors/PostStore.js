import { observable, action, makeObservable } from 'mobx';

class PostStore {
  posts = [];
  currentPage = 1;
  postsPerPage = 12;

  constructor() {
    makeObservable(this, {
      posts: observable,
      currentPage: observable,
      postsPerPage: observable,
      fetchPosts: action,
      nextPage: action,
      prevPage: action,
    });
  }

  async fetchPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      this.posts = data;
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  get totalPages() {
    return Math.ceil(this.posts.length / this.postsPerPage);
  }

  get paginatedPosts() {
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    const endIndex = startIndex + this.postsPerPage;
    return this.posts.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
    }
  }
}

const postStore = new PostStore();
export default postStore;