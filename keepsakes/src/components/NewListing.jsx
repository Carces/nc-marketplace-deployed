import { useState, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUser';
import LogIn from './LogIn';
import Alert from '@mui/material/Alert';
import { postItem } from '../api';

function NewListing() {
  const { currentUser } = useContext(CurrentUserContext);
  const [newListingName, setNewListingName] = useState('');
  const [newListingDescription, setNewListingDescription] = useState('');
  const [newListingPrice, setNewListingPrice] = useState('');
  const [newListingImgURL, setNewListingImgURL] = useState('');
  const [newListingCategory, setNewListingCategory] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleSubmit(event) {
    setIsError(false);
    event.preventDefault();

    const itemObject = {
      item_name: newListingName,
      description: newListingDescription,
      img_url: newListingImgURL,
      price: newListingPrice,
      category_name: newListingCategory,
    };
    console.log(itemObject, '<<<< ITEM OBJ NL');
    postItem(itemObject)
      .then(() => {
        setIsSuccessful(true);
      })
      .catch((err) => {
        console.log(err, '<<<< ERR CATCH');
        setIsError(true);
      });
  }

  const newListingSuccess = (
    <div className="new-listing__success">
      <Alert severity="success">Item Listed Successfully</Alert>
    </div>
  );
  const newListingError = (
    <div className="new-listing__error">
      <Alert severity="error">Item Listing Failed</Alert>
    </div>
  );
  const form = (
    <form className="page-content new-listing-form" onSubmit={handleSubmit}>
      <h1 className="new-listing-form__header">New Listing</h1>
      <section id="new-listing-form__name-section">
        <input
          id="new-listing-form__name-input"
          className="new-listing-form__input"
          aria-label="name"
          placeholder="Enter item name..."
          required
          value={newListingName}
          onChange={(event) => setNewListingName(event.target.value)}
        />
      </section>
      <section id="new-listing-form__description-section">
        <input
          id="new-listing-form__description-input"
          className="new-listing-form__input"
          aria-label="description"
          placeholder="Enter item description..."
          required
          value={newListingDescription}
          onChange={(event) => setNewListingDescription(event.target.value)}
        />
      </section>
      <section id="new-listing-form__price-section">
        <input
          id="new-listing-form__price-input"
          className="new-listing-form__input new-listing-form__textarea"
          aria-label="price"
          placeholder="Enter item price..."
          required
          type="number"
          value={newListingPrice}
          onChange={(event) => setNewListingPrice(event.target.value)}
        />
      </section>
      <section id="new-listing-form__img-url-section">
        <input
          id="new-listing-form__img-url-input"
          className="new-listing-form__input new-listing-form__textarea"
          aria-label="image URL"
          placeholder="Enter item image URL..."
          required
          value={newListingImgURL}
          onChange={(event) => setNewListingImgURL(event.target.value)}
        />
      </section>
      <section id="new-listing-form__category-section">
        <input
          id="new-listing-form__category-input"
          className="new-listing-form__input new-listing-form__textarea"
          aria-label="category"
          placeholder="Enter item category..."
          required
          value={newListingCategory}
          onChange={(event) => setNewListingCategory(event.target.value)}
        />
      </section>
      <button className="new-listing-form__submit-button">Submit</button>
    </form>
  );

  const logIn = <LogIn />;
  return (
    <>
      {isError ? newListingError : <></>}
      {isSuccessful ? (
        newListingSuccess
      ) : currentUser ? (
        form
      ) : (
        <>
          <Alert className="new-listing__log-in-warning" severity="warning">
            You must be logged in to list an item
          </Alert>
          {logIn}
        </>
      )}
    </>
  );
}

export default NewListing;
