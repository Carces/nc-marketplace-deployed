import '../../css/listings.css';
import { Link } from 'react-router-dom';

function ItemCard({ listing }) {
  const { item_id, item_name, description, price, img_url, category_name } =
    listing;
  return (
    <li key={item_id} className="item-card">
      <Link to={`/items/${item_id}`}>
        <img src={img_url} alt={item_name} className="item-card__img" />
      </Link>
      <p className="item-card__text item-card__category">{`Category: ${category_name}`}</p>
      <p className="item-card__text item-card__price">{`£${price}`}</p>
      <h2 className="item-card__header">{item_name}</h2>
      <p className="item-card__text">{description}</p>
    </li>
  );
}

export default ItemCard;
