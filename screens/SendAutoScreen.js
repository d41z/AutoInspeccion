import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  Alert,
  Modal,
  TextInput
} from 'react-native';
import Orientation from 'react-native-orientation';

const { width, height } = Dimensions.get('screen');

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

export default class SendAutoScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabledButton: true,
      openModal: false,
      acuerdo: false,
      

    }
  }

  componentWillMount(){
    Orientation.lockToPortrait();

  }

  goToScreen(){
    if (Platform.OS == 'ios') {
      Orientation.lockToLandscapeRight();
    }else{
      Orientation.lockToLandscapeLeft();    
    }
    this.props.navigation.navigate('accSelectionScreen')
  }

 


  render() {
    const { width, height } = Dimensions.get('screen');

    return (

      <View style={styles.container}>
        <ImageBackground source={require('../assets/others/fondo-titulos.png')}
          style={styles.fondoHeader}>

           <View style={styles.containHeader}>

               <Image source={require('../assets/others/icono-titulos.png')}
                style={styles.logoLet} />
                <Text style={styles.textHeader}>
                  ENVÍO AUTOINSPECCIÓN
                </Text>
            </View>


         </ImageBackground>
         <ImageBackground source={require('../assets/fondo-danos.jpg')}
          style={styles.fondoBody}> 
            <View style={styles.Body}>
                <View style={{flex:1, alignItems:'center', paddingHorizontal: width * 0.05, paddingVertical: height * 0.05}}>
                  <Text style={{textAlign: 'center', fontFamily: 'FiraSans-Medium', color: 'black'}}>
                  LA AUTOINSPECCIÓN HA FINALIZADO
                  </Text>
                  <Text style={{textAlign: 'center', fontFamily: 'FiraSans-Regular', color: 'black'}}>
                  Ingrese el email en el que quiere recibir el informe de inspección al finalizar el proceso
                  </Text>

                  <Text style={{textAlign: 'center', fontFamily: 'FiraSans-Black', color: 'black', paddingTop: height * 0.02}}>
                  Email
                  </Text>
                  <TextInput
                        style={[styles.input, styles.textAreaInput]} placeholderTextColor='white'
                        underlineColorAndroid="transparent"
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.rut} />

                  <Text style={{textAlign: 'center', fontFamily: 'FiraSans-Black', color: 'black', paddingTop: height * 0.02}}>
                  Reingresa tu mail
                  </Text>
                  <TextInput
                        underlineColorAndroid="transparent"
                        style={[styles.input, styles.textAreaInput]} placeholderTextColor='white'
                        onChangeText={(email2) => this.setState({ email2 })}
                        value={this.state.rut} />

                  <View style={{flex:1, flexDirection: 'row', alignItems: 'center', paddingTop: height * 0.04}}>
                  <TouchableWithoutFeedback
                      onPress={() => this.setState({acuerdo: true})}>
                    {this.state.acuerdo ? <Image style={styles.img} source={require('../assets/images/botones/bt-radio-on.png')} /> : <Image style={styles.img} source={require('../assets/images/botones/bt-radio-off.png')} />}
                  </TouchableWithoutFeedback>
                    <Text style={{textAlign: 'left', fontFamily: 'FiraSans-Regular', color: 'black'}}>
                     Declaro que toda la información proporcionada por mi es correcta y verdadera. Declaro ser responsable de la veracidad de mis afirmaciónes.
                    </Text>
                  </View>
                  
                    
                  

                </View>
                <TouchableWithoutFeedback
                      onPress={() => this.props.navigation.navigate('xxx')}>
                    <Image source={require('../assets/images/botones/bt-confirmar.png')}
                      style={styles.btnIngresar} />
                  </TouchableWithoutFeedback>


            </View>



          </ImageBackground>
          <Modal
                  visible={this.state.openModal}
                  transparent={true}
                  animationType={'fade'}
                  onRequestClose={() => this.setState({ openModal: false })}
                >
                  <View style={styles.modalConfirmation}>
                    <View style={styles.containerModal}>
                      <View style={styles.bordeModal}>
                        <View style={{flex:1, alignItems:'center', paddingHorizontal: width * 0.05}}>
                          
                          <Image  source={require('../assets/others/icono-titulos.png')} 
                                style={styles.logitoLet}/>

                          <Text style={{textAlign: 'center', fontFamily: 'FiraSans-Regular', color: 'black'}}>
                          Presiona el botón de la zona afectada y sube la foto. Presiona Continuar sólo cuando 
                          termines de sacar las fotos.
                          </Text>

                          <TouchableWithoutFeedback
                                onPress={() => this.goToScreen()}>
                          <Image  source={require('../assets/images/botones/bt-ok.png')} 
                                style={styles.btOk}/>
                          </TouchableWithoutFeedback>


                          



                          
                        </View>
                        
                      </View>
                      
                    </View>
                  </View>
                </Modal>
            
        
      </View>

    );
  }
}

 const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'transparent',
        flex: 1,
        alignItems: 'center',
        width: width,
        height: height
    },
    containHeader: {
        flexDirection: 'row',
        height: height * 0.1,
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingHorizontal: 20,
        borderColor: 'grey',
        borderBottomWidth: 0,
    },
    fondoHeader: {
        width: width,
        height: height * 0.1,
        backgroundColor: 'transparent',
    },
     fondoBody: {
        backgroundColor: 'transparent',
        height: height * 0.9,
        width: width,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoLet: {
        width: width * 0.15,
        height: height * 0.3,
        resizeMode: 'contain',
    },
    textHeader: {
        textAlign: 'center',
        fontFamily: 'FiraSans-Black',
        fontSize: 18,
        color: 'black'
    },
    btnSi:{
    width: width * 0.3,
    height: height * 0.2,
    resizeMode: 'contain',
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
  logitoLet:{
    width: width * 0.15,
    height: height * 0.1,
    resizeMode: 'contain',

  },
  btOk: {
    width: width * 0.25,
    height: height * 0.1,
    resizeMode: 'contain'
  },
  Body:{
    height: height * 0.7,
    width: width*0.8,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center'
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
  textAreaInput: {
    height: height * 0.08,
    width: width * 0.6,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  img:{
        height:20,
        width: 20,
    },
btnIngresar: {
    width: width * 0.75,
    height: height * 0.1,
    resizeMode: 'contain',
    alignItems:'center',
    justifyContent: 'center',
  },

  
  

  })