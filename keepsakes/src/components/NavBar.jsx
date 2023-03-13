import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo/logo-name-only.png';
import '../css/nav-and-footer.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import { BasketContext } from '../contexts/Basket';
import { CurrentUserContext } from '../contexts/CurrentUser';
import UserMenu from './UserMenu';

function NavBar() {
  const [searchBarContents, setSearchBarContents] = useState('');
  const [userMenuShown, setUserMenuShown] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);
  const { basket } = useContext(BasketContext);
  const basketQuantity = basket.length;

  function toggleUserMenu() {
    setUserMenuShown(!userMenuShown);
  }

  function closeUserMenu(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setUserMenuShown(false);
    }
  }

  return (
    <nav className="nav-bar">
      <Link
        to="/"
        style={{
          width: '75px',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '10%',
          margin: '5px',
        }}
      >
        <img src={logo} alt="keepsakes logo" id="main-logo" />
      </Link>

      <form className="search-bar" action="">
        <input
          type="text"
          className="search-bar__input"
          aria-label="search term"
          value={searchBarContents}
          onChange={(event) => setSearchBarContents(event.target.value)}
        />
        <Link to={`/items?search=${searchBarContents}`}>
          <button id="search-bar__search-button">
            <SearchIcon className="nav-bar__icon search-bar__icon" />
          </button>
        </Link>
      </form>

      <Link to="/checkout">
        <button className="nav-bar__basket">
          <ShoppingBasketIcon className="nav-bar__icon" />
          {basketQuantity > 0 ? (
            <p className="nav-bar__basket-indicator">{basketQuantity}</p>
          ) : (
            <></>
          )}
        </button>
      </Link>

      <Link to="/order-history">
        <button className="nav-bar__history">
          <HistoryIcon className="nav-bar__icon" />
        </button>
      </Link>

      <button
        id="user-button"
        className="nav-bar__user"
        onClick={toggleUserMenu}
        onBlur={closeUserMenu}
      >
        {currentUser ? (
          <img
            src={currentUser.avatar_url}
            alt={`${currentUser.username}'s avatar`}
            className="nav-bar__icon nav-bar__avatar"
          />
        ) : (
          <AccountCircleIcon className="nav-bar__icon" />
        )}
        {userMenuShown ? (
          <UserMenu
            userMenuShown={userMenuShown}
            setUserMenuShown={setUserMenuShown}
          />
        ) : null}
      </button>

      <div className="nav-bar__categories">
        <Link to="/items?category_name=All">
          <p className="nav-bar__category">All</p>
        </Link>
        <Link to="/items?category_name=Electronics">
          <p className="nav-bar__category">Electronics</p>
        </Link>
        <Link to="/items?category_name=Clothing">
          <p className="nav-bar__category">Clothing</p>
        </Link>
        <Link to="/items?category_name=Household">
          <p className="nav-bar__category">Household</p>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
