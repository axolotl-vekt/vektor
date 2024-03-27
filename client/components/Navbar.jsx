import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='flex w-full bg-slate-500'>
      <ul className='flex w-full h-10 justify-between pr-4 pl-4'>
        <li className='navBarLinks'><Link to="/homepage" className='underlineHover'>Home</Link></li>
        <li className='navBarLinks'><Link to="/about" className='underlineHover'>About</Link></li>
        <li className='navBarLinks'><Link to="/contact" className='underlineHover'>Contact</Link></li>
        <li className='navBarLinks'><Link to="/games" className='underlineHover'>Games</Link></li>
        <li className='navBarLinks'><Link to="/" className='.navBarLinks underlineHover'>Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 