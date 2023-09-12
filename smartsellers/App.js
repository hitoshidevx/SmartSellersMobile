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
import { useProduto } from './ProdutoContext';
import { ProdutoProvider } from './ProdutoContext';

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
            onPress={() => navigation.navigate('Formulario')}>
            <Text
              style={estilos.textoBotao}>
              Prosseguir
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

const EditarProduto = ({ route, navigation }) => {

  const { produto, onSave } = route.params;
  const { atualizarProduto } = useProduto();
  const [novoNome, setNovoNome] = useState(produto.nome);
  const [novaDescricao, setNovaDescricao] = useState(produto.descricao);

  const handleSalvarPress = () => {
    const produtoAtualizado = { ...produto, nome: novoNome, descricao: novaDescricao };
    atualizarProduto(produtoAtualizado);
    navigation.navigate('Listagem'); // Volta para a lista após salvar
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

const Formulario = ({navigation}) => {

  const {adicionarProduto} = useProduto();

  const [nomeProduto, setNomeProduto] = useState("")
  const [descricaoProduto, setDescricaoProduto] = useState("")

  const handleProntoPress = () => {
    adicionarProduto(nomeProduto, descricaoProduto);
    navigation.navigate('Listagem');
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

const Listagem = ({navigation}) => {
  
  const { produtos, removerProduto } = useProduto()

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


export default function App() {
  return (
    <ProdutoProvider>
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
              name="Formulario"
              component={Formulario}
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
              name="Listagem"
              component={Listagem}
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
              name="EditarProduto"
              component={EditarProduto}
              options={{
                title: 'Editar',
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
        </ProdutoProvider>
  );
}
