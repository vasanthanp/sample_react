import React from "react";

const NavBarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <a className="nav-link" href="#">
              Search
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Admin
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Attacker
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBarComponent;
