import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BasketContext } from '../contexts/Basket';
import '../css/checkout.css';

function Checkout() {
  const { basket, setBasket } = useContext(BasketContext);

  function clearBasket() {
    setBasket([]);
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
  return (
    <div className="page-content checkout">
      <h1 className="checkout__header">Basket</h1>
      <p className="checkout__total">Total: £{total}</p>
      {basket.length ? (
        <Link to="/order-confirmation">
          <button className="checkout__button" onClick={clearBasket}>
            Check Out
          </button>
        </Link>
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
  );
}

export default Checkout;
