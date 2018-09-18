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
  TextInput,
  KeyboardAvoidingView,
  Modal
} from 'react-native';

const { width, height } = Dimensions.get('screen');


export default class InfoCar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabledButton: true,
      openModalMarca: false,
      openModalModelo: false,
      openModalAno: false,
      openModalColor: false
    }
  }



  render(){
    const { width, height } = Dimensions.get('screen');
    return(
      <View style={styles.container}>
        <ImageBackground source={require('../assets/others/fondo-titulos.png')}
          style={styles.fondoHeader}>

           <View style={styles.containHeader}>

               <Image source={require('../assets/others/icono-titulos.png')}
                style={styles.logoLet} />
                <Text style={styles.textHeader}>
                  INFORMACIÓN DEL VEHÍCULO
                </Text>

            </View>


         </ImageBackground>

         
          
          

          <KeyboardAvoidingView behavior="padding" style={styles.containIn} keyboardVerticalOffset={-100}>

              <View style={styles.containInfo}>
                  <Image source={require('../assets/others/icono-info-automovil.png')}
                         style={styles.logoAuto} />

                  
                  <View style={{flex: 1, paddingTop: height * 0.05}}>
                    <Text style={{fontFamily: 'FiraSans-Black', color: 'black'}}>Patente:</Text>
                    <Text></Text>
                    <Text style={{fontFamily: 'FiraSans-Regular', color: 'black'}}>Revisa la informacíon y editalade ser necesario</Text>
                  </View>


                  
              </View>

              <View style={{alignItems: 'center'}}>
              <Image source={require('../assets/others/linea-info-vehiculo.png')}
                     style={styles.imgLinea} />

              </View>
            
            <View style={styles.groupForm}>
                    <Text style={{fontFamily: 'FiraSans-Regular', color: 'black'}}>Marca</Text>
                      <View style={{flexDirection: 'row'}}>
                        <TextInput
                        editable={false}
                        style={[styles.input, styles.textAreaRut]} placeholderTextColor='white'
                        onChangeText={(marca) => this.setState({ marca })}
                        value={this.state.marca} />
                        <TouchableWithoutFeedback
                          onPress={() => this.setState({ openModalMarca: true })}>
                          <Image source={require('../assets/others/icono-editar.png')}
                                 style={styles.icon} />
                        </TouchableWithoutFeedback>
                      </View>
                    <Text style={{fontFamily: 'FiraSans-Regular', color: 'black'}}>Modelo</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                        editable={false}
                        style={[styles.input, styles.textAreaRut]} placeholderTextColor='white'
                        onChangeText={(modelo) => this.setState({ modelo })}
                        value={this.state.modelo} />
                        <TouchableWithoutFeedback
                          onPress={() => this.setState({ openModalModelo: true })}>
                        <Image source={require('../assets/others/icono-editar.png')}
                               style={styles.icon} />
                        </TouchableWithoutFeedback>
                      </View>
                    <Text style={{fontFamily: 'FiraSans-Regular', color: 'black'}}>Año</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                        editable={false}
                        style={[styles.input, styles.textAreaRut]} placeholderTextColor='white'
                        onChangeText={(ano) => this.setState({ ano })}
                        value={this.state.ano} />
                        <TouchableWithoutFeedback
                          onPress={() => this.setState({ openModalAno: true })}>
                        <Image source={require('../assets/others/icono-editar.png')}
                               style={styles.icon} />
                        </TouchableWithoutFeedback>
                      </View>
                    <Text style={{fontFamily: 'FiraSans-Regular', color: 'black'}}>Color</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                        editable={false}
                        style={[styles.input, styles.textAreaRut]} placeholderTextColor='white'
                        onChangeText={(color) => this.setState({ color })}
                        value={this.state.color} />
                        <TouchableWithoutFeedback
                          onPress={() => this.setState({ openModalColor: true })}>
                        <Image source={require('../assets/others/icono-editar.png')}
                               style={styles.icon} />
                        </TouchableWithoutFeedback>
                      </View>

                    <TouchableWithoutFeedback
                      onPress={() => this.props.navigation.navigate('instru')}>
                    <Image source={require('../assets/images/botones/bt-confirmar.png')}
                      style={styles.btnIngresar} />
                    </TouchableWithoutFeedback>

                <Modal
                  visible={this.state.openModalMarca}
                  transparent={true}
                  animationType={'fade'}
                  onRequestClose={() => this.setState({ openModalMarca: false })}
                >
                  <View style={styles.modalConfirmation}>
                    <View style={styles.containerModal}>
                      <View style={styles.bordeModal}>
                        <View style={{flex:1, alignItems:'center'}}>

                          <Image  source={require('../assets/others/icono-editar-modal.png')}
                                  style={{height: height * 0.05, width: width * 0.09}} />

                          <Text style={{paddingVertical: height * 0.01}}>
                            Marca del vechículo
                          </Text>


                           <TextInput
                                  style={[styles.inputModal, styles.textAreaRutModal]} placeholderTextColor='white'
                                  onChangeText={(marca) => this.setState({ marca })}
                                  value={this.state.marca} />

                          <TouchableWithoutFeedback
                              onPress={() => this.setState({ openModalMarca: false })}>
                              <Image source={require('../assets/images/botones/bt-ok.png')}
                                  style={styles.btnIngresarModal} />
                           </TouchableWithoutFeedback>



                          
                        </View>
                        
                      </View>
                      <TouchableWithoutFeedback onPress={() => this.setState({ openModalMarca: false })}>
                        <Image source={require('../assets/modal/bt-cerrar.png')}
                          style={styles.btnCerrarModal} />
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                </Modal>
                <Modal
                  visible={this.state.openModalModelo}
                  transparent={true}
                  animationType={'fade'}
                  onRequestClose={() => this.setState({ openModalModelo: false })}
                >
                  <View style={styles.modalConfirmation}>
                    <View style={styles.containerModal}>
                      <View style={styles.bordeModal}>
                        <View style={{flex:1, alignItems:'center'}}>

                          <Image  source={require('../assets/others/icono-editar-modal.png')}
                                  style={{height: height * 0.05, width: width * 0.09}} />

                          <Text style={{paddingVertical: height * 0.01}}>
                            Modelo del vechículo
                          </Text>


                           <TextInput
                                  style={[styles.inputModal, styles.textAreaRutModal]} placeholderTextColor='white'
                                  onChangeText={(modelo) => this.setState({ modelo })}
                                  value={this.state.modelo} />

                          <TouchableWithoutFeedback
                              onPress={() => this.setState({ openModalModelo: false })}>
                              <Image source={require('../assets/images/botones/bt-ok.png')}
                                  style={styles.btnIngresarModal} />
                           </TouchableWithoutFeedback>



                          
                        </View>
                        
                      </View>
                      <TouchableWithoutFeedback onPress={() => this.setState({ openModalModelo: false })}>
                        <Image source={require('../assets/modal/bt-cerrar.png')}
                          style={styles.btnCerrarModal} />
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                </Modal>
                <Modal
                  visible={this.state.openModalAno}
                  transparent={true}
                  animationType={'fade'}
                  onRequestClose={() => this.setState({ openModalAno: false })}
                >
                  <View style={styles.modalConfirmation}>
                    <View style={styles.containerModal}>
                      <View style={styles.bordeModal}>
                        <View style={{flex:1, alignItems:'center'}}>

                          <Image  source={require('../assets/others/icono-editar-modal.png')}
                                  style={{height: height * 0.05, width: width * 0.09}} />

                          <Text style={{paddingVertical: height * 0.01}}>
                            Año del vechículo
                          </Text>


                           <TextInput
                                  style={[styles.inputModal, styles.textAreaRutModal]} placeholderTextColor='white'
                                  onChangeText={(ano) => this.setState({ ano })}
                                  value={this.state.ano} />

                          <TouchableWithoutFeedback
                              onPress={() => this.setState({ openModalAno: false })}>
                              <Image source={require('../assets/images/botones/bt-ok.png')}
                                  style={styles.btnIngresarModal} />
                           </TouchableWithoutFeedback>



                          
                        </View>
                        
                      </View>
                      <TouchableWithoutFeedback onPress={() => this.setState({ openModalAno: false })}>
                        <Image source={require('../assets/modal/bt-cerrar.png')}
                          style={styles.btnCerrarModal} />
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                </Modal>
                <Modal
                  visible={this.state.openModalColor}
                  transparent={true}
                  animationType={'fade'}
                  onRequestClose={() => this.setState({ openModalColor: false })}
                >
                  <View style={styles.modalConfirmation}>
                    <View style={styles.containerModal}>
                      <View style={styles.bordeModal}>
                        <View style={{flex:1, alignItems:'center'}}>

                          <Image  source={require('../assets/others/icono-editar-modal.png')}
                                  style={{height: height * 0.05, width: width * 0.09}} />

                          <Text style={{paddingVertical: height * 0.01}}>
                            Color del vechículo
                          </Text>


                           <TextInput
                                  style={[styles.inputModal, styles.textAreaRutModal]} placeholderTextColor='white'
                                  onChangeText={(color) => this.setState({ color })}
                                  value={this.state.color} />

                          <TouchableWithoutFeedback
                              onPress={() => this.setState({ openModalColor: false })}>
                              <Image source={require('../assets/images/botones/bt-ok.png')}
                                  style={styles.btnIngresarModal} />
                           </TouchableWithoutFeedback>



                          
                        </View>
                        
                      </View>
                      <TouchableWithoutFeedback onPress={() => this.setState({ openModalColor: false })}>
                        <Image source={require('../assets/modal/bt-cerrar.png')}
                          style={styles.btnCerrarModal} />
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                </Modal>
            </View>
           


                
        
          </KeyboardAvoidingView>

         

         

          
        
      </View>

    );
  }
}

 const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'transparent',
        flex: 1
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
        backgroundColor: 'transparent',
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
    logoAuto: {
      width: width * 0.44,
      height: height * 0.18,
      resizeMode: 'contain',
      
    },
    containInfo:{
      flex: 1,
      height: height * 0.1,
      backgroundColor: 'white',
      paddingTop: 23,
      flexDirection: 'row'
    },
    containIn:{
      flex: 1,
      backgroundColor: 'white',

    },
    imgLinea: {
      width: width * 0.85,
      resizeMode: 'contain',
      alignItems: 'center'

    },
     groupForm: {
    flexDirection: 'column',
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
    justifyContent: 'center',
    bottom: 0,
  },
  icon: {
    height: height * 0.07,
    width: width * 0.088,
    backgroundColor: 'transparent',
    position: 'absolute',
    justifyContent: 'center',
    right: 16
  },
  editIcon: {
    right: 16,
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