import { useEffect, useState } from 'react';
import ItemCard from './Listings/ItemCard';
import PageControls from './Listings/PageControls';
import SearchOptions from './Listings/SearchOptions';
import { fetchListings } from '../api';
import '../css/listings.css';

function Listings() {
  const [searchOptions, setSearchOptions] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [listings, setListings] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  if (listings[0]) setIsLoaded(true);

  useEffect(() => {
    setIsLoaded(false);
    fetchListings(searchOptions, currentPage).then((items) => {
      setListings(items);
    });
  }, [searchOptions, currentPage]);

  return (
    <div className="page-content listings">
      <SearchOptions />
      <ul className="listings__list">
        {listings.map((listing) => (
          <ItemCard listing={listing} key={listing.item_id} />
        ))}
      </ul>
      <PageControls
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        listing={listings}
        isLoaded={isLoaded}
      />
    </div>
  );
}

export default Listings;
