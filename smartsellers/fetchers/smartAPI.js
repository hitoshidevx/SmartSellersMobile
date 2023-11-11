import axios from 'axios';

const smartAPI = axios.create({
  // Trocar a base para a nossa API em nuvem
  baseURL: "https://smartsellers.azurewebsites.net/"
});

// LOGIN
const logar = () => {
    return smartAPI.post("/api/usuario/login")
}

// PARTE DO PRODUTO
const carregarProdutos = () => { 
    return smartAPI.get("/api/produto/1/historico");
}

const apagarProduto = ( obj ) => { 
    return smartAPI.delete("/api/produto/1/deletar/" + obj.id + ".json")
}

const cadastrarProduto = ( obj ) => {
    return smartAPI.post("/api/produto/1/registrar", obj);
}

// PARTE DA EMPRESA

const carregarEmpresas = () => { 
    return smartAPI.get("/agenda.json");
}

const apagarEmpresa = ( obj ) => { 
    return smartAPI.delete("/agenda/" + obj.id + ".json")
}

const cadastrarEmpresa = ( obj ) => {
    return smartAPI.post("/agenda.json", obj);
}

export { logar, carregarProdutos, apagarProduto, cadastrarProduto, carregarEmpresas, apagarEmpresa, cadastrarEmpresa }