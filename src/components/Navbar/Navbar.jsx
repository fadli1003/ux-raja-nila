/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images'

import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => { setIsOpen(false); };

  useEffect (() => {
    const handleClickOutSide = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) { document.addEventListener('mousedown', handleClickOutSide); }
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className='nav_logo'>
        <a href="#home">
        <img src={images.gericht} alt="app logo" />
        </a>
      </div>
      <ul className="app_nav-links">
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar_login">
        <a href="#login" className="p__opensans">Login</a>
        <div />
        <a href="#Book" className="p__opensans">Book Table</a>
      </div>
      <div className="navbar_smallScreen" ref={menuRef}>
        <GiHamburgerMenu color='#fff' fontSize={27} cursor={'pointer'} 
          onClick={() => setIsOpen(!isOpen)} aria-label='Toggle menu' className='menu-icon'/>
        
        {isOpen && (
          <div className="nav_SC_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={closeMenu} />
            <ul className="nav-SC_links">
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#about">About</a></li>
              <li className='p__opensans'><a href="#menu">Menu</a></li>
              <li className='p__opensans'><a href="#awards">Awards</a></li>
              <li className='p__opensans'><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
)};

export default Navbar;