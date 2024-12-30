import React, { useState } from 'react'; // Ajout de l'import de useState
import Chevron from "../../assets/vectorBas.svg";
import './styles.scss'; 

export default function Collapse(props) {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

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
        className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
        style={{ height: toggle ? "auto" : "0px" }}
      >
        <p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p>
      </div>
    </div>
  );
}
