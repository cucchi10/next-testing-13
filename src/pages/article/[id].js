import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ArticleContext, useContext } from '@/contexts/articlesContext'
import styles from '@/styles/Article.module.css'
import NavArticles from '@/components/NavArticles';
import Navigation from '@/components/Navigation';
import NotFound from '@/components/NotFound';
import { Card, Typography } from 'antd';
const { Title } = Typography;


export default function Article() {
  const router = useRouter();
  const { id } = router.query

  const [article, setArticle] = useState(null)
  const [prev, setPrev] = useState(null)
  const [next, setNext] = useState(null)

  const { articles } = useContext(ArticleContext)

  useEffect(() => {
    let index = articles.findIndex(element => element.source.id == id)
    if (index !== -1) {
      setArticle(articles[index])
      setPrev(articles[index - 1]?.source.id || null)
      setNext(articles[index + 1]?.source.id || null)
    }
  }, [id, articles, article])

  return (
    <>
      {article ? (
        <>
          <div className={styles.title}>
            <Title level={2}>{article.source.name}</Title>
          </div>
          <Navigation />
          <Card hoverable={true} title={`Article of ${article.author}`} className={styles.CardAntd}>
            <article key={article.id} className={styles.card}>
              <img src={article.urlToImage} alt={`Pic of ${article.title}`} height={250} width={'100%'} />
              <h2>{article.title}</h2>
              <p>
                {article.description}
              </p>
            </article>
          </Card>
          <NavArticles prevId={prev} nextId={next} />
          <div className={styles.description}>
            <p>{article.content}</p>
          </div>
        </>
      ) :
        <NotFound href={'/'} text={'Volver a los Articles'} />
      }
    </>
  )
}

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