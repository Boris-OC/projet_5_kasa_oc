import React from 'react';
import { Link } from 'react-router-dom';
import Banner from "../../components/Banner";
import Card from "../../components/Cards"; // Assurez-vous que le chemin est correct
import Footer from "../../components/Footer";
import homeBanner from "../../assets/banner/homeBanner.png"; // L'image de la bannière
import logementsData from "../../data/logements.json"; // Importer les données JSON directement

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
                {/* Modifier 'cover' en 'image' */}
                <Card image={appart.cover} title={appart.title} />
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
