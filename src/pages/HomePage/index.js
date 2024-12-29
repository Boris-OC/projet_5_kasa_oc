import React from 'react';
import Gallery from "../../components/Gallery";
import Banner from "../../components/Banner"; 
import Footer from "../../components/Footer";
import homeBanner from "../../assets/banner/homeBanner.png"; // importer l'image ici

const HomePage = () => {
  return (
    <div className="home">
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={homeBanner} /> {/* passer l'image importée ici */}
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;