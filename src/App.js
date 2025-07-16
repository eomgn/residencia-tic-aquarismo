// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SpeciesListPage from './pages/SpeciesListPage';
import SpeciesDetailPage from './pages/SpeciesDetailPage';
import './App.css'; // Estilos globais para o layout

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="app-main-content">
          {/* AS ROTAS DEVEM ESTAR DENTRO DO <main> E ENVOLVIDAS POR <Routes> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/species" element={<SpeciesListPage />} />
            <Route path="/species/:id" element={<SpeciesDetailPage />} />
            {/* Você pode adicionar mais rotas aqui, como para "Guias" ou "Sobre" */}
            <Route path="/guides" element={<div><h1>Página de Guias (Em Breve!)</h1></div>} />
            <Route path="/about" element={<div><h1>Sobre Nós (Em Breve!)</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;