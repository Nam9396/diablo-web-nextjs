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
          <div className="fixed inset-0 flex justify-center bg-zinc-900"></div>
          <div className="relative flex w-full flex-col">
            <Head>
              <link rel="icon" href="/icon-1.ico" sizes="any" />
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
