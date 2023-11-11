import { empresaSchema } from "../model/empresaSchema";
import { produtoSchema } from "../model/produtoSchema";
import { useReducer, useEffect } from 'react';
import {  cadastrarEmpresa, carregarEmpresas, apagarEmpresa, cadastrarProduto, carregarProdutos, apagarProduto  } from "../fetchers/smartAPI";

const estadoInicial = {
    listaProduto: [],
    listaEmpresa: []
}

const funcaoReducer = (estado, action) => {
    if (action.type === "LIST_APPEND_PRODUCT") {
        return { ...estado, listaProduto: [...estado.listaProduto, action.payload] }
    } else if (action.type === "LIST_CLEAR_PRODUCT") {
        return { ...estado, listaProduto: [] };
    } else if (action.type === "LIST_APPEND_COMPANY") {
        return { ...estado, listaEmpresa: [...estado.listaEmpresa, action.payload] }
    } else if (action.type === "LIST_CLEAR_COMPANY") {
        return { ...estado, listaEmpresa: [] };
    }
    throw new Exception("Tipo não identificado na funcaoReducer");
}

const useSmartControl = () => {
    const [estado, dispatcher] = useReducer(funcaoReducer, estadoInicial);

    const salvarEmpresa = async (obj) => {
        return empresaSchema.validate(obj, { abortEarly: false })
            .then(() => {
                cadastrarEmpresa(obj)
                    .then(() => {
                        carregarEmpresas();
                    })
            })
    }

    const listarEmpresa = async () => {
        carregarEmpresas()
            .then((resposta) => {
                dispatcher({ type: "LIST_CLEAR_COMPANY" });
                for (const chave in resposta.data) {
                    const obj = resposta.data[chave];
                    obj.id = chave
                    dispatcher({ type: "LIST_APPEND_COMPANY", payload: obj });
                }
            })
            .catch((err) => {
                alert("Erro ao ler: " + err);
            })
    }

    const deletarEmpresa = (obj) => {
        apagarEmpresa()
            .then(() => {
                listarEmpresa();
            })
            .catch((err) => {
                alert("Erro ao apagar")
            })
    }

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
                dispatcher({ type: "LIST_CLEAR_PRODUCT" });
                for (const chave in resposta.data) {
                    const obj = resposta.data[chave];
                    obj.id = chave
                    dispatcher({ type: "LIST_APPEND_PRODUCT", payload: obj });
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
            listarEmpresa();
            listarProduto();
        },
        [])

    return {
        estado,
        dispatcher,
        salvarEmpresa,
        listarEmpresa,
        deletarEmpresa,
        salvarProduto,
        listarProduto,
        deletarProduto
    }
}

export { useSmartControl }