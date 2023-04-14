import styles from '@/styles/Navigation.module.css'
import Link from "next/link"
import { useRouter } from 'next/router';

export default function Navigation() {

  const router = useRouter();

  const links = [{
    label: 'ir a Articles - ServerSide Props 👉',
    route: '/'
  }, {
    label: 'ir a Post - Statics Props 👉',
    route: '/posts'
  }]


  return (
    <>
      <div className={styles.Link} >
        {links.map(link => (
          link.route !== router.pathname &&
          <Link href={link.route} key={link.route}>
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )
}