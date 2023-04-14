import { ReactElement } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import '../styles/globals.css';


type NextPageWithLayout = NextPage & {
  getLayout?: ( page: ReactElement ) => JSX.Element; 
}

type AppPropsWithLayout  = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout ) {

  const getLayout = Component.getLayout || ( (page) => page );

  // return (
    // <>
    //   <h1 style={{color: '#ffffb3'}}>My App</h1>
    //   <Component {...pageProps} />
    // </>
  // )

  return (  
    <>
      <h1 style={{color: '#ffffb3'}}>My App</h1>
      {getLayout(<Component {...pageProps} />)}
    </> 
  )
}
