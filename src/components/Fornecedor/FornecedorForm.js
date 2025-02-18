import React, { useState } from 'react';

function FornecedorForm({ onCreate }) {
  const [fornecedor, setFornecedor] = useState({ nome: '', cnpj: '', endereco: '', contato: '' });

  const handleChange = (e) => {
    setFornecedor({ ...fornecedor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(fornecedor);
    setFornecedor({ nome: '', cnpj: '', endereco: '', contato: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome" value={fornecedor.nome} onChange={handleChange} />
      <input type="text" name="cnpj" placeholder="CNPJ" value={fornecedor.cnpj} onChange={handleChange} />
      <input type="text" name="endereco" placeholder="Endereço" value={fornecedor.endereco} onChange={handleChange} />
      <input type="text" name="contato" placeholder="Contato" value={fornecedor.contato} onChange={handleChange} />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FornecedorForm;