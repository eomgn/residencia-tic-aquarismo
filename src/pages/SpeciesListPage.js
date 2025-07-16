import SpeciesCard from "../components/SpeciesCard";
import fishData from "../data/fishData"; // Importa os dados
import "./SpeciesListPage.css";

function SpeciesListPage() {
  return (
    <div className="species-list-page">
      <h2>Nossas Espécies de Peixes</h2>
      <div className="species-grid">
        {fishData.map((fish) => (
          <SpeciesCard key={fish.id} species={fish} />
        ))}
      </div>
    </div>
  );
}

export default SpeciesListPage;
