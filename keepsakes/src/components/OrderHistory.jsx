import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUser';
import '../css/checkout-and-history.css';
import Alert from '@mui/material/Alert';
import { fetchOrders } from '../api';

function OrderHistory() {
  const [isFetchError, setIsFetchError] = useState(false);
  const [notloggedIn, setNotLoggedIn] = useState(false);
  const [orderedItems, setOrderedItems] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);

  const loggedInUsername = !currentUser ? null : currentUser.username;
  let totalSpent = 0;
  orderedItems.forEach((item) => (totalSpent += item.price));

  useEffect(() => {
    setIsFetchError(false);
    if (loggedInUsername)
      fetchOrders(loggedInUsername)
        .then((items) => setOrderedItems(items))
        .catch((err) => setIsFetchError(true));
    else setNotLoggedIn(true);
  }, [loggedInUsername]);

  const ordersHTML = orderedItems.map((item, index) => {
    return (
      <Link to={`/items/${item.item_id}`} key={index}>
        <li className="order-history__item">
          <img
            className="order-history__img"
            alt={item.item_name}
            src={item.img_url}
          ></img>
          <p className="order-history__price">{`£${item.price}`}</p>
          <h2 className="order-history__header">{item.item_name}</h2>
        </li>
      </Link>
    );
  });

  const fetchOrdersError = (
    <Alert severity="error" className="order-history__error">
      Couldn't fetch orders
    </Alert>
  );

  const notLoggedInError = (
    <Alert severity="error" className="order-history__error">
      Must be logged in to see order history
    </Alert>
  );

  const content = (
    <div className="page-content order-history">
      <h1 className="order-history__page-header">Order History</h1>
      <p className="order-history__total">Total Spent: £{totalSpent}</p>
      <ul className="order-history__list">{ordersHTML}</ul>
    </div>
  );

  return isFetchError
    ? fetchOrdersError
    : notloggedIn
    ? notLoggedInError
    : content;
}

export default OrderHistory;
