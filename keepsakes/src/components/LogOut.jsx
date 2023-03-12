import { CurrentUserContext } from '../contexts/CurrentUser';
import { BasketContext } from '../contexts/Basket';
import { useEffect, useContext } from 'react';

function LogOut({ setBasketsAlreadyCombined }) {
  useEffect(() => {
    logOut();
  }, []);
  const { setCurrentUser } = useContext(CurrentUserContext);
  const { setBasket } = useContext(BasketContext);

  function logOut() {
    setCurrentUser(null);
    setBasket([]);
    setBasketsAlreadyCombined(false);
  }
  return (
    <div className="page-content log-out">
      <h1>Logged Out</h1>
      <p className="page-content__text">Sorry to see you go!</p>
    </div>
  );
}

export default LogOut;
