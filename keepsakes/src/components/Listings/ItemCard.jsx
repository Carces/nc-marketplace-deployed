import '../../css/listings.css';
function ItemCard({ listing }) {
  const { item_id, item_name, description, price, img_url, category_name } =
    listing;
  return (
    <li key={item_id} className="item-card">
      <img src={img_url} className="item-card__img" />
      <p className="item-card__text item-card__price">{`£${price}`}</p>
      <h1 className="item-card__header">{item_name}</h1>
      <p className="item-card__text">{category_name}</p>
      <p className="item-card__text">{description}</p>
    </li>
  );
}

export default ItemCard;
