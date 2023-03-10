import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "..//logo/logo-name-only.png";
import "../css/nav-and-footer.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HistoryIcon from "@mui/icons-material/History";
import { BasketContext } from "../contexts/Basket";
import { CurrentUserContext } from "../contexts/CurrentUser";

function NavBar() {
  const [searchBarContents, setSearchBarContents] = useState(null);
  const currentUser = useContext(CurrentUserContext);
  const { basket, setBasket } = useContext(BasketContext);

  const basketQuantity = basket.length;
  console.log(basketQuantity, '<<<<')

  

  return (
    <nav className="nav-bar">
      <Link
        to="/"
        style={{
          width: "75px",
          display: "flex",
          justifyContent: "center",
          borderRadius: "10%",
          margin: "5px",
        }}
      >
        <img src={logo} alt="logo" id="main-logo" />
      </Link>

      <form className="search-bar" action="">
        <input type="text" className="search-bar__input" />
        <button id="search-bar__search-button">
          <SearchIcon className="search-bar__icon" />
        </button>
      </form>

      <button className="nav-bar__basket">
        <ShoppingBasketIcon />
        {basketQuantity > 0 ? (
          <p className="nav-bar__basket-indicator">{basketQuantity}</p>
        ) : (
          <></>
        )}
      </button>

      <button>
        <HistoryIcon />
      </button>

      <Link to="/new-listing">
        <button className="nav-bar__user-icon">
          <AccountCircleIcon />
        </button>
      </Link>
    </nav>
  );
}

export default NavBar;
