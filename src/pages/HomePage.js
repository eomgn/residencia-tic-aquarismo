import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./HomePage.css";

export function HomePage() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Peixe Beta",
      price: 24.99,
      description: "Peixe ornamental de cores vibrantes e fácil cuidado.",
      image: "🐟"
    },
    {
      id: 2,
      name: "Tetra Neon",
      price: 8.99,
      description: "Cardume de cores iridescentes que iluminam qualquer aquário.",
      image: "🐠"
    },
    {
      id: 3,
      name: "Coridora",
      price: 12.99,
      description: "Excelente limpador de fundo para aquários comunitários.",
      image: "🐡"
    }
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <h2>Seu Guia Definitivo para o Mundo Aquático</h2>
        <p>
          Descubra a beleza e a complexidade do aquarismo. Compre peixes e acessórios
          ou encontre informações detalhadas sobre cuidados.
        </p>
        <Link to="/species" className="cta-button">
          Explorar Espécies 🐠
        </Link>
      </section>

      <section className="products-section">
        <h2 className="section-title">Peixes em Destaque</h2>
        <div className="product-cards">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.image}</div>
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">R$ {product.price.toFixed(2)}</p>
              <button 
                className="add-to-cart-button"
                onClick={() => addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  quantity: 1
                })}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          ))}
        </div>
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