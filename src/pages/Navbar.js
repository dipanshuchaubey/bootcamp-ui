import React from 'react';

const Navbar = ({ createBootcamp }) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">
          <i className="material-icons"></i>Bootcamper
        </a>
        <ul className="right hide-on-med-and-down">
          {/* <li>
            <a href="#!">
              <i className="material-icons">search</i>
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons">more_vert</i>
            </a>
          </li> */}
          {createBootcamp && (
            <li>
              <a
                className="waves-effect waves-light btn modal-trigger"
                href="#createBootcamp"
              >
                Create New Bootcamp
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
