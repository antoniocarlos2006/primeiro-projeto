import React from 'react';

function AssociacaoList({ associacoes, produtos, fornecedores, onDelete }) {
  return (
    <ul>
      {associacoes.map((associacao) => (
        <li key={associacao.id}>
          {produtos.find((p) => p.id === associacao.produtoId)?.nome} -{' '}
          {fornecedores.find((f) => f.id === associacao.fornecedorId)?.nome}
          <button onClick={() => onDelete(associacao.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}

export default AssociacaoList;