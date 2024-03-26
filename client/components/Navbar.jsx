import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className='navBarContainer'>
        <ul className='navBarList'>
          <li className='navigationLinks'><Link to="/homepage" className='text-white'><strong>Home</strong></Link></li>
          <li className='navigationLinks'><Link to="/about" ><strong>About</strong></Link></li>
          <li className='navigationLinks'><Link to="/contact"><strong>Contact</strong></Link></li>
          <li className='navigationLinks'><Link to="/games"><strong>Games</strong></Link></li>
          <li className='navigationLinks'><Link to="/"><strong>Logout</strong></Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;