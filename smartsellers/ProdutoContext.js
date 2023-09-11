import React, { useState, createContext, useContext } from 'react';

const ProdutoContext = createContext();

export const ProdutoProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);

  const adicionarProduto = (nome, descricao) => {
    setProdutos([...produtos, { nome, descricao }]);
  };

  return (
    <ProdutoContext.Provider value={{ produtos, adicionarProduto }}>
      {children}
    </ProdutoContext.Provider>
  );
};

export const useProduto = () => {
  return useContext(ProdutoContext);
};