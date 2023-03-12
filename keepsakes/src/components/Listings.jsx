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

  // if (!categoryNameFromURL) {
  //   const updatedSearchOptions = { ...searchOptions };
  //   delete updatedSearchOptions.category_name;
  //   setSearchOptions(updatedSearchOptions);
  // }

  useEffect(() => {
    if (searchTermFromURL || categoryNameFromURL) {
      setCurrentPage(1);
      setSearchOptions((currentSearchOptions) => ({
        ...currentSearchOptions,
        category_name: categoryNameFromURL,
        search: searchTermFromURL,
      }));
    }
  }, [categoryNameFromURL, searchTermFromURL]);

  useEffect(() => {
    fetchListings(searchOptions, currentPage).then((items) => {
      setListings(items);
    });
  }, [searchOptions, currentPage, categoryNameFromURL]);

  return (
    <div className="listings">
      <SearchOptions
        searchOptions={searchOptions}
        setSearchOptions={setSearchOptions}
      />
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
