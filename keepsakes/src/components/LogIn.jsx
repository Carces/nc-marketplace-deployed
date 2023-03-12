import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUser, fetchBasket, postBasketItem } from '../api';
import { CurrentUserContext } from '../contexts/CurrentUser';
import { BasketContext } from '../contexts/Basket';
import Alert from '@mui/material/Alert';
import '../css/forms.css';

function LogIn({ basketsAlreadyCombined, setBasketsAlreadyCombined }) {
  const [username, setUsername] = useState('');
  const [userNotFound, setUserNotFound] = useState(false);
  const [isReturningToCheckout, setIsReturningToCheckout] = useState(false);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { basket, setBasket } = useContext(BasketContext);
  const navigate = useNavigate();
  const { checkout } = useParams();

  const loggedInUsername = !currentUser ? null : currentUser.username;

  if (isReturningToCheckout)
    delayReturnToCheckout().then(() => navigate('/checkout'));

  if (currentUser && !basketsAlreadyCombined)
    fetchBasket(loggedInUsername).then((fetchedBasket) => {
      basket.forEach((item) => postBasketItem(item.item_id, loggedInUsername));
      setBasketsAlreadyCombined(true);
      setBasket([...basket, ...fetchedBasket]);
    });

  function delayReturnToCheckout() {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, 1000);
    });
  }

  function validateUsername(event) {
    setUserNotFound(false);
    setIsReturningToCheckout(false);
    event.preventDefault();
    fetchUser(username)
      .then((user) => {
        if (!user) setUserNotFound(true);
        else {
          setCurrentUser(user);
          if (checkout === 'checking-out') setIsReturningToCheckout(true);
        }
      })
      .catch((err) => setUserNotFound(true));
  }

  const form = (
    <form className="page-content log-in-form">
      <h1 className="log-in-form__header">Log In</h1>
      <section id="log-in-form__username-section">
        <input
          id="log-in-form__username-input"
          className="log-in-form__input"
          aria-label="username"
          placeholder="Enter username..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </section>
      <button className="log-in-form__submit-button" onClick={validateUsername}>
        Submit
      </button>
    </form>
  );

  const userNotFoundError = (
    <Alert severity="error" className="log-in__error">
      User not found!
    </Alert>
  );

  const logInConfirmation = (
    <div className="page-content log-in__confirmation">
      <h1>Logged In as {loggedInUsername}</h1>
      <p className="page-content__text">Happy shopping!</p>
    </div>
  );
  return (
    <div>
      {userNotFound ? userNotFoundError : <></>}
      {currentUser ? logInConfirmation : form}
    </div>
  );
}

export default LogIn;
