import styles from '@/styles/Post.module.css'

import { Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;
export default function Comments({ comments }) {
  return (
    <>
      {
        comments.length ?
          (
            <>
              <Text className={styles.textComments}>Comentarios</Text>
              <Col>{
                comments.map((comment) => (
                  <Row key={comment.id} className={styles.description}>
                    <article key={comment.id} className={styles.article}>
                      <h2>{comment.name}</h2>
                      <p>
                        {comment.body}
                      </p>
                      <small className={styles.email}>{comment.email}</small>
                    </article>
                  </Row>
                ))}
              </Col>
            </>
          )
          :
          (<Title level={5}>No hay commentarios...</Title>)
      }
    </>
  )
}