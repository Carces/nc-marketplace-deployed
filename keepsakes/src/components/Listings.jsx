import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ItemCard from './Listings/ItemCard';
import PageControls from './Listings/PageControls';
import SearchOptions from './Listings/SearchOptions';
import { fetchListings } from '../api';
import '../css/listings.css';

function Listings() {
  const [searchOptions, setSearchOptions] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [listings, setListings] = useState([]);
  const [searchParams] = useSearchParams();
  const categoryNameFromURL = searchParams.get('category_name');
  const searchTermFromURL = searchParams.get('search');

  useEffect(() => {
    setSearchOptions({
      ...searchOptions,
      category_name: categoryNameFromURL,
      search: searchTermFromURL,
    });
  }, [searchParams]);

  useEffect(() => {
    fetchListings(searchOptions, currentPage).then((items) => {
      if (
        !categoryNameFromURL ||
        items.every((item) => item.category_name === categoryNameFromURL)
      )
        setListings(items);
    });
  }, [searchOptions, currentPage]);

  return (
    <div className="listings">
      <SearchOptions />
      <h1 className="listings__category-name">
        {!searchOptions
          ? 'Category: All'
          : searchOptions.category_name
          ? `Category: ${searchOptions.category_name}`
          : 'Category: All'}
      </h1>
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
