import { useState } from "react";

function NavBar({ currentUser, basket }) {
  const [searchBarContents, setSearchBarContents] = useState(null);
  return (
    <nav className="nav-bar">
      <p>Hello</p>
    </nav>
  )
}

export default NavBar;
