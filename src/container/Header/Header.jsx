import React from 'react';

import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title='Chase the new flavour'/>
      <h1 className="header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>
      <button type='button' className='custom__button'>Explore Menu</button>
      
      </p>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
