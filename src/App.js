import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {HomePage} from "./pages/HomePage";
import SpeciesListPage from "./pages/SpeciesListPage";
import SpeciesDetailPage from "./pages/SpeciesDetailPage";
import {Cart} from "./pages/Cart";
import Acessories from "./pages/Acessories";
import "./App.css"; // Estilos globais para o layout
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="app-main-content">
          <CartProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/species" element={<SpeciesListPage />} />
              <Route path="/species/:id" element={<SpeciesDetailPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/acessories" element={<Acessories />} />
              <Route
                path="/guides"
                element={
                  <div>
                    <h1>Página de Guias (Em Breve!)</h1>
                  </div>
                }
              />
              <Route
                path="/about"
                element={
                  <div>
                    <h1>Sobre Nós (Em Breve!)</h1>
                  </div>
                }
              />
            </Routes>
          </CartProvider>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
