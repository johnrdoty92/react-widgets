import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#home">
          Navbar{" "}
          <span className="badge bagde-pill badge-secondary">
            {props.total}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
