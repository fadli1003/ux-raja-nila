import React from 'react';
import { BsInstagram, BsArrowLeft, BsArrowRight, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Gallery.css';

const GalleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {

  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const {current} = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }    

  return (
  <div className='gallery flex__center'>
    <div className="gallery-content">
      <SubHeading title="Instagram" />
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="gallery_info" style={{color: '#AAA', marginTop: '2rem'}}>Anda dapat melihat lebih banyak tentang restorant kami melalui akun instagram @raja_nila dan akun tiktok kami @rajaNila_lover.</p>
      <button type='button' className="custom__button" style={{marginTop: '1.5rem'}}>View More</button>
    </div>

    <div className="gallery-img">
      <div className="img-container" ref={scrollRef}>
        {GalleryImages.map((image, index) => (
          <div className="img-card flex__center" key={`gallery_image-${index + 1}`}>
            <img src={image} alt="gallery" />
            <BsInstagram className="img-ig" />
          </div>
        ))}
      </div>
      <div className="img_arrow">
        <BsArrowLeftShort className="arrow-icon" onClick={() => scroll('left')}/>          
        <BsArrowRightShort className="arrow-icon" onClick={() => scroll('right')}/>
      </div>
    </div>
  </div>
  );
}
export default Gallery;
