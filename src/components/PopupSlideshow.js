// src/components/PopupSlideshow.js

import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const PopupSlideshow = ({ images, selectedIndex, onClose }) => {
  const imageList = images.map((imageUrl) => ({
    original: imageUrl,
    thumbnail: imageUrl,
  }));

  return (
    <div className="popup-slideshow">
      <div className="popup-content">
        <div className="popup-image-gallery">
          <ImageGallery
            items={imageList}
            startIndex={selectedIndex}
            showFullscreenButton={false}
            showPlayButton={false}
          />
        </div>

        {/* Close Button */}
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default PopupSlideshow;
