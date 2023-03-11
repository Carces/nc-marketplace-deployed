import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUser';
import '../css/profile.css';

function Profile() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  // const [itemNotFound, setItemNotFound] = useState(false);
  const notLoggedInError = <Alert severity="error">Not Logged In</Alert>;
  const { username, avatar_url, items_ordered } = currentUser;
  console.log(currentUser, '<<<< CU PROF');

  function logOut() {
    setCurrentUser(null);
  }

  // useEffect(() => {
  //   setItemNotFound(false);
  //   fetchItemById(item_id)
  //     .then((item) => {
  //       setItemDetails(item);
  //     })
  //     .catch((err) => {
  //       setItemNotFound(true);
  //     });
  // }, []);

  const profileContent = (
    <div className="page-content profile">
      <h2 className="profile__username">{`${username}'s Profile`}</h2>
      <img src={avatar_url} className="profile__avatar"></img>
      <p className="profile__total-orders">
        Total Items Ordered: {items_ordered}
      </p>
      <Link to="/new-listing">
        <button className="profile__button">New Listing</button>
      </Link>
      <Link to="/order-history">
        <button className="profile__button">My Orders</button>
      </Link>
      <Link to="/log-out">
        <button className="profile__button" onClick={logOut}>
          Log Out
        </button>
      </Link>
    </div>
  );

  return <>{!currentUser ? notLoggedInError : profileContent}</>;
}

export default Profile;
