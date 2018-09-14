import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  AsyncStorage,
  ActivityIndicator,
  TouchableWithoutFeedback,
  TextInput,
  Alert,
  Modal,
  StatusBar,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from '../components/LoginForm'

import Orientation from 'react-native-orientation';

const { width, height } = Dimensions.get('screen');

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  componentWillMount(){
    Orientation.lockToPortrait();
  }


  
  

  render(){
    const { navigate, goBack } = this.props.navigation

    return(
        <ImageBackground source={require('../assets/foto-fondo-login.png')}
          style={styles.imageBackground}>
          <KeyboardAvoidingView behavior="padding" style={styles.container}> 
            <View style={styles.logoContainer}> 
              <Image source={require('../assets/images/logos/logo-let.png')}
                     style={styles.logoLet}
              />
              <Image source={require('../assets/images/logos/titulo-let.png')}
                     style={styles.logoLet}
              />



            </View>
            <View style={styles.formContainer}>
              <LoginForm navigation={this.props.navigation}/>

            </View>


          </KeyboardAvoidingView>
          </ImageBackground>
      
   


      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    
  },
  imageBackground: {
    flex: 1,
    width: width,
    height: height,
    
    
  },
  logoLet: {
    width: 300,
    height: 100,
    
  },
  logoTitulo: {
    width: width * 0.9,
    height: height * 0.10,
    
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'

  },
  contentSplit: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingLeft: 23,
    paddingRight: 23,
    paddingBottom: 23,
    

  },
    contentIn:{
    flex:1,
    backgroundColor: '#F7FDFD',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',    

    
  },
  textoRut: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    marginTop: 30,
  },
  textoPatente: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    marginTop: 30,
  },
  groupForm: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  input: {
    height: height * 0.2,
    width: width * 0.35,
    borderColor: '#ccc',
    borderWidth: 1,
    color: 'black',
    borderRadius: 10,
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  textArea: {
    height: height * 0.05,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  textAreaRut: {
    height: height * 0.08,
    width: width * 0.80,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  btnIngresar: {
    width: width * 0.8,
    height: height * 0.10,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
    alignItems:'center',
    justifyContent: 'center'
  },
  formContainer: {
    paddingBottom: height * 0.05

  },

})

