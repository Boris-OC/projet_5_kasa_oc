import React from 'react';
import './style.scss'; // Assurez-vous que le chemin du fichier SCSS est correct

export default function Card({ image, title }) {
  console.log("Card props:", { image, title }); // Vérification des valeurs des props

  return (
    <article className="card-logement">
      {/* Vérification de l'image */}
      <img src={image} alt={title} className="card-img" />
      
      <div className="card-logement__layer">
        <h2 className="card-logement__title">{title}</h2>
      </div>
    </article>
  );
}
