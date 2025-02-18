import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Produto from './components/Produto/Produto';
import Fornecedor from './components/Fornecedor/Fornecedor';
import Associacao from './components/Associacao/Associacao';

function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/produtos" element={<Produto />} />
        <Route path="/fornecedores" element={<Fornecedor />} />
        <Route path="/associacoes" element={<Associacao />} />
      </Routes>
    </Router>
  );
}

export default App;