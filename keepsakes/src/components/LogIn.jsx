import { useContext, useEffect, useState } from 'react';
import { fetchUser } from '../api';
import { CurrentUserContext } from '../contexts/CurrentUser';
import Alert from '@mui/material/Alert';

function LogIn() {
  const [username, setUsername] = useState('fasfa');
  const [userNotFound, setUserNotFound] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  console.log(userNotFound, '<<< U NOT FOUND');
  function validateUsername(event) {
    setUserNotFound(false);
    event.preventDefault();
    fetchUser(username)
      .then((user) => {
        if (!user) setUserNotFound(true);
        // console.log('THEN <<<');
      })
      .catch((err) => {
        // setIsLoading(false);
        // setIsError(true);
        setUserNotFound(true);
        // console.log('CATCH <<<');
      });
  }

  const form = (
    <form className="log-in-form">
      <h1 className="log-in-form__header">New Listing</h1>
      <section id="log-in-form__username-section">
        <input
          id="log-in-form__username-input"
          className="log-in-form__input"
          aria-label="username"
          placeholder="Enter username..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </section>
      <button className="log-in-form__submit-button" onClick={validateUsername}>
        Submit
      </button>
    </form>
  );

  const userNotFoundError = <Alert severity="error">User not found!</Alert>;
  return (
    <div>
      {userNotFound ? userNotFoundError : <></>} {form}
    </div>
  );
}
 
export default LogIn;
