import React, { useState } from 'react';
import Quotes from './Quotes'
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { MenuItem } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faBullseye, faSignOut, faPlay} from '@fortawesome/free-solid-svg-icons'

function Navbar() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl)
  
  //sets the anchor element --> where the menu will drop down from
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }
  

  return (
    <nav className='flex w-full bg-gray-500'>
      <div className='flex w-full h-12 justify-between m-2'>
        <div className='flex flex-col w-11/12'>
          <h1 className='text-xl text-white text-center'>VEKTOR</h1>
          <h3><Quotes/></h3>
        </div>
        <div className='flex'>
          <Avatar className='justify-end w-1/12'alt='userProfile' src='https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_640.jpg'onClick={handleClick}/>
          <Menu anchorEl={anchorEl} open= {open} onClose={handleClose}>
            <Link><MenuItem onClick={handleClose}><FontAwesomeIcon icon={faBullseye} className='pr-2'/>Personal Goals</MenuItem></Link>
            <Link><MenuItem onClick={handleClose}><FontAwesomeIcon icon={faPlay} className='pr-2'/>Games</MenuItem></Link>
            <Link><MenuItem onClick={handleClose}><FontAwesomeIcon icon={faGear} className='pr-2'/>Settings</MenuItem></Link>
            <Link to='/'><MenuItem onClick={handleClose}><FontAwesomeIcon icon={faSignOut} className='pr-2'/>Logout</MenuItem></Link>
          </Menu>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 