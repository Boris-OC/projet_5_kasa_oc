import React from 'react';
import './style.scss'; 
import homeBanner from '../../assets/banner/homeBanner.png';

function Banniere({ image = homeBanner, texte }) {
  return (
    <div className="banner-container">
			<div className="banner-text-container">
				<div className="banner-text">Chez vous, partout et ailleurs</div>
			</div>
		</div>
	);
}

export default Banniere;
