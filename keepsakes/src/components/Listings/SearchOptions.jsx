import { useState } from 'react';

function SearchOptions({ setSearchOptions }) {
  const [searchOrderBy, setSearchOrderBy] = useState(null);
  // ... other local states for inputs

  return <p>Search Options</p>;
}

export default SearchOptions;
