import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  Modal
} from 'react-native';

const { width, height } = Dimensions.get('screen');

  export default class LoginForm extends Component{
    constructor(props) {
    super(props)
    this.state = {
      loading: false,
      openModalLogin: true,
      user: {
        rut: '',
        patente: '',
        token: '',
      },
    }
  }

  fetchDataLogin() {
    var patente = this.state.patente1+this.state.patente2+this.state.patente3;
    fetch('url', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'email=' + encodeURIComponent(this.state.rut) + '&'
        + 'password=' + encodeURIComponent(patente),
    })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          mensajeRegistro: responseData.mensaje,
          tokenUsuario: responseData.token
        })
      }).then(
        () => this.handleLogin()
      )
      .catch((error) => {
        console.log(error)
      });
  }

  handleLogin() {
    if (this.state.mensajeRegistro == 'Ok') {
      AsyncStorage.setItem('token', this.state.tokenUsuario);
      this.props.navigation.navigate('bienvenida', { item: 'bienvenida', token: this.state.tokenUsuario})
    } else {
      console.log('Login Incorrecto')
      this.setState({
        openModal: true,
      })
    }
  }


    render(){
      const { navigate, goBack } = this.props.navigation
      return(
          <View style={styles.container}> 
            <Text style={styles.textoRut}>
              RUT Asegurado:
            </Text> 
            <TextInput
              style={styles.input} 
            /> 
            <Text style={styles.textoPatente}>
              Patente:
            </Text> 
            <TextInput
              style={styles.input} 
            /> 

            <TouchableWithoutFeedback
                      onPress={() => navigate('terms')}>
                    <Image source={require('../assets/images/botones/bt-continuar.png')}
                      style={styles.btnIngresar} />
            </TouchableWithoutFeedback>

            <Modal
                  visible={this.state.openModalLogin}
                  transparent={true}
                  animationType={'fade'}
                  onRequestClose={() => this.setState({ openModalMarca: false })}
                >
                  <View style={styles.modalConfirmation}>
                    <View style={styles.containerModal}>
                      <View style={styles.bordeModal}>
                        <View style={{flex:1, alignItems:'center'}}>

                          



                          
                        </View>
                        
                      </View>
                      <TouchableWithoutFeedback onPress={() => this.setState({ openModalLogin: false })}>
                        <Image source={require('../assets/modal/bt-cerrar.png')}
                          style={styles.btnCerrarModal} />
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                </Modal>
          </View> 
        )
    }
  }


  const styles = StyleSheet.create({
  container: {
    padding: 0,
    height: height * 0.5,
    marginHorizontal: 20,
    marginVertical: 0,
    backgroundColor: 'white',
    alignItems:'center',
    borderRadius: 10,
  },
  input: {
    height: height * 0.06,
    width: width * 0.8,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom: 0.5,
    borderColor: '#ccc',
    borderWidth: 1,
    color: 'black',
    borderRadius: 10,
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0,


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
  btnIngresar: {
    paddingTop: height * 0.2,
    width: width * 0.8,
    height: height * 0.09,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
    alignItems:'center',
    justifyContent: 'center',
  },
  modalConfirmation: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  containerModal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bordeModal: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: height * 0.3,
    width: width * 0.7,
    borderRadius: width * 0.02,
    borderColor: 'white',
    borderWidth: 0.666,
    backgroundColor: 'white',
  },
  iconoAyudaModal: {
    width: width * 0.14,
    height: height * 0.14,
    resizeMode: 'contain',
    marginLeft: width * 0.03,

  },
  iconoConfirmacionModal: {
    width: width * 0.15,
    height: height * 0.15,
    resizeMode: 'contain',
    marginLeft: width * 0.03,
  },
  btnCerrarModal: {
    position: 'absolute',
    top: -(height * 0.04),
    right: -(width * 0.04),
    width: 50,
    height: 50,

  },
  inputModal: {
    height: height * 0.2,
    width: width * 0.3,
    borderColor: '#ccc',
    borderWidth: 1,
    color: 'black',
    borderRadius: 10,
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  textAreaRutModal: {
    height: height * 0.08,
    width: width * 0.5,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  btnIngresarModal: {
    height: height * 0.05,
    width: width * 0.3,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
    paddingTop: height * 0.1
    

  },
})