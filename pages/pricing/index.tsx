import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { MainLayout } from '../../components/laoyuts/MainLayout'

export default function PricingPage() {
  return (
    <>
      <MainLayout>
        <h1>Pricing page</h1>

        <h1 className={styles.card}>
          Ir a <Link href='/'>Home</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing {' '}
          <code className={styles.code}> &nbsp;pages/pricing/index.jsx</code>
        </p>
      </MainLayout>

    </>
  )
}