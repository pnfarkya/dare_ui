import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (<><header>
    <img src='/Header.jpg' />
    <li>
      <a href='/'>Home &nbsp;&nbsp;&nbsp;&nbsp;</a>
      <a href='/about'>&nbsp; &nbsp; About</a>
      <a href='/login'>&nbsp; &nbsp; Login</a>
    </li>
  </header>
    <Component {...pageProps} />
  </>)
}

export default MyApp
