import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FornecedorList from './FornecedorList';
import FornecedorForm from './FornecedorForm';

function Fornecedor() {
  const [fornecedores, setFornecedores] = useState([]);

  useEffect(() => {
    fetchFornecedores();
  }, []);

  const fetchFornecedores = async () => {
    const response = await axios.get('/api/fornecedores');
    setFornecedores(response.data);
  };

  const handleCreate = async (fornecedor) => {
    await axios.post('/api/fornecedores', fornecedor);
    fetchFornecedores();
  };

  const handleUpdate = async (id, fornecedor) => {
    await axios.put(`/api/fornecedores/${id}`, fornecedor);
    fetchFornecedores();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/fornecedores/${id}`);
    fetchFornecedores();
  };

  return (
    <div>
      <h1>Fornecedores</h1>
      <FornecedorList fornecedores={fornecedores} onUpdate={handleUpdate} onDelete={handleDelete} />
      <FornecedorForm onCreate={handleCreate} />
    </div>
  );
}

export default Fornecedor;