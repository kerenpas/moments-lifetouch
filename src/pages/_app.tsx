import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {Open_Sans} from '@next/font/google';

const font = Open_Sans({
  subsets :['latin'],
  weight : ['400', '300', '700']
})

export default function App({Component, pageProps}: AppProps) {
  return (<div className={font.className}>
        <Component {...pageProps} />
      </div>
  )
}
