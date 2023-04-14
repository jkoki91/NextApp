import { FC, PropsWithChildren } from "react";
import Head from 'next/head';
import styles from './MainLayout.module.css';
import { Navbar } from '../Navbar';


export const MainLayout: FC<PropsWithChildren> = ({ children }) => { //Aunque no me d error lo del children lo tipamos para que no sea tipo any
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
