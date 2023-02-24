import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo-title">
        Math
        <span>
          Magicians
        </span>
      </Link>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/calculator" className="nav-link">
            Calculator
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/quote" className="nav-link">
            Quote
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
