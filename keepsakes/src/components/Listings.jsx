import { useState } from 'react';
import ItemCard from './Listings/ItemCard';
import PageControls from './Listings/PageControls';
import SearchOptions from './Listings/SearchOptions';

function Listings() {
  const [searchOptions, setSearchOptions] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [listings, setListings] = useState(null);

  return <p>Listings</p>;
}

export default Listings;
