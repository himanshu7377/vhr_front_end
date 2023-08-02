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
      <div className="popup-slideshow-close" onClick={onClose}>
        &times;
      </div>
      <ImageGallery
        items={imageList}
        startIndex={selectedIndex}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    </div>
  );
};

export default PopupSlideshow;
