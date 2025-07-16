import { useParams, useNavigate } from "react-router-dom";
import fishData from "../data/fishData"; // Importa os dados
import "./SpeciesDetailPage.css";

function SpeciesDetailPage() {
  const { id } = useParams(); // Pega o ID da URL
  const navigate = useNavigate();
  const species = fishData.find((f) => f.id === id); // Encontra a espécie pelo ID

  if (!species) {
    return (
      <div className="species-detail-page not-found">
        <h2>Espécie não encontrada!</h2>
        <p>
          A espécie que você está procurando não existe ou o ID está incorreto.
        </p>
        <button onClick={() => navigate("/species")} className="back-button">
          Voltar para a Lista de Espécies
        </button>
      </div>
    );
  }

  return (
    <div className="species-detail-page">
      <button onClick={() => navigate(-1)} className="back-button">
        &larr; Voltar
      </button>
      <div className="species-detail-content">
        <img
          src={species.image}
          alt={species.name}
          className="species-detail-image"
        />
        <div className="species-info">
          <h2>{species.name}</h2>
          <p className="scientific-name">*{species.scientificName}*</p>
          <p className="description">{species.description}</p>

          <div className="info-section">
            <h3>Habitat e Requisitos do Tanque</h3>
            <ul>
              <li>Tamanho Mínimo do Tanque: {species.minTankSize} galões</li>
              <li>Temperamento: {species.temperament}</li>
              <li>Dieta: {species.diet}</li>
            </ul>
          </div>

          <div className="info-section">
            <h3>Parâmetros da Água</h3>
            <ul>
              <li>pH: {species.waterParameters.ph}</li>
              <li>Temperatura: {species.waterParameters.temp}</li>
              <li>Dureza (GH): {species.waterParameters.gh}</li>
            </ul>
          </div>

          <div className="info-section">
            <h3>Companheiros de Tanque Compatíveis</h3>
            <p>{species.compatibleTankmates.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeciesDetailPage;
