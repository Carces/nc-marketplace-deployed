import { useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'

// import AboutUs from './components/AboutUs';
// import Checkout from './components/Checkout';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import ItemPage from './components/ItemPage';
// import LatestDeals from './components/LatestDeals';
// import Listings from './components/Listings';
import NavBar from './components/NavBar';
// import NewListing from './components/NewListing';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [basket, setBasket] = useState(null);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App;
