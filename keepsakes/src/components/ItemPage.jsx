import { fetchItemById, postBasketItem } from '../api';
import { BasketContext } from '../contexts/Basket';
import { CurrentUserContext } from '../contexts/CurrentUser';
import Alert from '@mui/material/Alert';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import '../css/item-page.css';

function ItemPage() {
  const [itemDetails, setItemDetails] = useState('');
  const { basket, setBasket } = useContext(BasketContext);
  const { currentUser } = useContext(CurrentUserContext);
  const [itemNotFound, setItemNotFound] = useState(false);
  const [itemAlreadyInBasket, setItemAlreadyInBasket] = useState(false);
  const [itemIsAdded, setItemIsAdded] = useState(false);
  const { item_id } = useParams();
  const { item_name, description, price, category_name, img_url } = itemDetails;
  const loggedInUsername = !currentUser ? null : currentUser.username;
  const navigate = useNavigate();

  function addToBasket() {
    setItemIsAdded(false);
    setItemAlreadyInBasket(false);
    if (basket.some((item) => item.item_id === +item_id))
      setItemAlreadyInBasket(true);
    else {
      if (loggedInUsername) postBasketItem(item_id, loggedInUsername);
      setBasket((basket) => {
        setItemIsAdded(true);
        const updatedBasket = [itemDetails, ...basket];
        return updatedBasket;
      });
    }
  }

  function buyNow() {
    setItemAlreadyInBasket(false);
    if (basket.some((item) => item.item_id === +item_id)) {
      setItemAlreadyInBasket(true);
      setItemIsAdded(false);
    } else {
      setBasket((basket) => {
        const updatedBasket = [itemDetails, ...basket];
        return updatedBasket;
      });
      navigate('/checkout');
    }
  }

  useEffect(() => {
    setItemNotFound(false);
    fetchItemById(item_id)
      .then((item) => setItemDetails(item))
      .catch((err) => setItemNotFound(true));
  }, [item_id]);

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
      <button className="item-page__button" onClick={buyNow}>
        Buy Now
      </button>
    </div>
  );

  const successfulBasketAdd = (
    <Alert severity="success" className="item-page__success">
      Item added to basket
    </Alert>
  );
  const itemNotFoundError = (
    <Alert severity="error" className="item-page__error">
      Item not found
    </Alert>
  );

  const itemAlreadyInBasketError = (
    <Alert severity="error" className="item-page__error">
      Item is already in your basket
    </Alert>
  );

  return (
    <>
      {itemIsAdded
        ? successfulBasketAdd
        : itemAlreadyInBasket
        ? itemAlreadyInBasketError
        : null}
      {itemNotFound ? itemNotFoundError : itemPageContent}
    </>
  );
}

export default ItemPage;
