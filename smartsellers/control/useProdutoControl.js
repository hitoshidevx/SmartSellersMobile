// EM DESUSO APENAS PARA DESENCARGO DE CONSCIÊNCIA, O CONTROL REALMENTE USADO É O useSmartControl

import { produtoSchema } from "../model/produtoSchema";
import { useReducer, useEffect } from 'react';
import { cadastrarProduto, carregarProdutos, apagarProduto } from "../fetchers/smartAPI";

const estadoInicial = {
    lista: []
}

const funcaoReducer = (estado, action) => {
    if (action.type === "LIST_APPEND") {
        return { ...estado, lista: [...estado.lista, action.payload] }
    } else if (action.type === "LIST_CLEAR") {
        return { ...estado, lista: [] };
    }
    throw new Exception("Tipo não identificado na funcaoReducer");
}

const useProdutoControl = () => {
    const [estado, dispatcher] = useReducer(funcaoReducer, estadoInicial);

    const salvarProduto = async (obj) => {
        return produtoSchema.validate(obj, { abortEarly: false })
            .then(() => {
                cadastrarProduto(obj)
                    .then(() => {
                        carregarProdutos();
                    })
            })
    }

    const listarProduto = async () => {
        carregarProdutos()
            .then((resposta) => {
                dispatcher({ type: "LIST_CLEAR" });
                for (const chave in resposta.data) {
                    const obj = resposta.data[chave];
                    obj.id = chave
                    dispatcher({ type: "LIST_APPEND", payload: obj });
                }
            })
            .catch((err) => {
                alert("Erro ao ler: " + err);
            })
    }

    const deletarProduto = (obj) => {
        apagarProduto()
            .then(() => {
                listarProduto();
            })
            .catch((err) => {
                alert("Erro ao apagar")
            })
    }

    useEffect(
        () => { 
            listarProduto() 
        },
        [])

    return {
        estado,
        dispatcher,
        salvarProduto,
        listarProduto,
        deletarProduto
    }
}

export { useProdutoControl }