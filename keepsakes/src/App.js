import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import AboutUs from './components/AboutUs';
import Checkout from './components/Checkout';
import CheckoutConfirmation from './components/CheckoutConfirmation';
import OrderHistory from './components/OrderHistory';
import Profile from './components/Profile';
import Contact from './components/Contact';
import ContactConfirmation from './components/ContactConfirmation';
import Footer from './components/Footer';
import ItemPage from './components/ItemPage';
import LatestDeals from './components/LatestDeals';
import Listings from './components/Listings';
import NavBar from './components/NavBar';
import NewListing from './components/NewListing';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import SignUp from './components/SignUp';

function App() {
  const [basketsAlreadyCombined, setBasketsAlreadyCombined] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LatestDeals />} />
        <Route path="/items" element={<Listings />} />
        <Route path="/items/:item_id" element={<ItemPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-confirmation" element={<ContactConfirmation />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/new-listing" element={<NewListing />} />
        <Route path="/items" element={<Listings />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<CheckoutConfirmation />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/log-in"
          element={
            <LogIn
              basketsAlreadyCombined={basketsAlreadyCombined}
              setBasketsAlreadyCombined={setBasketsAlreadyCombined}
            />
          }
        />
        <Route
          path="/log-in/:checkout"
          element={
            <LogIn
              basketsAlreadyCombined={basketsAlreadyCombined}
              setBasketsAlreadyCombined={setBasketsAlreadyCombined}
            />
          }
        />
        <Route
          path="/log-out"
          element={
            <LogOut setBasketsAlreadyCombined={setBasketsAlreadyCombined} />
          }
        />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
