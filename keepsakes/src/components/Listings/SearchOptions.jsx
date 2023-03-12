import { useEffect, useState } from 'react';
import '../../css/search-options.css';

function SearchOptions({ searchOptions, setSearchOptions }) {
  const [sortAndOrder, setSortAndOrder] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    if (searchOptions) {
      if (searchOptions.category_name)
        setCategoryName(searchOptions.category_name);
    }
  }, [searchOptions]);

  function handleSubmit(event) {
    event.preventDefault();
    const updatedSearchOptions = { ...searchOptions };

    if (categoryName === 'All') delete updatedSearchOptions.category_name;
    else if (categoryName) updatedSearchOptions.category_name = categoryName;

    if (minPrice) updatedSearchOptions.min_price = minPrice;
    if (maxPrice) updatedSearchOptions.max_price = maxPrice;
    if (sortAndOrder === 'Relevance') {
      delete updatedSearchOptions.sort_by;
      delete updatedSearchOptions.order;
    }
    if (sortAndOrder === 'Price (high)') {
      updatedSearchOptions.sort_by = 'price';
      updatedSearchOptions.order = 'desc';
    }
    if (sortAndOrder === 'Price (low)') {
      updatedSearchOptions.sort_by = 'price';
      updatedSearchOptions.order = 'asc';
    }
    setSearchOptions(updatedSearchOptions);
  }

  return (
    <form className="search-options" onSubmit={handleSubmit}>
      <section id="search-options__category">
        <label
          htmlFor="search-options__category-select"
          className="search-options__label"
        >
          Category
        </label>
        <select
          id="search-options__category-select"
          className="search-options__input search-options__select"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Household">Household</option>
        </select>
      </section>
      <section id="search-options__sort">
        <label
          htmlFor="search-options__sort-select"
          className="search-options__label"
        >
          Sort By
        </label>
        <select
          id="search-options__sort-select"
          className="search-options__input search-options__select"
          value={sortAndOrder}
          onChange={(event) => setSortAndOrder(event.target.value)}
        >
          <option value="Relevance">Relevance</option>
          <option value="Price (high)">Price (high)</option>
          <option value="Price (low)">Price (low)</option>
        </select>
      </section>
      <section id="search-options__min-price">
        <label
          htmlFor="search-options__min-price-input"
          className="search-options__label"
        >
          From (£)
        </label>
        <input
          id="search-options__min-price-input"
          className="search-options__input search-options__price"
          type="number"
          min="1"
          step="1"
          value={minPrice}
          onChange={(event) => setMinPrice(event.target.value)}
        ></input>
      </section>
      <section id="search-options__max-price">
        <label
          htmlFor="search-options__max-price-input"
          className="search-options__label"
        >
          To (£)
        </label>
        <input
          id="search-options__max-price-input"
          className="search-options__input search-options__price"
          type="number"
          min="1"
          step="1"
          value={maxPrice}
          onChange={(event) => setMaxPrice(event.target.value)}
        ></input>
      </section>
      <button className="search-options__button">Search</button>
    </form>
  );
}

export default SearchOptions;
