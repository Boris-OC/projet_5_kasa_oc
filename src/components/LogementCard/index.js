import React from 'react';
import { Link } from 'react-router-dom';

const LogementCard = ({ logement }) => {
  return (
    <div className="logement-card">
      <Link to={`/logement/${logement.id}`}>
        <img src={logement.cover} alt={logement.title} className="logement-img" />
        <div className="logement-info">
          <h3>{logement.title}</h3>
          <p>{logement.location}</p>
        </div>
      </Link>
    </div>
  );
};

export default LogementCard;
