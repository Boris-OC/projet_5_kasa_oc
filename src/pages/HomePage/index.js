import React from 'react';
import Gallery from "../../components/Gallery";
import Banner from "../../components/Banner"; 
import Footer from "../../components/Footer";
const HomePage = () => {
  return (
    <div className="home">
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image="pouet" />
        
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;