import React from 'react';
import { Link } from 'react-router-dom';
import Banner from "../../components/Banner";
import Card from "../../components/Cards"; 
import homeBanner from "../../assets/banner/homeBanner.png"; 
import logementsData from "../../data/logements.json"; 

const HomePage = () => {
  // Vérification des données
  console.log(logementsData); 

  return (
    <div className="home">
      <main>
        {/* La bannière avec l'image importée et le texte */}
        <Banner texte="Chez vous, partout et ailleurs" image={homeBanner} />
        
        {/* Affichage des cartes de logements */}
        <div className="cards-container">
          {logementsData.map((appart, id) => (
            <div className="card_logement" key={id}>
              <Link className="link_card_logement" to={`/logement/${appart.id}`}>
                <Card image={appart.cover} title={appart.title} />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
