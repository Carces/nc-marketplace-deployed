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

  useEffect(() => {
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
        searchOptions={searchOptions}
      />
    </div>
  );
}

export default Listings;
