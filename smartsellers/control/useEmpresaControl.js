// EM DESUSO APENAS PARA DESENCARGO DE CONSCIÊNCIA, O CONTROL REALMENTE USADO É O useSmartControl

import { empresaSchema } from "../model/empresaSchema";
import { useReducer, useEffect } from 'react';
import {  cadastrarEmpresa, carregarEmpresas, apagarEmpresa  } from "../fetchers/smartAPI";

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

const useEmpresaControl = () => {
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

    const deletarEmpresa = (obj) => {
        apagarEmpresa()
            .then(() => {
                listarEmpresa();
            })
            .catch((err) => {
                alert("Erro ao apagar")
            })
    }

    useEffect(
        () => { 
            listarEmpresa() 
        },
        [])

    return {
        estado,
        dispatcher,
        salvarEmpresa,
        listarEmpresa,
        deletarEmpresa,
    }
}

export { useEmpresaControl }