
import { API_POST } from "@/utils/constans";
const UsePosts = () => {

  let posts = [];

  const searchPosts = () => {
    return fetch(API_POST)
      .then(res => res.json())
      .then(res => {
        posts = res
        return posts
      })
  };

  const getPosts = () => {
    if (!posts.length) {
      return searchPosts();
    }
    return posts;
  };

  return {
    getPosts,
  };
};

export default UsePosts;



// "userId": 1,
//   "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },