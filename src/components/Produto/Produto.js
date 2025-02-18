import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProdutoList from './ProdutoList';
import ProdutoForm from './ProdutoForm';
import './Produto.css';

function Produto() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    const response = await axios.get('/api/produtos');
    setProdutos(response.data);
  };

  const handleCreate = async (produto) => {
    await axios.post('/api/produtos', produto);
    fetchProdutos();
  };

  const handleUpdate = async (id, produto) => {
    await axios.put(`/api/produtos/${id}`, produto);
    fetchProdutos();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/produtos/${id}`);
    fetchProdutos();
  };

  return (
    <div>
      <h1>Produtos</h1>
      <ProdutoList produtos={produtos} onUpdate={handleUpdate} onDelete={handleDelete} />
      <ProdutoForm onCreate={handleCreate} />
    </div>
  );
}

export default Produto;