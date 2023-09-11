import React, { useState, createContext, useContext } from 'react';

const ProdutoContext = createContext();

export const ProdutoProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);
  const { produto } = route.params;
  
  const adicionarProduto = (nome, descricao) => {
    setProdutos([...produtos, { nome, descricao }]);
  };

  const removerProduto = (index) => {
    const novaListaProdutos = [...produtos];
    novaListaProdutos.splice(index, 1);
    setProdutos(novaListaProdutos);
  };

  const atualizarProduto = () => {
    // Crie um novo array de produtos com o produto atualizado
    const produtosAtualizados = [...produtos]
    produtosAtualizados.map((p) => {
      if (p === produto) {
        return { ...p, nome: novoNome, descricao: novaDescricao };
      }
      return p;
    });

    // Atualize a lista de produtos no contexto
    setProdutos(produtosAtualizados);

    // Navegue de volta para a tela de listagem
    navigation.navigate('Listagem');
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