import Link from 'next/link'
import { MainLayout } from '../components/laoyuts/MainLayout'
import { DarkLayout } from '../components/laoyuts/DarkLayout'

export default function AboutPage() {
  return (
    <>
      {/* <MainLayout> */}{/* ASI ESTABA ANTES */}
        {/* <DarkLayout> */}
          <h1>About page</h1>

          <h1 className={'card'}>
            Ir a <Link href='/'>Home</Link>
          </h1>

          <p className={'description'}>
            Get started by editing {' '}
            <code className={'code'}> &nbsp;pages/about.jsx</code>
          </p>
        {/* </DarkLayout> */}
      {/* </MainLayout> */}

    </>
  )
}


AboutPage.getLayout = function getLayout ( page ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}