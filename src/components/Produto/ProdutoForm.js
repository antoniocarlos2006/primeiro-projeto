import React, { useState } from 'react';

function ProdutoForm({ onCreate }) {
  const [produto, setProduto] = useState({ nome: '', descricao: '', preco: '', codigoBarras: '' });

  const handleChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(produto);
    setProduto({ nome: '', descricao: '', preco: '', codigoBarras: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome" value={produto.nome} onChange={handleChange} />
      <input type="text" name="descricao" placeholder="Descrição" value={produto.descricao} onChange={handleChange} />
      <input type="number" name="preco" placeholder="Preço" value={produto.preco} onChange={handleChange} />
      <input type="text" name="codigoBarras" placeholder="Código de Barras" value={produto.codigoBarras} onChange={handleChange} />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default ProdutoForm;