import React, { useState, createContext, useContext } from 'react';

const SmartSellersContext = createContext();

export const SmartSellersProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);
  const [empresas, setEmpresas] = useState([]);
  
  const adicionarProduto = (nome, descricao) => {
    setProdutos([...produtos, { nome, descricao }]);
  };

  const adicionarEmpresa = (nome, descricao) => {
    setEmpresas([...empresas, { nome, descricao }]);
  };

  const removerProduto = (index) => {
    const novaListaProdutos = [...produtos];
    novaListaProdutos.splice(index, 1);
    setProdutos(novaListaProdutos);
  };

  const removerEmpresa = (index) => {
    const novaListaEmpresas = [...empresas];
    novaListaEmpresas.splice(index, 1);
    setEmpresas(novaListaEmpresas);
  };

  const atualizarProduto = (produtoAtualizado) => {
    const produtosAtualizados = produtos.map((produto) =>
      produto.id === produtoAtualizado.id ? produtoAtualizado : produto
    );
    setProdutos(produtosAtualizados);
  };

  const atualizarEmpresa = (empresaAtualizada) => {
    const empresasAtualizadas = empresas.map((empresa) =>
      empresa.id === empresaAtualizada.id ? empresaAtualizada : empresa
    );
    setEmpresas(empresasAtualizadas);
  };

  return (
    <SmartSellersContext.Provider value={{ produtos, empresas, adicionarProduto, removerProduto, atualizarProduto, adicionarEmpresa, removerEmpresa, atualizarEmpresa }}>
      {children}
    </SmartSellersContext.Provider>
  );
};

export const useSmartContext = () => {
  return useContext(SmartSellersContext);
};