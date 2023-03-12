import { useState, userContext, useEffect } from "react";
import { fetchLatestDeals } from "../api";
import "../css/latest-deals.css";

function LatestDeals() {
  const [latestDeals, setLatestDeals] = useState([]);

  useEffect(() => {
    fetchLatestDeals()
      .then((data) => {
        const shuffled = data.items.sort(() => 0.5 - Math.random());
        const selectedItems = shuffled.slice(0, 3);
        setLatestDeals(selectedItems);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchLatestDeals()
        .then((data) => {
          const shuffled = data.items.sort(() => 0.5 - Math.random());
          const selectedItems = shuffled.slice(0, 3);
          setLatestDeals(selectedItems);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <p>Latest Deals</p>
      <ul className="latest-deals-container">
        {latestDeals.map((item) => (
          <li key={item.item_id} className="latest-deal">
            <h2>{item.item_name}</h2>
            <img src={item.img_url} />
            <p>{item.description}</p>
            <p>£{item.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default LatestDeals;
