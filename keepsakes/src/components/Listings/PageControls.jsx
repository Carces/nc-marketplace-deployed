import '../../css/listings.css';
import { fetchListingsLength } from '../../api';
import { useEffect, useState } from 'react';

function PageControls({ currentPage, setCurrentPage, searchOptions }) {
  const [totalItems, setTotalItems] = useState(null);

  useEffect(() => {
    fetchListingsLength(searchOptions).then((length) => {
      setTotalItems(length);
    });
  }, [searchOptions]);

  const pageOptions = ['Previous', currentPage, 'Next'];

  const pageOptionsHTML = pageOptions.map((option) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage > totalItems / 10;

    const currentPageClassName =
      (isFirstPage && option === 'Previous') ||
      (isLastPage && option === 'Next')
        ? 'page-controls__option page-controls__disabled'
        : 'page-controls__option';

    const handleClick =
      (isFirstPage && option === 'Previous') ||
      (isLastPage && option === 'Next')
        ? () => null
        : () =>
            setCurrentPage(
              option === 'Previous'
                ? currentPage - 1
                : option === 'Next'
                ? currentPage + 1
                : currentPage
            );

    return (
      <p className={currentPageClassName} key={option} onClick={handleClick}>
        {option}
      </p>
    );
  });

  return <div className="page-controls">{pageOptionsHTML}</div>;
}

export default PageControls;
