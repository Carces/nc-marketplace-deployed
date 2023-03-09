import { useState } from 'react';
import logo from '..//logo/logo-name-only.png';
import '../css/nav-and-footer.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';

function NavBar({ currentUser, basket }) {
  const [searchBarContents, setSearchBarContents] = useState(null);
  return (
    <nav className="nav-bar">
      <img src={logo} alt="logo" id="main-logo" />

      <form className="search-bar" action="">
        <input type="text" className="search-bar__input" />
        <button id="search-bar__search-button">
          <SearchIcon className="search-bar__icon" />
        </button>
      </form>

      <button>
        <ShoppingBasketIcon />
      </button>

      <button>
        <HistoryIcon />
      </button>

      <button className="search-bar__user-icon">
        <AccountCircleIcon />
      </button>
    </nav>
  );
}

export default NavBar;
