import { useState, useRef } from "react";
import left from "../../assets/vector-left.svg";
import right from "../../assets/vector-right.svg";
import './style.scss';

export default function Carrousel({ slides }) {
  const [current, setCurrent] = useState(0); 
  const length = slides.length; 
  const slideRef = useRef([]); 

  const nextSlide = () => {
    const currentSlide = slideRef.current[current]; 
    const nextIndex = current === length - 1 ? 0 : current + 1; 

    // Appliquer la transition de sortie à l'image actuelle
    currentSlide.classList.add("slide-out");
    setTimeout(() => {
      
      setCurrent(nextIndex);
      // Réinitialiser la classe de sortie après la transition
      currentSlide.classList.remove("slide-out");
    }, 600); // Durée de la transition de sortie
  };

  const prevSlide = () => {
    const currentSlide = slideRef.current[current]; 
    const prevIndex = current === 0 ? length - 1 : current - 1; 

    // Appliquer la transition de sortie à l'image actuelle
    currentSlide.classList.add("slide-out");
    setTimeout(() => {
      
      setCurrent(prevIndex);
      
      currentSlide.classList.remove("slide-out");
    }, 600); // Durée de la transition de sortie
  };

  return (
    <section id="carrousel-container">
      {length > 1 && (
        <img
          src={left}
          alt="gauche"
          onClick={prevSlide}
          className="leftArrow"
        />
      )}
      {length > 1 && (
        <img
          src={right}
          alt="droite"
          onClick={nextSlide}
          className="rightArrow"
        />
      )}

      <div className="slides-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={
              current === index
                ? "slider bl-msk wh-msk active-anim"
                : "slider bl-msk wh-msk slide-out"
            }
            ref={(el) => (slideRef.current[index] = el)} // Ajouter chaque slide à la ref
          >
            {index === current && <img src={slide} alt="appartement à louer" />}
            {index === current && (
              <span className="slider__number">
                {current + 1}/{length}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
