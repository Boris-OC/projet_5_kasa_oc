import React, { useState } from 'react';
import ErrorPage from "../../components/ErrorPage";

export default function Error() {
	const [compteur, setCompteur] = useState(0);

	// Fonction pour incrémenter le compteur
	const incrementer = () => {
	  setCompteur(compteur + 1);
	};
	return (
		<><div>
		<p>Compteur: {compteur}</p>
		<button onClick={incrementer}>Incrémenter</button>
	  </div>
			<ErrorPage />
		</>
	);
}