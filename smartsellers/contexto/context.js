import { createContext } from "react"

const smartContextoInicial = { 
    estado : {},
    salvarEmpresa : ( obj ) => {},
    dispatcher : ( action ) => {},
    salvarProduto : ( obj ) => {},
    listarEmpresa : () => {},
    listarProduto : () => {},
    deletarEmpresa : ( obj ) => {},
    deletarProduto : ( obj ) => {},
}

const SmartContexto = createContext(smartContextoInicial);

export { SmartContexto }