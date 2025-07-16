// src/pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom"; // Apenas 'Link' é necessário aqui para navegar
import "./HomePage.css";
import SpeciesListPage from "./SpeciesListPage.js";

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h2>Seu Guia Definitivo para o Mundo Aquático</h2>
        <p>
          Descubra a beleza e a complexidade do aquarismo. Encontre informações
          detalhadas sobre peixes, plantas e guias de cuidado.
        </p>
        <Link to="/species" className="cta-button">
          Explorar Espécies 🐠
        </Link>
      </section>

      <section>
        <SpeciesListPage />
      </section>

      <section className="info-cards-section">
        <div className="info-card">
          <h3>🐟 Conheça Peixes</h3>
          <p>
            Explore nossa vasta base de dados de espécies de peixes, com
            detalhes sobre compatibilidade, dieta e requisitos de tanque.
          </p>
        </div>
        <div className="info-card">
          <h3>🌿 Aprenda sobre Plantas</h3>
          <p>
            Descubra as melhores plantas para seu aquário, suas necessidades de
            luz, CO2 e muito mais.
          </p>
        </div>
        <div className="info-card">
          <h3>📚 Guias Completos</h3>
          <p>
            Desde a montagem inicial até a manutenção avançada, nossos guias te
            ajudarão em cada etapa.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
