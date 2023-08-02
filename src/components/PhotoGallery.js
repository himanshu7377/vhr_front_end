// src/components/PhotoGallery.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PopupSlideshow from './PopupSlideshow';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchPhotos(currentPage);
  }, [currentPage]);

  const fetchPhotos = async (page) => {
    try {
      const response = await axios.get(`/api/photos?page=${page}`);
      setPhotos(response.data.photos);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.currentPage);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const openPopup = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closePopup = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  console.log(photos);

  return (
    <div className="photo-gallery">
      <h1>Photo Gallery</h1>
      <div className="photo-list">
        {photos.map((photo, index) => (
          <div key={photo._id} className="photo-item">
            <img
              src={photo.imageUrl}
              alt={`Photo ${index + 1}`}
              onClick={() => openPopup(index)}
            />
          </div>
        ))}
      </div>
      {selectedPhotoIndex !== null && (
        <PopupSlideshow
          images={photos[selectedPhotoIndex].images}
          selectedIndex={selectedPhotoIndex}
          onClose={closePopup}
        />
      )}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>{currentPage}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;
