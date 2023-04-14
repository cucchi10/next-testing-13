import styles from '@/styles/Home.module.css'
import UsePosts from '@/hooks/usePosts'
import { Row, Col, Typography, Pagination } from 'antd';
import Navigation from '@/components/Navigation';
import { PostContext, useContext } from '@/contexts/postsContext';
import { useEffect, useState } from 'react';
import Link from "next/link"
import { currentPageDefault, postsPerPageDefault } from '../utils/constans';
const { Text, Title } = Typography;
export default function Posts({ posts }) {

  const { updatePostsContext } = useContext(PostContext)

  const [currentPage, setCurrentPage] = useState(currentPageDefault);
  const [postsPerPage] = useState(postsPerPageDefault);

  const indexOfLastpost = currentPage * postsPerPage;
  const indexOfFirstpost = indexOfLastpost - postsPerPage;
  const currentposts = posts.slice(indexOfFirstpost, indexOfLastpost);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    updatePostsContext(posts)
  }, [posts])

  return (
    <>
      <div className={styles.title}>
        <Title level={1}>Posts</Title>
      </div>
      <Navigation />
      <div className={styles.description}>
        {
          !posts.length ?
            <Text>No hay posts</Text>
            :
            <>
              <div>
                <Col>{
                  currentposts.map((post) => (
                    <Row key={post.id} >
                      <Link href={`post/${post.id}`} key={post.id}>
                        <article key={post.id} className={styles.article}>
                          <h2>{post.title}</h2>
                          <p>
                            {post.body}
                          </p>
                        </article>
                      </Link>
                    </Row>
                  ))}
                </Col>
                <div className={styles.pagination}>
                  <Pagination
                    current={currentPage}
                    pageSize={postsPerPage}
                    total={posts.length}
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

export async function getStaticProps() {
  const { getPosts } = UsePosts();
  const posts = await getPosts()
  return {
    props: {
      posts
    }
  }
}
