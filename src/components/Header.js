import Image from 'next/image'
import styles from '@/styles/Home.module.css'
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className={styles.center}>
        By{' '}
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        />
      </div>
    </header>
  )
}