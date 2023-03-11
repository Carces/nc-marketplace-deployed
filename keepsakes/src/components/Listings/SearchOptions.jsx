import { useState } from 'react';

function SearchOptions({ searchOptions, setSearchOptions }) {
  const [searchOrderBy, setSearchOrderBy] = useState(null);
  // ... other local states for inputs

  return <p>Search Options</p>;
}

export default SearchOptions;
