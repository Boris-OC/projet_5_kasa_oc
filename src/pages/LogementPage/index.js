import React from 'react';
import { useParams } from 'react-router-dom';
import logementsData from '../../data/logements.json';
import LogementCard from '../../components/LogementCard'; // Assurez-vous que LogementCard est bien importé

function LogementPage() {
  const { id } = useParams(); // Utilisation de useParams pour récupérer l'ID du logement depuis l'URL
  const logement = logementsData.find((logement) => logement.id === id); // Recherche du logement par son ID

  if (!logement) {
    return <h2>Logement non trouvé</h2>; // Si le logement n'est pas trouvé, afficher un message
  }

  return <LogementCard logement={logement} />; // Retourne le composant LogementCard avec les détails du logement
}

export default LogementPage;
