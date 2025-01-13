import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Periótico</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/allarticles">All Articles</Link></li>
          <li><Link to="/culture">Culture</Link></li>
          <li><Link to="/lifestyle">Lifestyle</Link></li>
          <li><Link to="/people">People</Link></li>
          <li><Link to="/technology">Technology</Link></li>
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
