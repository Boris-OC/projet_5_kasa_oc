import React, { useState, useRef, useEffect } from 'react'; // Ajout de useRef et useEffect
import Chevron from "../../assets/vectorBas.svg";
import './styles.scss'; 

export default function Collapse(props) {
  const [toggle, setToggle] = useState(false);
  const contentRef = useRef(null); // Référence pour le contenu

  const toggleState = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle && contentRef.current) {
      // Définir la hauteur dynamique lorsque le contenu est ouvert
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      // Réinitialiser la hauteur lorsque le contenu est fermé
      contentRef.current.style.maxHeight = "0px";
    }
  }, [toggle]);

  return (
    <div className={`collapse ${props.aboutStyle}`}>
      <div onClick={toggleState} className="collapse__visible">
        <h2>{props.aboutTitle}</h2>
        <img
          className={toggle ? "chevron rotated" : "chevron"}
          src={Chevron}
          alt="chevron"
        />
      </div>
      <div
        ref={contentRef} // Référence au conteneur
        className={`collapse__toggle ${toggle ? "is-open" : ""}`}
        aria-hidden={!toggle}
      >
        <p>{props.aboutText}</p>
      </div>
    </div>
  );
}
