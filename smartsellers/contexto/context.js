import { createContext } from "react"

const smartContextoInicial = { 
    estado : {},
    dispatcher : ( action ) => {},
    salvarEmpresa : ( obj ) => {},
    salvarProduto : ( obj ) => {},
    listarEmpresa : () => {},
    listarProduto : () => {},
    deletarEmpresa : ( obj ) => {},
    deletarProduto : ( obj ) => {},
    editarProduto : ( obj ) => {},
    editarEmpresa : ( obj ) => {}

}

const SmartContexto = createContext(smartContextoInicial);

export { SmartContexto }