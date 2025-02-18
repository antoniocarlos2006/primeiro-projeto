import React, { useState } from 'react';

function AssociacaoForm({ produtos, fornecedores, onCreate }) {
  const [associacao, setAssociacao] = useState({ produtoId: '', fornecedorId: '' });

  const handleChange = (e) => {
    setAssociacao({ ...associacao, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(associacao);
    setAssociacao({ produtoId: '', fornecedorId: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="produtoId" value={associacao.produtoId} onChange={handleChange}>
        <option value="">Selecione um produto</option>
        {produtos.map((produto) => (
          <option key={produto.id} value={produto.id}>
            {produto.nome}
          </option>
        ))}
      </select>
      <select name="fornecedorId" value={associacao.fornecedorId} onChange={handleChange}>
        <option value="">Selecione um fornecedor</option>
        {fornecedores.map((fornecedor) => (
          <option key={fornecedor.id} value={fornecedor.id}>
            {fornecedor.nome}
          </option>
        ))}
      </select>
      <button type="submit">Associar</button>
    </form>
  );
}

export default AssociacaoForm;