import { fetchItemById } from '../api';
import { BasketContext } from '../contexts/Basket';
import Alert from '@mui/material/Alert';
import { Link, useParams } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import '../css/item-page.css';

function ItemPage() {
  const [itemDetails, setItemDetails] = useState('');
  const { setBasket } = useContext(BasketContext);
  const [itemNotFound, setItemNotFound] = useState(false);
  const successfulBasketAdd = <Alert severity="success">Added To Basket</Alert>;
  const itemNotFoundError = <Alert severity="error">Item not found</Alert>;
  const { item_id } = useParams();
  const { item_name, description, price, category_name, img_url } = itemDetails;

  function addToBasket() {
    setBasket((basket) => {
      const updatedBasket = [itemDetails, ...basket];
      return updatedBasket;
    });
  }

  function buyNow() {
    setBasket((basket) => {
      const updatedBasket = [itemDetails, ...basket];
      return updatedBasket;
    });
  }

  useEffect(() => {
    setItemNotFound(false);
    fetchItemById(item_id)
      .then((item) => {
        setItemDetails(item);
      })
      .catch((err) => {
        setItemNotFound(true);
      });
  }, []);

  const itemPageContent = (
    <div className="page-content item-page">
      <h2>{item_name}</h2>
      <p className="item-page__category">Category: {category_name}</p>
      <img src={img_url} className="item-page__image"></img>
      <p className="item-page__price">£{price}</p>
      <p>{description}</p>
      <button className="item-page__button" onClick={addToBasket}>
        Add To Basket
      </button>
      <Link to="/checkout">
        <button className="item-page__button" onClick={buyNow}>
          Buy Now
        </button>
      </Link>
    </div>
  );

  return <>{itemNotFound ? itemNotFoundError : itemPageContent}</>;
}

export default ItemPage;
