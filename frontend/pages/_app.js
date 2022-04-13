import { useState } from 'react'
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../store';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Cart from '../components/Cart'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [showCartModal, setShowCartModal] = useState(false)

  return (
    <>
      <ReduxProvider store={store}>
        <Header />
        <Component {...pageProps} />
        {showCartModal && <Cart />}
        <Footer />
      </ReduxProvider>
    </>
  )
}

export default MyApp
