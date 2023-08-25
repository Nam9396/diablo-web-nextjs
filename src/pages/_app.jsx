import { useEffect, useRef } from 'react'
import { Footer } from '@/components/Footer'
import Head from 'next/head.js'
import '@/styles/tailwind.css'
import 'focus-visible'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from 'next-auth/react'

import { wrapper } from '../../redux/store.js'
import { Provider } from 'react-redux'
import dynamic from 'next/dynamic'
import BackgroundImage from '@/components/BackgroundImage.jsx'

const Header = dynamic(() => import('../components/Header'), { ssr: false })

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ 
  Component, router, pageProps: { session, ...pageProps }, ...rest
}) {
  let previousPathname = usePrevious(router.pathname)
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <SessionProvider session={session}>
      <Provider store={store}>
          {/* <div className="fixed inset-0 flex justify-center bg-zinc-900"></div> */}
          {/* <BackgroundImage /> */}
          <div className="relative flex w-full flex-col">
            <Head>
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
              <link rel="manifest" href="/site.webmanifest" />
              <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
              <meta name="msapplication-TileColor" content="#da532c" />
              <meta name="theme-color" content="#ffffff" />
            </Head>
            <Header />
            <main className="flex-auto">
              <Component previousPathname={previousPathname} {...pageProps} />
            </main>
            <Footer />
          </div>
          <ToastContainer autoClose={2000} hideProgressBar={true} />
      </Provider>
      </SessionProvider>
    </>
  )
}


// export default wrapper.useWrappedStore(App);
