import axios from 'axios';

const smartAPI = axios.create({
  // Trocar a base para a nossa API em nuvem
  baseURL: "https://smartsellers-default-rtdb.firebaseio.com/"
});

// LOGIN
const logar = () => {
    return smartAPI.post("/api/usuario/login")
}

// PARTE DO PRODUTO
const carregarProdutos = () => { 
    return smartAPI.get("/produtos.json");
}

const apagarProduto = ( obj ) => { 
    return smartAPI.delete("/produtos/" + obj.id + ".json")
}

const cadastrarProduto = ( obj ) => {
    return smartAPI.post("/produtos.json", obj);
}

const alterarProduto = (id, obj) => {
    return smartAPI.put(`/produtos/${id}.json`, obj);
  };

// PARTE DA EMPRESA

const carregarEmpresas = () => { 
    return smartAPI.get("/empresas.json");
}

const apagarEmpresa = ( obj ) => { 
    return smartAPI.delete("/empresas/" + obj.id + ".json")
}

const cadastrarEmpresa = ( obj ) => {
    return smartAPI.post("/empresas.json", obj);
}

const alterarEmpresas = (id, obj) => {
    return smartAPI.put(`/empresas/${id}.json`, obj);
  };

export { logar, carregarProdutos, apagarProduto, cadastrarProduto, alterarProduto, carregarEmpresas, apagarEmpresa, cadastrarEmpresa, alterarEmpresas }