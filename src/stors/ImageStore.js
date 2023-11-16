import { makeAutoObservable } from 'mobx';

class ImgeStore {
  images = [];
  currentPage = 1;
  query = '';
  perPage = 12;
  apiKey = '29770100-1ae097b1dc8cc9c4855e1a138';

  constructor() {
    // makeObservable(this, {
    //   images: observable,
    //   currentPage: observable,
    //   query: observable,
    //   fetchImages: action,
    //   loadMoreImages: action,
    // });

    makeAutoObservable(this)
  }

  async fetchImages() {
    try {
      const response = await fetch(`https://pixabay.com/api/?key=${this.apiKey}&page=${this.currentPage}&q=${this.query}&image_type=photo&orientation=horizontal&per_page=${this.perPage}`);
      const data = await response.json();
      this.images = data.hits;
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }

  async loadMoreImages() {
    this.currentPage += 1;
    try {
      const response = await fetch(`https://pixabay.com/api/?key=${this.apiKey}&page=${this.currentPage}&q=${this.query}&image_type=photo&orientation=horizontal&per_page=${this.perPage}`);
      const data = await response.json();
      this.images = [...this.images, ...data.hits];
    } catch (error) {
      console.error('Error loading more images:', error);
    }
  }
}

const imageStore = new ImgeStore();
export default imageStore;

