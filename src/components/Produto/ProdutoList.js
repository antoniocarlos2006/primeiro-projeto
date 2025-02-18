import React from 'react';

function ProdutoList({ produtos, onUpdate, onDelete }) {
  return (
    <ul>
      {produtos.map((produto) => (
        <li key={produto.id}>
          {produto.nome} - {produto.preco}
          <button onClick={() => onUpdate(produto.id, produto)}>Editar</button>
          <button onClick={() => onDelete(produto.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}

export default ProdutoList;