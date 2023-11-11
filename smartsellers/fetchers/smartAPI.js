import axios from 'axios';

const smartAPI = axios.create({
  // Trocar a base para a nossa API em nuvem
  baseURL: "https://fiap-2023-2tdspg-16bb6-default-rtdb.firebaseio.com/"
});

// LOGIN
const logar = () => {
    return smartAPI.post("/api/usuario/login")
}

// PARTE DO PRODUTO
const carregarProdutos = () => { 
    return smartAPI.get("/agenda.json");
}

const apagarProduto = ( obj ) => { 
    return smartAPI.delete("/agenda/" + obj.id + ".json")
}

const cadastrarProduto = ( obj ) => {
    return smartAPI.post("/agenda.json", obj);
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