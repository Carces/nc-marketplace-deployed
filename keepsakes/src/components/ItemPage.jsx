import {fetchItemById} from "../api";
import { BasketContext } from "../contexts/Basket";
import Alert from "@mui/material/Alert";
import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

function ItemPage() {
  const [itemDetails, setItemDetails] = useState('');
  const { setBasket } = useContext(BasketContext);
  const [itemNotFound, setItemNotFound] = useState(false)
  const successfulBasketAdd = <Alert severity="success">Added To Basket</Alert>
  const itemNotFoundError = <Alert severity="error">Item not found</Alert>
  const { item_id } = useParams();
  const {item_name, description, price, category_name, img_url} = itemDetails;

  useEffect(() => {
    setItemNotFound(false)
    fetchItemById(item_id)
    .then((item) => {
      setItemDetails(item)
      console.log(item)
    })
    .catch(err => {
      console.log(err);
      setItemNotFound(true);
    })
  }, [])

  const itemPageContent = (
    <div className="page-content">
      <h2>{item_name}</h2>
      <p>{category_name}</p>
      <img src={img_url} className="item-page__image"></img>
      <p>{description}</p>
      <p>£{price}</p>
    </div>
  );

  return (
    <>
      {itemNotFound ? itemNotFoundError : itemPageContent}
    </>
  );
}

export default ItemPage;
