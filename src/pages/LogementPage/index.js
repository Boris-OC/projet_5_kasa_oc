import { Navigate, useParams } from "react-router-dom";
import logementsData from "../../data/logements.json"; 
import Gallery from "../../components/Gallery"; 
import Collapse from "../../components/Collapse";
import Host from "../../components/Host";
import Rate from "../../components/Rate";
import Tag from "../../components/Tag";

export default function LogementPage() {
  const params = useParams();

  // Vérifiez si params.id est défini et non vide
  if (!params.id || params.id.trim() === "") {
    return <Navigate to="/inexistant" replace />;
  }

  // Recherche du logement dans les données
  const pickedAppart = logementsData.find((logement) => logement.id === params.id);

  // Si aucun logement trouvé, redirigez vers la page 404
  if (!pickedAppart) {
    return <Navigate to="/inexistant" replace />;
  }

  // Déstructuration des propriétés une fois que pickedAppart est validé
  const { pictures, title, location, tags, host, rating, description, equipments } = pickedAppart;

  return (
    <div key={params.id} className="fiche-container">
      <Gallery slides={pictures} />
      <section className="hostInfo-container">
        <div className="title-tags-container">
          <div className="title-container redFont">
            <h1>{title}</h1>
            <h3>{location}</h3>
          </div>
          <div className="tags-container">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <div className="rate-host-container">
          <div className="host-container redFont">
            <Host hostName={host.name} hostPic={host.picture} />
          </div>
          <div className="rate-container">
            <Rate score={rating} />
          </div>
        </div>
      </section>
      <div className="collapse-fiche-container">
        <Collapse aboutTitle="Description" aboutText={description} />
        <Collapse
          aboutTitle="Équipements"
          aboutText={
            <ul>
              {equipments.map((item, index) => (
                <li key={index} className="equipList">
                  {item}
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}
