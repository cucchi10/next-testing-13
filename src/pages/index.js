import styles from '@/styles/Home.module.css'
import UseArticles from '@/hooks/useArticles'
import { Row, Col, Typography, Pagination, Spin } from 'antd';
import { currentPageDefault, articlesPerPageDefault } from '../utils/constans';
import Navigation from '@/components/Navigation';
import { ArticleContext, useContext } from '@/contexts/articlesContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const { Text, Title } = Typography;
export default function Home({ articles }) {

  const { updateArticlesContext } = useContext(ArticleContext)

  const [currentPage, setCurrentPage] = useState(currentPageDefault);
  const [articlePerPage] = useState(articlesPerPageDefault);

  const indexOfLastArticle = currentPage * articlePerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlePerPage;
  const currentarticle = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    updateArticlesContext(articles)
  }, [articles])

  return (
    <>
      <div className={styles.title}>
        <Title level={1}>Articles</Title>
      </div>
      <Navigation />
      <div className={styles.description}>
        {
          !currentarticle.length ?
            <Text>No hay articulos</Text>
            :
            <>
              <div>
                <Col>{
                  currentarticle.map((article) => (
                    <Row key={article.source.id} >
                      <Link href={`/article/${article.source.id}`} key={article.source.id}>
                        <article key={article.source.id} className={styles.article}>
                          <img src={article.urlToImage} alt={`Pic of ${article.title}`} height={250} width={'100%'} />
                          <h2>{article.title}</h2>
                          <p>
                            {article.description}
                          </p>
                        </article>
                      </Link>
                    </Row>
                  ))}
                </Col>
                <div className={styles.pagination}>
                  <Pagination
                    current={currentPage}
                    pageSize={articlePerPage}
                    total={articles.length}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                  />
                </div>
              </div>
            </>
        }
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const { getArticles } = UseArticles();
  const articles = await getArticles()
  return {
    props: {
      articles
    }
  }
}
