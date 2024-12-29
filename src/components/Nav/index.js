// src/components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';  // Assurez-vous que cette ligne est présente

export default function Nav() {
	return (
		<nav className="nav-header">
			<Link to="/" className="nav-header_link-home">
				Accueil
			</Link>
			<Link to="/about" className="nav-header_link-about">
				A Propos
			</Link>
		</nav>
	);
}