import React from 'react';
import logementsData from './data/logements.json';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Liste des Logements</h1>
      </header>
      <main>
        {logementsData.map((logement) => (
          <LogementCard key={logement.id} logement={logement} />
        ))}
      </main>
    </div>
  );
}

export default App;
