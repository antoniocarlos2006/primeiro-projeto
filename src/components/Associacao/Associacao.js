import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AssociacaoList from './AssociacaoList';
import AssociacaoForm from './AssociacaoForm';

function Associacao() {
  const [associacoes, setAssociacoes] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [fornecedores, setFornecedores] = useState([]);

  useEffect(() => {
    fetchAssociacoes();
    fetchProdutos();
    fetchFornecedores();
  }, []);

  const fetchAssociacoes = async () => {
    const response = await axios.get('/api/associacoes');
    setAssociacoes(response.data);
  };

  const fetchProdutos = async () => {
    const response = await axios.get('/api/produtos');
    setProdutos(response.data);
  };

  const fetchFornecedores = async () => {
    const response = await axios.get('/api/fornecedores');
    setFornecedores(response.data);
  };

  const handleCreate = async (associacao) => {
    await axios.post('/api/associacoes', associacao);
    fetchAssociacoes();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/associacoes/${id}`);
    fetchAssociacoes();
  };

  return (
    <div>
      <h1>Associação Produto/Fornecedor</h1>
      <AssociacaoList
        associacoes={associacoes}
        produtos={produtos}
        fornecedores={fornecedores}
        onDelete={handleDelete}
      />
      <AssociacaoForm
        produtos={produtos}
        fornecedores={fornecedores}
        onCreate={handleCreate}
      />
    </div>
  );
}

export default Associacao;