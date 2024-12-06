import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logementsData from './data/logements.json';
import './App.css';
import { useParams } from 'react-router-dom';

// Composant pour afficher un logement avec ses détails
function LogementCard({ logement }) {
  return (
    <div className="logement-card">
      <h2>{logement.title}</h2>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
      <p><strong>Hôte : </strong>{logement.host.name}</p>
      <p><strong>Note : </strong>{logement.rating}</p>
      <p><strong>Location : </strong>{logement.location}</p>
      <ul>
        {logement.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    </div>
  );
}

// Page d'accueil avec la liste des logements
function HomePage() {
  return (
    <div>
      <h2>Nos Logements</h2>
      <div className="logement-list">
        {logementsData.map((logement) => (
          <div key={logement.id}>
            <h3>{logement.title}</h3>
            <Link to={`/logement/${logement.id}`}>
              <img src={logement.cover} alt={logement.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Page détaillée d'un logement
function LogementPage() {
  const { id } = useParams(); // Utilisation de useParams pour récupérer l'ID du logement depuis l'URL
  const logement = logementsData.find((logement) => logement.id === id); // Recherche du logement par son ID

  if (!logement) {
    return <h2>Logement non trouvé</h2>; // Si le logement n'est pas trouvé, afficher un message
  }

  return <LogementCard logement={logement} />; // Retourne le composant LogementCard avec les détails du logement
}

// Page 404 (par défaut)
function NotFoundPage() {
  return <h2>Page 404 - La route n'existe pas</h2>;
}

// Composant principal avec configuration des routes
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Liste des Logements</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/logement/:id" element={<LogementPage />} />
            <Route path="*" element={<NotFoundPage />} /> {/* Affiche la page 404 si la route n'existe pas */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
