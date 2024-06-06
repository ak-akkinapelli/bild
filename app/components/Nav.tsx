'use client'

/* Core */
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import GhostIcon from '../assets/ghost.svg'
import VerifyIcon from '../assets/verify.svg'
/* Instruments */
import styles from '../styles/layout.module.css'

export const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
        href="/"
      >
        <GhostIcon/>
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/verify' ? styles.active : ''
        }`}
        href="/verify"
      >
        Verify <VerifyIcon/>
      </Link>
    </nav>
  )
}
