import React from 'react';
import Nav from "../Nav";
import logo from '../../assets/LOGO.png';

export default function Header() {
	return (
		<header className="headerWrap">
			<figure className="headerWrap__fig">
				<img className="logo" src={logo} alt="logo de l'agence kasa" />
			</figure>
			<Nav className="nav-header" />
		</header>
	);
}
