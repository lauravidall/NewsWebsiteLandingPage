import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">News</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">All Articles</Link></li>
          <li><Link to="/">Culture</Link></li>
          <li><Link to="/">Lifestyle</Link></li>
          <li><Link to="/">People</Link></li>
          <li><Link to="/">Technology</Link></li>
        </ul>
      </nav>
      <div className="right-buttons">
        <button>About</button>
        <button>Subscribe</button>
      </div>
    </header>
  );
}

export default Header;
