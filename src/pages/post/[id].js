import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PostContext, useContext } from '@/contexts/postsContext'
import styles from '@/styles/Post.module.css'
import NavPosts from '@/components/NavPosts';
import Navigation from '@/components/Navigation';
import UseComments from '@/hooks/useComments';
import NotFound from '@/components/NotFound';
import Comments from '@/components/Comments';
import { Button, Card, Typography, Spin } from 'antd';
const { Title } = Typography;


export default function Post() {
  const router = useRouter();
  const { id } = router.query

  const [post, setPost] = useState(null)
  const [prev, setPrev] = useState(null)
  const [next, setNext] = useState(null)

  const { posts } = useContext(PostContext)

  const { getComments } = UseComments()

  const [comments, setComments] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const searchComments = (id) => {
    setIsLoading(true)
    getComments(id).then(res => {
      setComments(res)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    if (post && id !== post.id) {
      setComments(null)
    }

    let index = posts.findIndex(element => element.id == id)
    if (index !== -1) {
      setPost(posts[index])
      setPrev(posts[index - 1]?.id || null)
      setNext(posts[index + 1]?.id || null)
    }
  }, [id, posts, post])

  return (
    <>
      <div className={styles.title}>
        <Title level={1}>Post</Title>
      </div>
      <Navigation />
      {post ? (
        <>
          <Card hoverable={true} title={`Post del User ID ${post.userId}`} className={styles.CardAntd}>
            <article key={post.id} className={styles.card}>
              <h2>{post.title}</h2>
              <p>
                {post.body}
              </p>
            </article>
          </Card>
          <NavPosts prevId={prev} nextId={next} />
          {!comments && !isLoading &&
            (< Button type="link" onClick={() => searchComments(post.id)}>
              Ver comentarios...
            </Button>
            )
          }
          {
            !comments && isLoading &&
            (<Spin tip="Loading" size="large" />)
          }
          {
            comments && !isLoading &&
            (<Comments comments={comments} />)
          }

        </>
      ) :
        <NotFound href={'/posts'} text={'Volver a los Posts'} />
      }
    </>
  )
}