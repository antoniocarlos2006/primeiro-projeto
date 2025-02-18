import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Produto from './components/Produto/Produto';
import Fornecedor from './components/Fornecedor/Fornecedor';
import Associacao from './components/Associacao/Associacao';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/fornecedores">Fornecedores</Link></li>
            <li><Link to="/associacoes">Associações</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/produtos" element={<Produto />} />
          <Route path="/fornecedores" element={<Fornecedor />} />
          <Route path="/associacoes" element={<Associacao />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;