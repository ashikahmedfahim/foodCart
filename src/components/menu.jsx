import React from "react";

const NavBar = ({ totalCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="h">
        SHOPPING CART
        <span className="badge m-2 bg-warning">
          Total no of item(s): ({totalCount})
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

