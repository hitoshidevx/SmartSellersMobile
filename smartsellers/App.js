import React, { useState } from 'react';
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
import axios from 'axios'
import banner from './assets/bannerChatbot.jpg'
import chatbotImage from './assets/chatbotCelular.png'

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

  const Menu = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{alignSelf: "center"}}>
      <Pressable onPress={() => setModalVisible(true)} >
      </Pressable>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
      
      <View style= {{backgroundColor: "#025A90", width: "50%", height: "25%", alignSelf: "flex-end"}}>

        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>  
          <Pressable onPress={() => setModalVisible(false)}>
          </Pressable>
        </View>

        <View>
          <Text style = {estilos.textoMenu}>Sobre nós</Text>
          <Text style = {estilos.textoMenu}>Cases</Text>
          <Text style = {estilos.textoMenu}>Soluções</Text>
          <Text style = {estilos.textoMenu}>Planos</Text>
          <Text style = {estilos.textoMenu}>Contato</Text>
        </View>

        </View>
      </Modal>
    </View>
  )
}
  return (
    <View style = {{flex: 1}}>
      <View style={{ flex: 1, backgroundColor: '#025A90', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={estilos.nomeEmpresa}> SmartSellers </Text>
        <Menu/>
      </View>

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

          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              Saiba Mais!
            </Text>
          </Pressable>
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



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
