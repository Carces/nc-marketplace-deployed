import { useContext, useState } from 'react';
import { postUser } from '../api';
import { CurrentUserContext } from '../contexts/CurrentUser';
import Alert from '@mui/material/Alert';
import '../css/forms.css';

function LogIn() {
  const [newUsername, setNewUsername] = useState('');
  const [newAvatarURL, setNewAvatarURL] = useState('');
  const [isError, setIsError] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const loggedInUsername = !currentUser ? null : currentUser.username;

  function createAccount(event) {
    event.preventDefault();
    setIsError(false);
    setAccountCreated(false);
    const newUser = { username: newUsername, avatar_url: newAvatarURL };
    postUser(newUser)
      .then((postedUser) => {
        setCurrentUser(postedUser);
        setAccountCreated(true);
      })
      .catch((err) => {
        setIsError(true);
      });
  }

  const form = (
    <form className="page-content sign-up-form">
      <h1 className="sign-up-form__header">Create Account</h1>
      <section id="sign-up-form__username-section">
        <input
          id="sign-up-form__username-input"
          className="sign-up-form__input"
          aria-label="username"
          placeholder="Enter username..."
          value={newUsername}
          onChange={(event) => setNewUsername(event.target.value)}
        />
      </section>
      <section id="sign-up-form__avatar-url-section">
        <input
          id="sign-up-form__avatar-url-input"
          className="sign-up-form__input"
          aria-label="avatar image url"
          placeholder="Enter the URL of your avatar image..."
          value={newAvatarURL}
          onChange={(event) => setNewAvatarURL(event.target.value)}
        />
      </section>
      <button className="sign-up-form__submit-button" onClick={createAccount}>
        Submit
      </button>
    </form>
  );

  const accountCreationError = (
    <Alert severity="error" className="sign-up__error">
      Account creation failed!
    </Alert>
  );

  const signUpConfirmation = (
    <div className="page-content sign-up__confirmation">
      <h1>New account created!</h1>
      <p className="page-content__text">
        Welcome to Keepsakes, {loggedInUsername}!
      </p>
    </div>
  );

  return (
    <div>
      {isError ? accountCreationError : <></>}{' '}
      {accountCreated ? signUpConfirmation : form}
    </div>
  );
}

export default LogIn;
