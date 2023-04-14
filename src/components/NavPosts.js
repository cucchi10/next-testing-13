import styles from '@/styles/NavPosts.module.css'
import Link from "next/link"
import { useEffect, useState } from 'react'

export default function NavPosts({ prevId, nextId }) {

  const [prev, setPrev] = useState(null)
  const [next, setNext] = useState(null)

  useEffect(() => {
    setPrev(prevId)
    setNext(nextId)
  }, [prevId, nextId])
  return (
    <>
      <div className={styles.Container} >

        {
          prev ?
            <Link href={`${prev}`} className={styles.prev}>
              {`ir al Post anterior 👈`}
            </Link>
            :
            <p>
              No hay post anteriores
            </p>
        }

        {
          next ?

            <Link href={`${next}`} className={styles.next}>
              {`ir al Post siguiente 👉`}
            </Link>
            :
            <p>
              No hay post posteriores
            </p>

        }

      </div>
    </>
  )
}