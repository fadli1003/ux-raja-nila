import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title='Contact' />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">temukan kami di jl. panam raya depan rumah sakit Awal bros panam. Atau cek dengan google di http//:raja_nila_panam</p>
        <p className="p__cormorant" style={{color: '#DCCA87', margin: '2rem 0'}}>Opening Hours</p> 
        <p className="p__opensans">senin-jum'at: 10.00 - 21.00 WIB</p>
        <p className="p__opensans">senin-jum'at: 10.00 - 21.00 WIB</p>
      </div>
      <button className="custom__button" style={{marginTop: '2rem'}}>Kunjungi Kami</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
