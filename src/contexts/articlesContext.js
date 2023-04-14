import { useState, useContext, createContext } from 'react';

const ArticleContext = createContext([]);

function ArticleProvider({ children }) {
  const [articles, setArticles] = useState([]);

  const updateArticlesContext = (data) => {
    setArticles(data);
  };

  return (
    <ArticleContext.Provider value={{ articles, updateArticlesContext }}>
      {children}
    </ArticleContext.Provider>
  );
};

export { ArticleContext, ArticleProvider, useContext };