import React, { useState, createContext, useContext } from 'react';

const ProdutoContext = createContext();

export const ProdutoProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);
  
  const adicionarProduto = (nome, descricao) => {
    setProdutos([...produtos, { nome, descricao }]);
  };

  const removerProduto = (index) => {
    const novaListaProdutos = [...produtos];
    novaListaProdutos.splice(index, 1);
    setProdutos(novaListaProdutos);
  };

  const atualizarProduto = (produtoAtualizado) => {
    const produtosAtualizados = produtos.map((produto) =>
      produto.id === produtoAtualizado.id ? produtoAtualizado : produto
    );
    setProdutos(produtosAtualizados);
  };

  return (
    <ProdutoContext.Provider value={{ produtos, adicionarProduto, removerProduto, atualizarProduto }}>
      {children}
    </ProdutoContext.Provider>
  );
};

export const useProduto = () => {
  return useContext(ProdutoContext);
};