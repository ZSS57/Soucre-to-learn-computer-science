
import React from 'react';
import './Source.css'; 

const Source = ({ name, description, img, link }) => {
  return (
    <div className="source-card">
      <img src={img} alt={name} className="source-img" />
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button>Visit {name}</button>
      </a>
    </div>
  );
};

export default Source;

