

import React from 'react';

const PhotoCard = ({ photo, onClick }) => {
  return (
    <div className="photo-card" onClick={onClick}>
      <div className="photo-image">
        <img src={photo.imageUrl} alt={`Photo ${photo._id}`} />
      </div>
      <div className="photo-info">
        <h3>{photo.title}</h3>
        <p>{photo.description}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
