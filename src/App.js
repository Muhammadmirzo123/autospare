import './App.css';
import { Routes,Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Contact from './pages/contact/Contact';
import Tools from './pages/tools/Tools';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Account from './pages/account/Account'
import Checkout from './pages/checkout/Checkout';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Cart from './pages/cart/Cart';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/account" element={<Account />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
