import Link from 'next/link'
import { MainLayout } from '../../components/laoyuts/MainLayout'

export default function ContactPage() {
  return (
    <>
      <MainLayout>
        <h1>Contact page</h1>

        <h1 className={'card'}>
          Ir a <Link href='/'>Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing {' '}
          <code className={'code'}> &nbsp;pages/contact/index.jsx</code>
        </p>
      </MainLayout>

    </>
  )
}