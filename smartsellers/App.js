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
import { SmartContexto } from './contexto/context';
import { useSmartControl } from './control/useSmartControl';

const Stack = createStackNavigator();


const Home = ({ navigation }) => {

  const estilos = StyleSheet.create({

    textoBanner: {
      color: 'white',
      fontWeight: 500,
      fontSize: 30,
      marginLeft: 20,
    },

    botao: {
      backgroundColor: '#04192C',
      width: 150,
      height: 40,
      marginLeft: 20,
      marginTop: 20,
      borderRadius: 15,
    },

    textoBotao: {
      color: 'white',
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 500,
      marginTop: 7,
    },

    nomeEmpresa: {
      color: 'white',
      fontSize: 20,
      fontWeight: 500,
      marginTop: 10,
      textAlign: 'left'
    },

    textoPrincipal: {
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
    <View style={{ flex: 1 }}>

      <View style={{ flex: 5 }}>
        <ImageBackground
          source={banner}
          style={{ height: '100%', width: '100%' }}>
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
          
          <TouchableOpacity
            style={estilos.botao}
            onPress={() => navigation.navigate('ListagemProduto')}>
            <Text
              style={estilos.textoBotao}>
              Lista de Produtos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={estilos.botao}
            onPress={() => navigation.navigate('ListagemEmpresa')}>
            <Text
              style={estilos.textoBotao}>
              Lista de Empresas
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <View
        style={{
          flex: 3,
          backgroundColor: '#025A90',
          height: 442,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row'
        }}>
        <Text style={estilos.textoPrincipal}>
          O chatbot que vai <Text style={{ color: 'orange' }}>elevar</Text> a jornada do consumidor ao próximo nível!
        </Text>
        <Image style={{ width: '30%', height: '40%' }} source={chatbotImage} />
      </View>
    </View>
  );
}

const Inputting = ({ texto, outroTexto }) => {

  return (
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


const FormularioProduto = ({ navigation }) => {

  const [nomeProduto, setNomeProduto] = useState("")
  const [descricaoProduto, setDescricaoProduto] = useState("")
  const [precoProduto, setPrecoProduto] = useState("")

  const [nomeProdutoErro, setNomeProdutoErro] = useState("")
  const [descricaoProdutoErro, setDescricaoProdutoErro] = useState("")
  const [precoProdutoErro, setPrecoProdutoErro] = useState("")

  const { salvarProduto } = useContext(SmartContexto)

  return (
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
                Insira o preço do produto
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
              onChangeText={(text) => setPrecoProduto(text)}
              value={precoProduto}
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
            onPress={() => {
              salvarProduto({ nomeProduto, descricaoProduto, precoProduto })
                .then(() => {
                  navigation.navigate("ListagemProduto")
                })
                .catch((errors) => {
                  errors.inner.forEach(e => {
                    console.log(e.message, e.path)
                    if (e.path === "nomeProduto") {
                      setNomeProdutoErro(e.message)
                    } else if (e.path === "descricaoProduto") {
                      setDescricaoProdutoErro(e.message)
                    } else if (e.path === "precoProduto") {
                      setPrecoProdutoErro(e.message)
                    }
                  });
                })
            }}

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

const FormularioEmpresa = ({ navigation }) => {

  const [nomeEmpresa, setNomeEmpresa] = useState("")
  const [descricaoEmpresa, setDescricaoEmpresa] = useState("")

  const [nomeEmpresaErro, setNomeEmpresaErro] = useState("")
  const [descricaoEmpresaErro, setDescricaoEmpresaErro] = useState("")

  const { salvarEmpresa } = useContext(SmartContexto);

  return (
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
            onPress={() => {
              salvarEmpresa({ nomeEmpresa, descricaoEmpresa })
                .then(() => {
                  navigation.navigate("ListagemEmpresa");
                })
                .catch((errors) => {
                  errors.inner.forEach(e => {
                    console.log(e.message, e.path)
                    if (e.path === "nomeEmpresa") {
                      setNomeEmpresaErro(e.message)
                    } else if (e.path === "descricaoEmpresa") {
                      setDescricaoEmpresaErro(e.message)
                    }
                  });
                })
            }}

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

const ListagemProduto = ({ navigation }) => {

  // const { produtos, removerProduto } = useSmartContext()

  const { estado, deletarProduto, editarProduto, changeProduto } = useContext(SmartContexto);

  return (
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

          {estado.listaProduto.length === 0 ? (
            <Text style={{ textAlign: 'center', fontSize: 18, color: 'white' }}>
              Não há produtos cadastrados.
            </Text>
          ) : (
            estado.listaProduto.map((produto, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Inputting
                  texto={`Produto: ${produto.nomeProduto}`}
                  outroTexto={`Descrição: ${produto.descricaoProduto}`}
                />
                <TouchableOpacity onPress={() => deletarProduto(produto)} style={{ height: "100%" }}>
                  <Icon name="trash" size={24} color="red" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("EditarProduto", { produto })}>
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

const ListagemEmpresa = ({ navigation }) => {

  // const { produtos, removerProduto } = useSmartContext()

  const { estado, deletarEmpresa } = useContext(SmartContexto);

  return (
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

          {estado.listaEmpresa.length === 0 ? (
            <Text style={{ textAlign: 'center', fontSize: 18, color: 'white' }}>
              Não há empresas cadastradas.
            </Text>
          ) : (
            estado.listaEmpresa.map((empresa, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Inputting
                  texto={`Empresa: ${empresa.nomeEmpresa}`}
                  outroTexto={`Descrição: ${empresa.descricaoEmpresa}`}
                />
                <TouchableOpacity onPress={() => deletarEmpresa(empresa)} style={{ height: "100%" }}>
                  <Icon name="trash" size={24} color="red" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("EditarEmpresa", { empresa })}>
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

  const { produto } = route.params || {};

  const { editarProduto } = useContext(SmartContexto)

  const [novoNome, setNovoNome] = useState(produto.nomeProduto);
  const [novaDescricao, setNovaDescricao] = useState(produto.descricaoProduto);
  const [novoPreco, setNovoPreco] = useState(produto.precoProduto)

  return (
    <View style={{ flex: 1, backgroundColor: '#00284D', padding: 20 }}>
      <Text style={{ color: 'white', fontSize: 20, marginBottom: 10 }}>Editar Produto</Text>
      <TextInput
        placeholder="Novo Nome do Produto"
        placeholderTextColor="white"
        style={{ backgroundColor: '#04192C', color: 'white', padding: 15, borderRadius: 10, marginBottom: 10 }}
        onChangeText={(text) => setNovoNome(text)}
        value={novoNome}
      />
      <TextInput
        placeholder="Nova Descrição do Produto"
        placeholderTextColor="white"
        style={{ backgroundColor: '#04192C', color: 'white', padding: 15, borderRadius: 10, marginBottom: 20 }}
        onChangeText={(text) => setNovaDescricao(text)}
        value={novaDescricao}
      />

      <TextInput
        placeholder="Novo Preço do Produto"
        placeholderTextColor="white"
        style={{ backgroundColor: '#04192C', color: 'white', padding: 15, borderRadius: 10, marginBottom: 20 }}
        onChangeText={(text) => setNovoPreco(text)}
        value={novoPreco}
      />
      <TouchableOpacity
        style={{ backgroundColor: '#04192C', padding: 15, borderRadius: 10 }}
        onPress={() => {
          editarProduto({
            id: produto.id,
            nomeProduto: novoNome,
            descricaoProduto: novaDescricao,
            precoProduto: novoPreco,
          })
          .then(() => {
            navigation.navigate("ListagemProduto");
          })
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Pronto</Text>
      </TouchableOpacity>
    </View>
  );
};

const EditarEmpresa = ({ route, navigation }) => {

  const { empresa } = route.params || {};

  const { editarEmpresa } = useContext(SmartContexto)

  const [novoNome, setNovoNome] = useState(empresa.nomeEmpresa);
  const [novaDescricao, setNovaDescricao] = useState(empresa.descricaoEmpresa);

  return (
    <View style={{ flex: 1, backgroundColor: '#00284D', padding: 20 }}>
      <Text style={{ color: 'white', fontSize: 20, marginBottom: 10 }}>Editar Produto</Text>
      <TextInput
        placeholder="Novo Nome do Produto"
        placeholderTextColor="white"
        style={{ backgroundColor: '#04192C', color: 'white', padding: 15, borderRadius: 10, marginBottom: 10 }}
        onChangeText={(text) => setNovoNome(text)}
        value={novoNome}
      />
      <TextInput
        placeholder="Nova Descrição do Produto"
        placeholderTextColor="white"
        style={{ backgroundColor: '#04192C', color: 'white', padding: 15, borderRadius: 10, marginBottom: 20 }}
        onChangeText={(text) => setNovaDescricao(text)}
        value={novaDescricao}
      />

      <TouchableOpacity
        style={{ backgroundColor: '#04192C', padding: 15, borderRadius: 10 }}
        onPress={() => {
          editarEmpresa({
            id: empresa.id,
            nomeEmpresa: novoNome,
            descricaoEmpresa: novaDescricao
          })
          .then(() => {
            navigation.navigate("ListagemEmpresa");
          })
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Pronto</Text>
      </TouchableOpacity>
    </View>
  );
};



export default function App() {

  const smartControl = useSmartControl();

  return (
    <SmartContexto.Provider value={smartControl}>
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
    </SmartContexto.Provider>
  );
}
