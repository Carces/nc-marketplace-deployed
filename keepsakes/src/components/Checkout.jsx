import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BasketContext } from '../contexts/Basket';
import { CurrentUserContext } from '../contexts/CurrentUser';
import { postOrder } from '../api';
import Alert from '@mui/material/Alert';
import '../css/checkout.css';

function Checkout() {
  const { basket, setBasket } = useContext(BasketContext);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const loggedInUsername = !currentUser ? null : currentUser.username;
  console.log(loggedInUsername, currentUser);

  function clearBasket() {
    setBasket([]);
  }

  function handleOrder() {
    if (!loggedInUsername) navigate('/log-in/checking-out');
    else {
      const itemOrders = basket.map((item) =>
        postOrder(item.item_id, loggedInUsername)
      );
      setIsError(false);

      Promise.all(itemOrders)
        .then((promiseResults) => {
          setBasket([]);
          navigate('/order-confirmation');
        })
        .catch((err) => setIsError(true));
    }
  }

  function removeItem(index) {
    const updatedBasket = [...basket];
    updatedBasket.splice(index, 1);
    setBasket(updatedBasket);
  }

  let total = 0;
  basket.forEach((item) => (total += item.price));
  const basketHTML = basket.map((item, index) => {
    return (
      <li className="basket__item" key={index}>
        <button
          className="basket__delete-button"
          onClick={() => removeItem(index)}
        >
          Remove
        </button>
        <img className="basket__img" src={item.img_url}></img>
        <p className="basket__price">{`£${item.price}`}</p>
        <h2 className="basket__header">{item.item_name}</h2>
      </li>
    );
  });

  const checkoutError = (
    <Alert severity="error" className="checkout__error">
      Order Failed!
    </Alert>
  );

  return (
    <>
      {isError ? checkoutError : null}
      <div className="page-content checkout">
        <h1 className="checkout__header">Basket</h1>
        <p className="checkout__total">Total: £{total}</p>
        {basket.length ? (
          <button className="checkout__button" onClick={handleOrder}>
            Check Out
          </button>
        ) : (
          <button className="checkout__button disabled">Check Out</button>
        )}
        {basket.length ? (
          <button className="checkout__button" onClick={clearBasket}>
            Clear Basket
          </button>
        ) : (
          <button className="checkout__button disabled">Clear Basket</button>
        )}

        <ul className="checkout__basket-list">{basketHTML}</ul>
      </div>
    </>
  );
}

export default Checkout;
