import HandlContextProvider from '../context/HandleContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <HandlContextProvider>
      <Component {...pageProps} />
    </HandlContextProvider>
  )
}

export default MyApp
