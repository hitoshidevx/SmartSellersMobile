import { useState } from "react";
import { empresaSchema } from "../models/empresaSchema";
import { produtoSchema } from "../models/produtoSchema";
import { useReducer, useEffect } from 'react';
import { cadastrarEmpresa, carregarEmpresas, apagarEmpresa, cadastrarProduto, carregarProdutos, apagarProduto, alterarProduto, alterarEmpresas } from "../fetchers/smartAPI";

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

    const [id, setId] = useState(null)
    const [nomeProduto, setNomeProduto] = useState("")
    const [descricaoProduto, setDescricaoProduto] = useState("")
    const [precoProduto, setPrecoProduto] = useState()

    const [nomeEmpresa, setNomeEmpresa] = useState("")
    const [descricaoEmpresa, setDescricaoEmpresa] = useState("")


    const salvarProduto = async (obj) => {
        return produtoSchema.validate(obj, { abortEarly: false })
            .then(() => {
                cadastrarProduto(obj)
                    .then(() => {
                        listarProduto();
                    })
                    .catch((err) => {
                        alert("Erro: " + err)
                    })
            })
    }

    const changeProduto = (obj) => {
        setId(obj.id)
        setNomeProduto(obj.nomeProduto)
        setDescricaoProduto(obj.descricaoProduto)
        setPrecoProduto(obj.precoProduto)
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
        apagarProduto(obj)
            .then(() => {
                listarProduto();
            })
            .catch((err) => {
                alert("Erro ao apagar")
            })
    }

    const editarProduto = async (obj) => {
        return alterarProduto(obj.id, obj)
            .then(() => {
                listarProduto();
            })
            .catch((err) => {
                alert("Erro ao editar");
            });
    };

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
        apagarEmpresa(obj)
            .then(() => {
                listarEmpresa();
            })
            .catch((err) => {
                alert("Erro ao apagar")
            })
    }

    const editarEmpresa = async (obj) => {
        return alterarEmpresas(obj.id, obj)
            .then(() => {
                listarEmpresa();
            })
            .catch((err) => {
                alert("Erro ao editar");
            });
    };

    useEffect(
        () => {
            listarProduto();
            listarEmpresa();
        },
        [])

    return {
        estado,
        dispatcher,
        id,
        setId,
        nomeProduto,
        setNomeProduto,
        descricaoProduto,
        setDescricaoProduto,
        precoProduto,
        setPrecoProduto,
        nomeEmpresa,
        setNomeEmpresa,
        descricaoEmpresa,
        setDescricaoEmpresa,
        salvarProduto,
        listarProduto,
        deletarProduto,
        editarProduto,
        salvarEmpresa,
        listarEmpresa,
        deletarEmpresa,
        editarEmpresa,
        changeProduto
    }
}

export { useSmartControl }