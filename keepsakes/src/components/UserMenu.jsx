import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/nav-and-footer.css';
import { CurrentUserContext } from '../contexts/CurrentUser';

function UserMenu() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="user-menu">
      {currentUser ? (
        <p className="user-menu__name">{currentUser.username}</p>
      ) : null}

      {currentUser ? (
        <Link to="/log-out">
          <option className="user-menu__option">Log Out</option>
        </Link>
      ) : (
        <Link to="/log-in">
          <option className="user-menu__option">Log In</option>
        </Link>
      )}
      <Link to="/new-listing">
        <option className="user-menu__option">List item</option>
      </Link>
      {currentUser ? (
        <Link to="/profile">
          <option className="user-menu__option">My Profile</option>
        </Link>
      ) : (
        <Link to="/sign-up">
          <option className="user-menu__option">Sign Up</option>
        </Link>
      )}
      {currentUser ? (
        <Link to="/order-history">
          <option className="user-menu__option">My Orders</option>
        </Link>
      ) : null}
    </div>
  );
}

export default UserMenu;
