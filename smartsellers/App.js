import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Modal,
  Pressable,
  Image
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'
import banner from './assets/bannerChatbot.jpg'
import chatbotImage from './assets/chatbotCelular.png'
import { useSmartContext } from './SmartSellersContext';
import { SmartSellersProvider } from './SmartSellersContext';

const Stack = createStackNavigator();


const Home = ({ navigation }) => {

  const estilos = StyleSheet.create({

    textoBanner:{
      color: 'white',
      fontWeight: 500,
      fontSize: 30,
      marginLeft: 20,
  },
  
    botao:{
      backgroundColor: '#04192C',
      width: 150,
      height: 40,
      marginLeft: 20,
      marginTop: 20,
      borderRadius: 15,
  },
  
    textoBotao:{
      color: 'white',
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 500,
      marginTop: 7,
  },

    nomeEmpresa:{
      color: 'white',
      fontSize: 20,
      fontWeight: 500,
      marginTop: 10,
      textAlign: 'left'
  },

    textoPrincipal:{
      color: 'white',
      fontWeight: 400,
      width: 200,
      fontSize: 20,
      textAlign: 'center'
    },

    textoMenu: {
      color: 'white',
      textAlign: "right",
      fontWeight: "bold"
    }

  })
  return (
    <View style = {{flex: 1}}>

      <View style={{ flex: 5 }}>
        <ImageBackground
          source={banner}
          style={{ height: '100%' , width: '100%' }}>
          <View style={{ marginTop: 60 }}>
            <Text style={estilos.textoBanner}>
              Rápido.
            </Text>
            <Text style={estilos.textoBanner}>
              Inteligente.
            </Text>
            <Text style={estilos.textoBanner}>
              Eficiente.
            </Text>
          </View>

          <TouchableOpacity
            style={estilos.botao}
            onPress={() => navigation.navigate('FormularioProduto')}>
            <Text
              style={estilos.textoBotao}>
              Cadastrar Produto
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={estilos.botao}
            onPress={() => navigation.navigate('FormularioEmpresa')}>
            <Text
              style={estilos.textoBotao}>
              Cadastrar Empresa
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <View
        style={{
          flex: 4,
          backgroundColor: '#025A90',
          height: 442,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row'
        }}>
        <Text style={estilos.textoPrincipal}>
          O chatbot que vai <Text style = {{color: 'orange'}}>elevar</Text> a jornada do consumidor ao próximo nível!
        </Text>
        <Image style={{width: '30%', height: '40%'}} source={chatbotImage} />
      </View>
    </View>
  );
}

const Inputting = ({ texto, outroTexto }) => {

  return(
    <View style={{ flex: 1}}>
                  <View
                    style={{
                      backgroundColor: "#025A90",
                      padding: 20,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        textAlign: "center",
                        fontWeight: 600,
                      }}
                    >
                      {texto}
                    </Text>
                  </View>
                  <Text
                    placeholder="Digite aqui..."
                    placeholderTextColor="white"
                    style={{
                      backgroundColor: "#04192C",
                      color: "white",
                      padding: 20,
                      textAlign: "center",
                      borderBottomRightRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}
                  >
                    {outroTexto}
                  </Text>
                </View>
  )
};


const FormularioProduto = ({navigation}) => {

  const {adicionarProduto} = useSmartContext();

  const [nomeProduto, setNomeProduto] = useState("")
  const [descricaoProduto, setDescricaoProduto] = useState("")

  const handleProntoPress = () => {
    adicionarProduto(nomeProduto, descricaoProduto);
    navigation.navigate('ListagemProduto');
  };

  return(
    <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#00284D',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#00284D',
              justifyContent: 'space-around',
              width: "100%",
              height: "100%",
              padding: 50,
              marginTop: 30
            }}>

            
            <View style={{ flex: 1}}>
                  <View
                    style={{
                      backgroundColor: "#025A90",
                      padding: 20,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        textAlign: "center",
                        fontWeight: 600,
                      }}
                    >
                      Digite o nome do seu produto
                    </Text>
                  </View>
                  <TextInput
                    placeholder="Digite aqui..."
                    placeholderTextColor="white"
                    style={{
                      backgroundColor: "#04192C",
                      color: "white",
                      padding: 20,
                      textAlign: "center",
                      borderBottomRightRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}
                    onChangeText={(text) => setNomeProduto(text)}
                    value={nomeProduto}
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      backgroundColor: "#025A90",
                      padding: 20,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        textAlign: "center",
                        fontWeight: 600,
                      }}
                    >
                      Descreva o seu produto
                    </Text>
                  </View>
                  <TextInput
                    placeholder="Digite aqui..."
                    placeholderTextColor="white"
                    style={{
                      backgroundColor: "#04192C",
                      color: "white",
                      padding: 20,
                      textAlign: "center",
                      borderBottomRightRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}
                    onChangeText={(text) => setDescricaoProduto(text)}
                    value={descricaoProduto}
                  />
                </View>
           


            <TouchableOpacity
              style={{
                backgroundColor: '#04192C',
                width: '100%',
                padding: 15,
                alignSelf: 'center',
                borderRadius: 10,
                marginBottom: 50
              }}
              onPress={handleProntoPress}
              
              >
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 600,
                  fontSize: 20,
                }}>
                Pronto!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

const FormularioEmpresa = ({navigation}) => {

  const { adicionarEmpresa } = useSmartContext();

  const [nomeEmpresa, setNomeEmpresa] = useState("")
  const [descricaoEmpresa, setDescricaoEmpresa] = useState("")

  const handleProntoPress = () => {
    adicionarEmpresa(nomeEmpresa, descricaoEmpresa);
    navigation.navigate('ListagemEmpresa');
  };

  return(
    <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#00284D',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#00284D',
              justifyContent: 'space-around',
              width: "100%",
              height: "100%",
              padding: 50,
              marginTop: 30
            }}>

            
            <View style={{ flex: 1}}>
                  <View
                    style={{
                      backgroundColor: "#025A90",
                      padding: 20,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        textAlign: "center",
                        fontWeight: 600,
                      }}
                    >
                      Digite o nome da sua empresa
                    </Text>
                  </View>
                  <TextInput
                    placeholder="Digite aqui..."
                    placeholderTextColor="white"
                    style={{
                      backgroundColor: "#04192C",
                      color: "white",
                      padding: 20,
                      textAlign: "center",
                      borderBottomRightRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}
                    onChangeText={(text) => setNomeEmpresa(text)}
                    value={nomeEmpresa}
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      backgroundColor: "#025A90",
                      padding: 20,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        textAlign: "center",
                        fontWeight: 600,
                      }}
                    >
                      Descreva a sua empresa
                    </Text>
                  </View>
                  <TextInput
                    placeholder="Digite aqui..."
                    placeholderTextColor="white"
                    style={{
                      backgroundColor: "#04192C",
                      color: "white",
                      padding: 20,
                      textAlign: "center",
                      borderBottomRightRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}
                    onChangeText={(text) => setDescricaoEmpresa(text)}
                    value={descricaoEmpresa}
                  />
                </View>
           


            <TouchableOpacity
              style={{
                backgroundColor: '#04192C',
                width: '100%',
                padding: 15,
                alignSelf: 'center',
                borderRadius: 10,
                marginBottom: 50
              }}
              onPress={handleProntoPress}
              
              >
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 600,
                  fontSize: 20,
                }}>
                Pronto!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

const ListagemProduto = ({navigation}) => {
  
  const { produtos, removerProduto } = useSmartContext()

  const editarProduto = (produto) => {
    navigation.navigate('EditarProduto', { produto, onSave: atualizarProduto });
  };

  // Função para atualizar o produto após a edição
  const atualizarProduto = (produtoAtualizado) => {
    const produtosAtualizados = produtos.map((p) => {
      if (p.id === produtoAtualizado.id) {
        return produtoAtualizado;
      }
      return p;
    });
    setProdutos(produtosAtualizados);
  };


  return(
    <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#00284D',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#00284D',
              justifyContent: 'space-around',
              width: "100%",
              height: "100%",
              padding: 50,
              marginTop: 30
            }}>
           
           {produtos.length === 0 ? (
              <Text style={{ textAlign: 'center', fontSize: 18, color: 'white' }}>
                Não há produtos cadastrados.
              </Text>
            ) : (
              produtos.map((produto, index) => (
                <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Inputting
                    texto={`Produto: ${produto.nome}`}
                    outroTexto={`Descrição: ${produto.descricao}`}
                  />
                  <TouchableOpacity onPress={() => removerProduto(index)} style={{ height: "100%" }}>
                    <Icon name="trash" size={24} color="red" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => editarProduto(produto)}>
                    <Icon name="pencil" size={24} color="blue" />
                  </TouchableOpacity>
                </View>
              ))
            )}

          </View>
        </View>
    </View>
  )
}

const ListagemEmpresa = ({navigation}) => {
  
  const { empresas, removerEmpresa } = useSmartContext()

  const editarEmpresa = (empresa) => {
    navigation.navigate('EditarEmpresa', { empresa, onSave: atualizarEmpresa });
  };

  // Função para atualizar o produto após a edição
  const atualizarEmpresa = (empresaAtualizada) => {
    const empresasAtualizadas = empresas.map((e) => {
      if (e.id === empresaAtualizada.id) {
        return empresaAtualizada;
      }
      return e;
    });
    setEmpresas(empresasAtualizadas);
  };


  return(
    <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#00284D',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#00284D',
              justifyContent: 'space-around',
              width: "100%",
              height: "100%",
              padding: 50,
              marginTop: 30
            }}>
           
           {empresas.length === 0 ? (
              <Text style={{ textAlign: 'center', fontSize: 18, color: 'white' }}>
                Não há empresas cadastradas.
              </Text>
            ) : (
              empresas.map((empresa, index) => (
                <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Inputting
                    texto={`Empresa: ${empresa.nome}`}
                    outroTexto={`Descrição: ${empresa.descricao}`}
                  />
                  <TouchableOpacity onPress={() => removerEmpresa(index)} style={{ height: "100%" }}>
                    <Icon name="trash" size={24} color="red" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => editarEmpresa(empresa)}>
                    <Icon name="pencil" size={24} color="blue" />
                  </TouchableOpacity>
                </View>
              ))
            )}

          </View>
        </View>
    </View>
  )
}

const EditarProduto = ({ route, navigation }) => {

  const { produto, onSave } = route.params;
  const { atualizarProduto } = useSmartContext();
  const [novoNome, setNovoNome] = useState(produto.nome);
  const [novaDescricao, setNovaDescricao] = useState(produto.descricao);

  const handleSalvarPress = () => {
    const produtoAtualizado = { ...produto, nome: novoNome, descricao: novaDescricao };
    atualizarProduto(produtoAtualizado);
    navigation.navigate('ListagemProduto'); // Volta para a lista após salvar
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#00284D', padding: 20 }}>
      <Text style={{ color: 'white', fontSize: 20, marginBottom: 10 }}>Editar Produto</Text>
      <TextInput
        placeholder="Nome do Produto"
        placeholderTextColor="white"
        style={{ backgroundColor: '#04192C', color: 'white', padding: 15, borderRadius: 10, marginBottom: 10 }}
        onChangeText={(text) => setNovoNome(text)}
        value={novoNome}
      />
      <TextInput
        placeholder="Descrição do Produto"
        placeholderTextColor="white"
        style={{ backgroundColor: '#04192C', color: 'white', padding: 15, borderRadius: 10, marginBottom: 20 }}
        onChangeText={(text) => setNovaDescricao(text)}
        value={novaDescricao}
      />
      <TouchableOpacity
        style={{ backgroundColor: '#04192C', padding: 15, borderRadius: 10 }}
        onPress={handleSalvarPress}
      >
        <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Pronto</Text>
      </TouchableOpacity>
    </View>
  );
};

const EditarEmpresa = ({ route, navigation }) => {

  const { empresa, onSave } = route.params;
  const { atualizarEmpresa } = useSmartContext();
  const [novoNome, setNovoNome] = useState(empresa.nome);
  const [novaDescricao, setNovaDescricao] = useState(empresa.descricao);

  const handleSalvarPress = () => {
    const empresaAtualizada = { ...empresa, nome: novoNome, descricao: novaDescricao };
    atualizarEmpresa(empresaAtualizada);
    navigation.navigate('ListagemEmpresa'); // Volta para a lista após salvar
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#00284D', padding: 20 }}>
      <Text style={{ color: 'white', fontSize: 20, marginBottom: 10 }}>Editar Empresa</Text>
      <TextInput
        placeholder="Nome da Empresa"
        placeholderTextColor="white"
        style={{ backgroundColor: '#04192C', color: 'white', padding: 15, borderRadius: 10, marginBottom: 10 }}
        onChangeText={(text) => setNovoNome(text)}
        value={novoNome}
      />
      <TextInput
        placeholder="Descrição da Empresa"
        placeholderTextColor="white"
        style={{ backgroundColor: '#04192C', color: 'white', padding: 15, borderRadius: 10, marginBottom: 20 }}
        onChangeText={(text) => setNovaDescricao(text)}
        value={novaDescricao}
      />
      <TouchableOpacity
        style={{ backgroundColor: '#04192C', padding: 15, borderRadius: 10 }}
        onPress={handleSalvarPress}
      >
        <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Pronto</Text>
      </TouchableOpacity>
    </View>
  );
};



export default function App() {
  return (
    <SmartSellersProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: 'SmartSellers',
                headerStyle: {
                  backgroundColor: '#025A90',
                  height: 150
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontSize: 30,
                  fontWeight: 700
                },
                headerTitleAlign: 'center'
              }}
            />
            <Stack.Screen
              name="FormularioProduto"
              component={FormularioProduto}
              options={{
                title: 'Produto',
                headerStyle: {
                  backgroundColor: '#025A90',
                  height: 150
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontSize: 30,
                  fontWeight: 700
                },
                headerTitleAlign: 'center'
              }}
            />
            
            <Stack.Screen
              name="FormularioEmpresa"
              component={FormularioEmpresa}
              options={{
                title: 'Cadastro',
                headerStyle: {
                  backgroundColor: '#025A90',
                  height: 150
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontSize: 30,
                  fontWeight: 700
                },
                headerTitleAlign: 'center'
              }}
            />
            <Stack.Screen
              name="ListagemProduto"
              component={ListagemProduto}
              options={{
                title: 'Produtos',
                headerStyle: {
                  backgroundColor: '#025A90',
                  height: 150
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontSize: 30,
                  fontWeight: 700
                },
                headerTitleAlign: 'center'
              }}
            />
            <Stack.Screen
              name="ListagemEmpresa"
              component={ListagemEmpresa}
              options={{
                title: 'Empresas',
                headerStyle: {
                  backgroundColor: '#025A90',
                  height: 150
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontSize: 30,
                  fontWeight: 700
                },
                headerTitleAlign: 'center'
              }}
            />
            <Stack.Screen
              name="EditarProduto"
              component={EditarProduto}
              options={{
                title: 'Editar Produto',
                headerStyle: {
                  backgroundColor: '#025A90',
                  height: 150
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontSize: 30,
                  fontWeight: 700
                },
                headerTitleAlign: 'center'
              }}
            />
            <Stack.Screen
              name="EditarEmpresa"
              component={EditarEmpresa}
              options={{
                title: 'Editar Empresa',
                headerStyle: {
                  backgroundColor: '#025A90',
                  height: 150
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontSize: 30,
                  fontWeight: 700
                },
                headerTitleAlign: 'center'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        </SmartSellersProvider>
  );
}
