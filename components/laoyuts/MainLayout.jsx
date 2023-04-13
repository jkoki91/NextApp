import styles from './MainLayout.module.css'
import Head from 'next/head'
import { Navbar } from '../Navbar'


export const MainLayout = ({ children }) => {
    return (
        <>
          <Head>
            <title>Home - Jorge</title>
            <meta name="description" content="Home page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar></Navbar>
    
    
          <main className={styles.main}>
            
            { children }
    
          </main>
        </>
      )
}
