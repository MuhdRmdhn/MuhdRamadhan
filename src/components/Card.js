import React from 'react';
import './Card.css';

const Card = ({ logo, title, content }) => {
  return (
    <div className="card">
      {logo && <img src={logo} alt={title} className="company-logo" />}
      <h2 className="card-title">{title}</h2>
      <div className="card-content">{content}</div>
    </div>
  );
};

export default Card;