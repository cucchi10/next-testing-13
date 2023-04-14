
import { API_ARTICLES } from "@/utils/constans";
const UseArticles = () => {

  let articles = [];

  const searchArticles = () => {
    let count = 0
    return fetch(API_ARTICLES)
      .then(res => res.json())
      .then(res => {
        articles = res.articles.map(article => {
          count += 1
          article.source.id = count
          return article
        })
        return articles
      })
  };

  const getArticles = () => {
    if (!articles.length) {
      return searchArticles();
    }
    return articles;
  };

  return {
    getArticles,
  };
};

export default UseArticles;


// "source": {
//   "id": null,
//   "name": "International Business Times"
// },
//   "author": "Sruthi Shankar and Ankika Biswas",
//   "title": "Wall St Eyes Higher Open As Inflation Data Eases Rate-hike Worries",
//   "description": "Wall Street's main indexes were poised for a higher open on Wednesday as headline consumer prices cooled faster than expected in March, raising hopes that the Federal Reserve could hit pause on its interest rate hiking cycle soon.",
//   "url": "https://www.ibtimes.com/wall-st-eyes-higher-open-inflation-data-eases-rate-hike-worries-3685308",
//   "urlToImage": "https://d.ibtimes.com/en/full/4444722/traders-work-floor-nyse-new-york.jpg",
//   "publishedAt": "2023-04-12T13:30:38Z",
//   "content": "Trader works on the floor of the New York Stock Exchange (NYSE) in New York City, U.S., March 30, 2023. Reuters\r\nWall Street's main indexes were poised for a higher open on Wednesday as headline cons… [+2888 chars]"
// },