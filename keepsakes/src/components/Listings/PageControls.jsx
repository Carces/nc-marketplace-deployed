import '../../css/listings.css';

function PageControls({ currentPage, setCurrentPage, listings, isLoaded }) {
  const pageOptions = ['Previous', currentPage, 'Next'];

  const pageOptionsHTML = pageOptions.map((option) => {
    console.log(isLoaded, ' <<<< IS LOADED');

    if (!isLoaded) {
      console.log(listings, '<<< LISTINGS');
      const currentPageClassName =
        (currentPage === 1 && option === 'Previous') ||
        (currentPage === listings.length / 10 && option === 'Next')
          ? 'page-controls__option page-controls__disabled'
          : 'page-controls__option';

      function handleClick() {
        setCurrentPage(
          option === 'Previous'
            ? currentPage - 1
            : option === 'Next'
            ? currentPage + 1
            : currentPage
        );
      }
      return (
        <p className={currentPageClassName} key={option} onClick={handleClick}>
          {option}
        </p>
      );
    }
  });

  return <div className="page-controls">{pageOptionsHTML}</div>;
}

export default PageControls;
