import styles from '@/styles/Home.module.css'


export default function Layout({ children }) {

  return (
    <>
      <main className={styles.main}>
        {children}
      </main >
    </>
  )
}
