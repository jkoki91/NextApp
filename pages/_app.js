import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

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
