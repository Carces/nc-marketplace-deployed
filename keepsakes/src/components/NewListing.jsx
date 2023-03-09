import { useState, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUser';
import LogIn from './LogIn';

function NewListing() {
  const { currentUser } = useContext(CurrentUserContext);
  const [newListingName, setNewListingName] = useState('');
  const [newListingDescription, setNewListingDescription] = useState('');
  const [newListingPrice, setNewListingPrice] = useState('');
  const [newListingImgURL, setNewListingImgURL] = useState('');
  const [newListingCategory, setNewListingCategory] = useState('');

  const form = (
    <form className="new-listing-form">
      <h1 className="new-listing-form__header">New Listing</h1>
      <section id="new-listing-form__name-section">
        <input
          id="new-listing-form__name-input"
          className="new-listing-form__input"
          aria-label="name"
          placeholder="Enter item name..."
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
          value={newListingDescription}
          onChange={(event) => setNewListingDescription(event.target.value)}
        />
      </section>
      <section id="new-listing-form__price-section">
        <input
          id="new-listing-form__price-input"
          className="new-listing-form__input new-listing-form__textarea"
          aria-label="message"
          placeholder="Enter item price..."
          type="number"
          value={newListingPrice}
          onChange={(event) => setNewListingPrice(event.target.value)}
        />
      </section>
      <button className="new-listing-form__submit-button">Submit</button>
    </form>
  );

  const logIn = <LogIn />;
  return currentUser ? form : logIn;
}

export default NewListing;
