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
  Modal,
  Alert
} from 'react-native';

const { width, height } = Dimensions.get('screen');






  export default class LoginForm extends Component{
    constructor(props) {
    super(props)
    this.state = {
      loading: false,
      openModalLogin: false,
      openModalPatente: false,
      rut:'',
      patente:'',
      vehiculo: {
        modelo: '',
        ano: '',
        color: '',
      },
    }
  }

  fetchDataLogin() {

    try{
      console.log(this.state.rut)
      console.log(this.state.patente)
    fetch('http://innovawebdesarrollo.cl/let/index.php/API/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'rut=' + encodeURIComponent(this.state.rut) + '&'
        + 'plate=' + encodeURIComponent(this.state.patente)
    })
      .then((response) => response.json())

      .then((responseData) => {
        console.log('sds'),
        this.setState({
          mensajeRegistro: responseData.mensaje,
          tokenUsuario: responseData.token,

        })
      }).then(
        () => this.handleLogin()
      )
      .catch((error) => {
        console.log('error')
      });

    }catch(err){
      console.log(err)
    }


  }


  handleLogin() {
    if (this.state.mensajeRegistro == 'Ok') {
      this.props.navigation.navigate('terms')
    } else {
      console.log('Login Incorrecto')
      this.setState({
        openModal: true,
      })
    }
  }


  formateaRut(rut){
    var actual = rut.replace(/^0+/, "");
    if (actual != '' && actual.length > 0) {
                var sinPuntos = actual.replace(/\./g, "");
                var actualLimpio;
                if(actual != '' && actual.length >= 1){
                    actualLimpio = sinPuntos.replace(/-/g, "");
                }

    try{
                    var inicio = (actualLimpio != 'undefined') ? actualLimpio.substring(0, actualLimpio.length - 1) : '';
                    var rutPuntos = "";
                    var i = 0;
                    var j = 1;
                    for (i = inicio.length - 1; i >= 0; i--) {
                        var letra = inicio.charAt(i);
                        rutPuntos = letra + rutPuntos;
                        if (j % 3 == 0 && j <= inicio.length - 1) {
                            rutPuntos = "." + rutPuntos;
                        }
                        j++;
                    }
                    var dv = actualLimpio.substring(actualLimpio.length - 1);
                    rutPuntos = rutPuntos + (rutPuntos.length > 2 ? "-" : "") + dv;


                    this.setState({
                        rut: rutPuntos
          });



                }catch(err){
                    // console.log(err)
                    
                }
            }
            return rutPuntos;


  }

  formarteandoRut(value) {
            this.formateaRut(value.toUpperCase());
        }


        validarPatente(value){

            var patron1  = /[A-Z]{2}[A-Z]{2}[0-9]{2}/;
            var patron2  = /[A-Z]{2}[0-9]{2}[0-9]{2}/;
          if(value.length == 6){

            if(patron1.test(value) || patron2.test(value)){
                this.setState({
                        patente: value
                          });
            }else{
            this.setState({
                        openModalPatente: true
                          });
            }

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
              value={this.state.rut}
              maxLength={12}
              onChangeText={(value) => this.formarteandoRut(value)}
              underlineColorAndroid="transparent"
              style={styles.input} 

            /> 
            <Text style={styles.textoPatente}>
              Patente:
            </Text> 
            <TextInput
              maxLength={6}
              onChangeText={(text)=> this.setState({patente: text})}
              underlineColorAndroid="transparent"
              style={styles.input} 
            /> 

            <TouchableWithoutFeedback
                      onPress={() => this.fetchDataLogin()}>
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
                <Modal
                  visible={this.state.openModalPatente}
                  transparent={true}
                  animationType={'slide'}
                  onRequestClose={() => this.setState({ openModalPatente: false })}
                >
                  <View style={styles.modalConfirmation}>
                    <View style={styles.containerModal}>
                      <View style={styles.bordeModal}>
                        <View style={{flex:1}}>
                          <Text style={{textAlign: 'center', fontSize: 24, color:'black'}}>Error</Text>
                          <Text style={{textAlign: 'center', fontSize: 20}}>La Patente debe estar en el siguiente formato:</Text>
                          <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
                            <Text style={{textAlign: 'center', fontSize: 20, color:'black'}}>AA9999</Text>
                            <Text style={{textAlign: 'center', fontSize: 20, color:'black'}}>o</Text>
                            <Text style={{textAlign: 'center', fontSize: 20, color:'black'}}>AAAA99</Text>
                          </View>



                          
                        </View>
                        
                      </View>
                      <TouchableWithoutFeedback onPress={() => this.setState({ openModalPatente: false })}>
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