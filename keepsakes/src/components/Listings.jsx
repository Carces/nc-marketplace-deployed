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
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const categoryNameFromURL = searchParams.get('category_name');
  const searchTermFromURL = searchParams.get('search');

  console.log(searchOptions);

  useEffect(() => {
    console.log('<< UE 1 >>');
    if (searchTermFromURL || categoryNameFromURL) {
      setCurrentPage(1);
      setSearchOptions((currentSearchOptions) => ({
        ...currentSearchOptions,
        category_name:
          categoryNameFromURL === 'All' ? null : categoryNameFromURL,
        search: searchTermFromURL,
      }));
    }
  }, [categoryNameFromURL, searchTermFromURL]);

  useEffect(() => {
    console.log('<< UE 2 >>');
    fetchListings(searchOptions, currentPage).then((items) => {
      console.log(items, ' <<<<<< SETTING');
      setListings(items);
    });
  }, [searchOptions, currentPage]);

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
