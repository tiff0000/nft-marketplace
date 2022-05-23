import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis';
import { NFTProvider } from '../context/NFTContext';
import { ModalProvider } from 'react-simple-hook-modal';

function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider
  serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER} 
  appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
  > 
    <NFTProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </NFTProvider>
    
  </MoralisProvider>
  )
}

export default MyApp
