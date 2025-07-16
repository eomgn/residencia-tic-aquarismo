import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="app-header">
      <Link to="/">
        <h1>Nosso aquário</h1>
      </Link>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/species">Espécies</Link>
          </li>
          <li>
            <Link to="/acessories">Acessórios</Link>
          </li>
          <li>
            <Link to="/cart">Carrinho</Link>
          </li>
          <li>
            <Link to="/guides">Guias</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
