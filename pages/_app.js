import '../styles/globals.css'
import { useRouter } from "next/router"
import { useState, useEffect } from 'react'
import { ThreeDots } from 'react-loader-spinner'

// =============== Router path chanage to loading ==========================
function RouteLoading() {
  const router = useRouter();
  const [routeloading, setRouteLoading] = useState(false);
  
  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setRouteLoading(true);
    const handleComplete = (url) => (url === router.asPath) && setTimeout(() => {setRouteLoading(false)}, 100);
    
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return routeloading && (
    <div className='h-full w-full flex justify-center align-center fixed top-0 left-0 bg-[#F3FFFC] z-30'>
       <div className='absolute flex flex-col justify-center align-center h-full mx-0 my-auto'>
        <ThreeDots 
              height={80}
              width={80}
              radius="9"
              color="#a3beb6" 
              ariaLabel="three-dots-loading"              
              visible={true}
            />
      </div>
    </div>
  )
}

function MyApp({ Component, pageProps }) {
  return (<><RouteLoading/> <Component {...pageProps} /></>)
}

export default MyApp
