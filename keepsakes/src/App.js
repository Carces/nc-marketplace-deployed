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
        <Route path="keepsakes/" element={<LatestDeals />} />
        <Route path="keepsakes/items" element={<Listings />} />
        <Route path="keepsakes/items/:item_id" element={<ItemPage />} />
        <Route path="keepsakes/contact" element={<Contact />} />
        <Route
          path="keepsakes/contact-confirmation"
          element={<ContactConfirmation />}
        />
        <Route path="keepsakes/about-us" element={<AboutUs />} />
        <Route path="keepsakes/new-listing" element={<NewListing />} />
        <Route path="keepsakes/items" element={<Listings />} />
        <Route path="keepsakes/checkout" element={<Checkout />} />
        <Route
          path="keepsakes/order-confirmation"
          element={<CheckoutConfirmation />}
        />
        <Route path="keepsakes/order-history" element={<OrderHistory />} />
        <Route path="keepsakes/profile" element={<Profile />} />
        <Route
          path="keepsakes/log-in"
          element={
            <LogIn
              basketsAlreadyCombined={basketsAlreadyCombined}
              setBasketsAlreadyCombined={setBasketsAlreadyCombined}
            />
          }
        />
        <Route
          path="keepsakes/log-in/:checkout"
          element={
            <LogIn
              basketsAlreadyCombined={basketsAlreadyCombined}
              setBasketsAlreadyCombined={setBasketsAlreadyCombined}
            />
          }
        />
        <Route
          path="keepsakes/log-out"
          element={
            <LogOut setBasketsAlreadyCombined={setBasketsAlreadyCombined} />
          }
        />
        <Route path="keepsakes/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
