import Link from 'next/link'
import { MainLayout } from '../components/laoyuts/MainLayout'

export default function Home() {
  return (
    <>
      <MainLayout>
          <h1>Home Page</h1>

          <h1 className={'card'}>
            Ir a <Link href='/about'>About</Link>
          </h1>

        <p className={'description'}>
          Get started by editing {' '}
          <code className={'code'}> &nbsp;pages/index.jsx</code>
        </p>
      </MainLayout>
    </> 
  )
}
