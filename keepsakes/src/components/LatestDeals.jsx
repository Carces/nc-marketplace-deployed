import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchLatestDeals, fetchItemIDs } from '../api';
import '../css/latest-deals.css';

function LatestDeals() {
  const [latestDeals, setLatestDeals] = useState([]);
  const [itemIDs, setItemIDs] = useState([]);
  const randomItemID = itemIDs.length ? getRandomItemID() : 0;

  function displayDeals(items) {
    const shuffled = items.sort(() => 0.5 - Math.random());
    const selectedItems = shuffled.slice(0, 5);
    setLatestDeals(selectedItems);
  }

  function getRandomItemID() {
    const randomIndex = Math.floor(Math.random() * itemIDs.length);
    return itemIDs[randomIndex];
  }

  useEffect(() => {
    fetchItemIDs()
      .then((fetchedItemIDs) => setItemIDs(fetchedItemIDs))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    let intervalId = null;
    fetchLatestDeals()
      .then((items) => {
        displayDeals(items);
        intervalId = setInterval(() => {
          displayDeals(items);
        }, 10000);
      })
      .catch((error) => console.error(error));
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="latest-deals">
        <h1 className="latest-deals__page-header">Latest Deals</h1>
        <ul className="latest-deals__list">
          {latestDeals.map((item) => (
            <Link to={`/items/${item.item_id}`} key={item.item_id}>
              <li className="latest-deals__item">
                <img
                  src={item.img_url}
                  alt={item.item_name}
                  className="latest-deals__img"
                />
                <p className="latest-deals__price">£{item.price}</p>
                <h2 className="latest-deals__header">{item.item_name}</h2>
                <p className="latest-deals__description">{item.description}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="categories">
        <h2 className="categories__header">Categories</h2>
        <ul className="categories__list">
          <Link to="/items">
            <li key="all" className="categories__list-item">
              <p className="categories__text">All</p>
              <img
                className="categories__img"
                alt="a general item"
                src="https://images.unsplash.com/photo-1484606067694-f2f9b209a225?fit=crop&w=600&h=600&q=80"
              />
            </li>
          </Link>
          <Link to="/items?category_name=Electronics">
            <li key="electronics" className="categories__list-item">
              <p className="categories__text">Electronics</p>
              <img
                className="categories__img"
                alt="an electronics item"
                src="https://images.unsplash.com/photo-1599933190257-ade62d308472?fit=crop&w=600&h=600&q=80"
              />
            </li>
          </Link>
          <Link to="/items?category_name=Clothing">
            <li key="clothing" className="categories__list-item">
              <p className="categories__text">Clothing</p>
              <img
                className="categories__img"
                alt="a clothing item"
                src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?fit=crop&w=600&h=600&q=80,"
              />
            </li>
          </Link>
          <Link to="/items?category_name=Household">
            <li key="household" className="categories__list-item">
              <p className="categories__text">Household</p>
              <img
                className="categories__img"
                alt="a household item"
                src="https://images.unsplash.com/photo-1519612632649-158aa883572a?fit=crop&w=600&h=600&q=80"
              />
            </li>
          </Link>
        </ul>
      </div>
      <div className="actions">
        <Link to="/new-listing">
          <button className="actions__button">New Listing</button>
        </Link>
        <Link to={`/items/${randomItemID}`}>
          <button className="actions__button">Random Item</button>
        </Link>
      </div>
    </>
  );
}

export default LatestDeals;
