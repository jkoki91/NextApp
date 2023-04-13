import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { MainLayout } from '@/components/laoyuts/MainLayout'

export default function ContactPage() {
  return (
    <>
      <MainLayout>
        <h1>Contact page</h1>

        <h1 className={styles.card}>
          Ir a <Link href='/'>Home</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing {' '}
          <code className={styles.code}> &nbsp;pages/contact/index.jsx</code>
        </p>
      </MainLayout>

    </>
  )
}