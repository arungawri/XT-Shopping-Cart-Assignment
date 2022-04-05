import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../store';
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ReduxProvider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ReduxProvider>
    </>
  )
}

export default MyApp
