import React from 'react';

function FornecedorList({ fornecedores, onUpdate, onDelete }) {
  return (
    <ul>
      {fornecedores.map((fornecedor) => (
        <li key={fornecedor.id}>
          {fornecedor.nome} - {fornecedor.cnpj}
          <button onClick={() => onUpdate(fornecedor.id, fornecedor)}>Editar</button>
          <button onClick={() => onDelete(fornecedor.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}

export default FornecedorList;