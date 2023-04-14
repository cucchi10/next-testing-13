import { useState, useContext, createContext } from 'react';

const PostContext = createContext([]);

function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const updatePostsContext = (data) => {
    setPosts(data);
  };

  return (
    <PostContext.Provider value={{ posts, updatePostsContext }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider, useContext };