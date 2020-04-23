import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ createBootcamp, user }) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">
          <i className="material-icons"></i>Bootcamper
        </a>
        <ul className="right hide-on-med-and-down">
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

          {!user ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <li onClick={() => localStorage.removeItem('JWT_TOKEN')}>
              <Link to="/login">Logout</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
