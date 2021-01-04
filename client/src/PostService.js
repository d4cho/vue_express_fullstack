import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class PostService {
  // Get Posts
  static async getPosts() {
    try {
      const response = await axios.get(url);
      return response.data.map((post) => ({
        ...post,
        createdAt: new Date(post.createdAt)
      }));
    } catch (error) {
      return error;
    }

    // return new Promise(async (resolve, reject) => {
    //   try {
    //     const response = await axios.get(url);
    //     resolve(
    //       response.data.map((post) => ({
    //         ...post,
    //         createdAt: new Date(post.createdAt)
    //       }))
    //     );
    //   } catch (error) {
    //     reject(error);
    //   }
    // });
  }

  // Create Posts
  static insertPost(text) {
    return axios.post(url, { text });
  }

  // Delete Posts
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
