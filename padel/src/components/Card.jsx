import React from 'react';

const Card = ({ image, title, description, children }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} />}
      <div className="card-content">
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;