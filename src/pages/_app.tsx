import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
