import postStore from "./postStore";
import imageStore from "./imageStore"

class RootStore {
  post = postStore;
  image = imageStore;
};

export default RootStore;