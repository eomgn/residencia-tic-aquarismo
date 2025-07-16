import { Link } from "react-router-dom";
import "./SpeciesCard.css";

function SpeciesCard({ species }) {
  return (
    <div className="species-card">
      <img
        src={species.image}
        alt={species.name}
        className="species-card-image"
      />
      <div className="species-card-content">
        <h3>{species.name}</h3>
        <p className="scientific-name">{species.scientificName}</p>
        <p>Tamanho Mínimo do Tanque: {species.minTankSize} galões</p>
        <p>Temperamento: {species.temperament}</p>
        <Link to={`/species/${species.id}`} className="details-button">
          Ver Detalhes
        </Link>
        <Link to={`/species/${species.id}`} className="details-button">
          Comprar
        </Link>
      </div>
    </div>
  );
}

export default SpeciesCard;
