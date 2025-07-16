import accessoriesData from "../data/accessoriesData";

export default function Acessories() {
  return (
    <div className="species-list-page">
      <h2>Nossas Espécies de Peixes</h2>
      <div className="species-grid">
        {accessoriesData.map((acessories) => (
          <div>
            <text>{acessories.name}</text>
            <text>{acessories.description}</text>
            <text>{acessories.price}</text>
          </div>
          //<SpeciesCard species={acessories.name} />
        ))}
      </div>
    </div>
  );
}
