import React from 'react';

import { images } from '../../constants';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className='footer section__padding'>
    <FooterOverlay />
    <Newsletter className='newsletter'/>
    <div className="footer-links">
      <div className="footer-links_contact">
        <h1 className="footer-headtext">Contact Us</h1>
        <p className="p__opensans">Jl. panam raya, no.20, depan rs. awal bros, pekanbaru, riau</p>
        <p className="p__opensans">wa: 089876543212</p>
        <p className="p__opensans">tlp: +62 89876543212</p>
      </div>
      <div className="footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">"The best place for yourself is the one you feel like home."</p>
        <img src={images.spoon} alt="spoon__img" className="spoon-img" style={{ marginTop: '15px' }} />
        <div className="footer-links_icons">
          <FiInstagram />
          <FiFacebook />          
          <FiTwitter />
        </div>
      </div>
      <div className="footer-links_work">
        <h1 className="footer-headtext">Working Hours</h1>
        <p className="p__opensans">senin - jum'at:</p>
        <p className="p__opensans">10.00 - 21.00 WIB</p>
        <p className="p__opensans">sabtu - minggu:</p>
        <p className="p__opensans">09.00 - 22.00 WIB</p>
      </div>
    </div>
    <div className="copyright">
      <p className='p__opensans'>©2025 <a href="#home">Gericht.</a> All right reserved.</p>
    </div>    
  </div>
);

export default Footer;
