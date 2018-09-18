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
  ScrollView,
  Button,
  TouchableHighlight,
  BackHandler,

} from 'react-native';
import Orientation from 'react-native-orientation';
import ImagePicker from 'react-native-image-picker';

let screen = { width, height } = Dimensions.get('screen');


export default class PadronReverso extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fotoUp: false,
      disabledButton: true,
      loading: false,
      openModal: false,
      imagePath: '',
      imagenUri: '',
      imageRef: require('../assets/fotoRef/foto2.png'),
      ideaOP: true,
      btnEstado: true,
      imageHeight: height,
      imageWidth: width,
    }
  }

  componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

  componentWillMount() {
    if (Platform.OS == 'ios') {
      Orientation.lockToLandscapeRight();
    }else{
      Orientation.lockToLandscapeLeft();    
    }
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    
  }

  handleBackButton() {
        return true;
    }

  openImagePicker(){
      const options = {
        title: 'Select Avatar',
        storageOptions: {
            skipBackup: true,
            path: 'images'
        }
      }

      ImagePicker.launchCamera(options, (response) => {
        if(response.didCancel){
          console.log('Response = ', response);
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          let source = { uri: response.uri };
          console.log(source)

          this.setState({
            imageRef: source,
            imageHeight: response.height,
            imageWidth: response.width,
            fotoUp: true,
            btnEstado: false,
            disabledButton: false

          });

          if (Platform.OS == 'ios') {
            Orientation.lockToLandscapeRight();
          }else{
            Orientation.lockToLandscapeLeft();    
          }

        }
      })
  }

  cambioImagen=()=>{
   
    this.setState({
      imageRef: require('../assets/fotoRef/foto2.png'),
      disabledButton: true
    })
    
    
  }


  render(){


    return(
      <View style={styles.container}>
        <ImageBackground source={require('../assets/others/fondo-titulos.png')}
          style={styles.fondoHeader}>

           <View style={styles.containHeader}>

              <View style={{flex:0.8}}>
                <View style={{flexDirection: 'row'}}>
               <Image source={require('../assets/others/icono-titulos.png')}
                style={styles.logoLet} />
                <Text style={styles.textHeader}>
                  INGRESO DE FOTOGRAFÍAS
                </Text>
                </View>
                
              </View>
              
              

                <ImageBackground source={require('../assets/images/cabecera-fondo-amarillo.png')}
                                 style={styles.containFotoObligatoria}>
                  
                <View style={{flexDirection: 'column'}}>
                  <Text style={{fontSize: 14, color: 'black'}}>
                    Fotos Obligatorias
                  </Text>
                  <View>
                    <Text style={{fontSize: 18, color: 'black'}}>
                      Foto 2 de 13
                    </Text>
                  </View>
                </View>
                  
                    

                </ImageBackground>

              

              <View style={{flex:0.2}}>
                <Image source={require('../assets/images/fotos-obligatorias/cabecera-icono-tiempo.png')} style={styles.flecha} />
              </View>

              <View style={{flex:0.1}}>
                <TouchableWithoutFeedback
                          onPress={() => this.setState({ openModal: true })}>
                <Image source={require('../assets/modal/icono-ayuda.png')} style={styles.flecha} />
                </TouchableWithoutFeedback>
              </View>
     
            </View>


         </ImageBackground>

         <View style={{flex: 1, backgroundColor:'transparent', flexDirection: 'row'}}>

            <View style={{flex:1, backgroundColor:'white', height: width*0.85, width: height*0.65, position: 'absolute'}}>
               <View style={{flex:1, paddingHorizontal: 10, paddingVertical: 10}}>
                    <Image resizeMode='contain' style={{flex:1, height: null, width: null, alignItems:'center', justifyContent:'center'}} source={this.state.imageRef} />
               </View>
               <View style={{flex:0.4, backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 10}}>
                  <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <View style={{flex:1, flexDirection: 'row'}}>
                   
                    {this.state.fotoUp ? <Text  style={{paddingTop: width * 0.035}}>Ver Referencia</Text> : <Text  style={{paddingTop: width * 0.03}}></Text>}


                    <TouchableWithoutFeedback
                        onPress={this.cambioImagen.bind(this)}
                        disabled={this.state.btnEstado}
                      >
                    {this.state.fotoUp ? <Image style={styles.iconCam} source={require('../assets/images/fotos-obligatorias/bt-ver-referencia.png')}/> : <Image style={styles.test1} source={require('../assets/images/fotos-obligatorias/bt-ver-referencia.png')}/>}
                    </TouchableWithoutFeedback>
                    </View>
                  </View>

                  <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <View style={{flexDirection: 'row'}}>
                    
                    {this.state.fotoUp ? <Text  style={{paddingTop: width * 0.035}}>Repetir Foto</Text> : <Text  style={{paddingTop: width * 0.03}}>Tomar Foto</Text>}
                    

                    <TouchableWithoutFeedback
                      onPress={this.openImagePicker.bind(this)}
                      
                    >
                    {this.state.fotoUp ? <Image style={styles.iconCam} source={require('../assets/images/fotos-obligatorias/bt-repetirfoto.png')}/> : <Image style={styles.iconCam} source={require('../assets/images/fotos-obligatorias/bt-tomar-foto.png')}/>}
                    </TouchableWithoutFeedback>
                    </View>

                  </View>
                    
                    
               </View>
            </View>

            <View style={{flex:1, backgroundColor:'transparent', height: width * 0.85, width: height*0.3, right: 0, position: 'absolute', paddingTop:10, paddingBottom:33}}>
              <View style={{flex: 1, backgroundColor: 'white', borderRadius: 10, paddingVertical: 10, alignItems: 'center', paddingHorizontal: 10}}>
                  <Text style={{textAlign: 'center', fontFamily: 'FiraSans-Black', color: 'black'}}>Documento Reverso</Text>
                <View style={{flex:1, paddingHorizontal: 10, paddingTop:5}}>
                  <Text style={{fontFamily: 'FiraSans-Regular', color: 'black'}}>El documento no debe quedar cortado.</Text>
                  <Text style={{fontFamily: 'FiraSans-Regular', color: 'black'}}>Debe poder leerse claramente el texto del documento.</Text>
                  <Text style={{fontFamily: 'FiraSans-Regular', color: 'black'}}>Si el documento tiene solo una cara, repetir la fotografía en anverso y reverso</Text>
                </View>
                  <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('posteriorS')}
                        disabled={this.state.disabledButton}
                        >
                      {this.state.disabledButton ? <Image source={require('../assets/images/botones/bt-siguiente-off.png')} 
                      style={styles.btnSiguiente}/>:<Image source={require('../assets/images/botones/bt-siguiente.png')}
                      style={styles.btnSiguiente} />}
                  </TouchableWithoutFeedback>

                
              </View>
              <Modal
                  visible={this.state.openModal}
                  transparent={true}
                  animationType={'slide'}
                  onRequestClose={() => this.setState({ openModal: false })}
                  supportedOrientations={['landscape']}
                >
                  <View style={styles.modalConfirmation}>
                    <View style={styles.containerModal}>
                      <View style={styles.bordeModal}>
                        <View style={{flex:1}}>
                          <View style={{flexDirection:'row', alignItems: 'center'}}>
                            <Image source={require('../assets/modal/icono-ayuda.png')}
                              style={styles.iconoAyudaModal} />
                            <View style={{flex: 1}}>
                              <Text style={{fontSize: 16, color: 'black'}}>
                                FOTOS OBLIGATORIAS
                              </Text>
                              <Text></Text>
                              <Text style={{fontSize: 18, color: 'black'}}>
                                PÁDRON
                              </Text>
                            </View>

                          </View>
                          <View style={{flex:1, paddingHorizontal: 20}}>
                            <Text style={{paddingBottom: 10}}>
                                  Se aceptan los siguientes documentos:
                            </Text>
                            <Text>
                                  - Certificado de inscripción registro civil ("padrón")
                            </Text>
                            <Text>
                                  - Ceriticado primera inscripción.
                            </Text>
                            <Text>
                                  - Certificado de Transferencia.
                            </Text>
                            <Text style={{paddingTop: 10}}>
                                  Asegúrese que se puede leer correctamente el texto del documento fotografiado.
                            </Text>
                          </View>



                        </View>
                        <View style={{flex:0.1, paddingVertical: 20}}>

                              <Image source={require('../assets/modal/linea.png')}
                              style={{height: width * 0.6, width: 10}} />

                        </View>
                        <View style={{flex:0.7, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',
                                      paddingVertical: 20}}>
                          <Text style={{fontSize: 16, color: 'black'}}>
                            MESA DE AYUDA
                          </Text>

                          <View style={{flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
                            <Image source={require('../assets/modal/icono-telefono-fijo.png')}
                              style={styles.iconoConfirmacionModal} />
                            <View style={{flex: 1}}>
                              <Text style={{color: 'black'}}>
                                Telefono Fijo
                              </Text>
                              <Text></Text>
                              <Text style={{color: 'black'}}>
                                22 6565081
                              </Text>
                            </View>


                          </View>

                          <View style={{flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
                            <Image source={require('../assets/modal/icono-whatsapp.png')}
                              style={styles.iconoConfirmacionModal} />
                            <View style={{flex: 1}}>
                              <Text style={{color: 'black'}}>
                                WHATSAPP
                              </Text>
                              <Text></Text>
                              <Text style={{color: 'black'}}>
                                +569931300485
                              </Text>
                            </View>


                          </View>



                        </View>

                        
                      </View>
                      <TouchableWithoutFeedback onPress={() => this.setState({ openModal: false })}>
                        <Image source={require('../assets/modal/bt-cerrar.png')}
                          style={styles.btnCerrarModal} />
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                </Modal>


            </View>

         </View>


        
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
      flex:1,
        flexDirection: 'row',
        width: height,
        height: width * 0.15,
        backgroundColor: 'transparent',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderColor: 'grey',
        borderBottomWidth: 0,
    },
    fondoHeader: {
        width: height,
        height: width * 0.15,
        backgroundColor: 'transparent',
    },
    logoLet: {
        width: width * 0.15,
        height: height * 0.3,
        resizeMode: 'contain',
    },
    textHeader: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      textAlignVertical: 'center',
      fontFamily: 'FiraSans-Black',
        fontSize: 18,
        color: 'black'


        
    },
    iconCam: {
      width: height * 0.2,
      height: width * 0.15,
      resizeMode: 'contain',
      
    },
    textFotoObligatoria: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      textAlignVertical: 'center'
    },
    containFotoObligatoria: {
        flex:1,
        flexDirection: 'row',
        width: height * 0.3,
        height: width * 0.15,
        borderColor: 'grey',
        borderBottomWidth: 0,
        justifyContent:'center',

    },
    btnSiguiente: {
      width: width * 0.5,
      height: height * 0.10,
      resizeMode: 'contain',
      backgroundColor: 'transparent',
    },
    imagePhoto: {
      height: width, 
      width: height*0.5,

    },
    test1: {
      height: 0,
      width: 0
    },
    flecha: {
      width: width * 0.1,
      height: height * 0.1,
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
    height: height * 0.4,
    width: width * 1.5,
    borderRadius: width * 0.02,
    borderColor: 'white',
    borderWidth: 0.666,
    backgroundColor: 'white',
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
  iconoAyudaModal: {
    width: width * 0.14,
    height: height * 0.14,
    resizeMode: 'contain',
    marginLeft: width * 0.03,

  },



  })