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
  TouchableHighlight
} from 'react-native';
import Orientation from 'react-native-orientation';
import ImagePicker from 'react-native-image-picker';

let screen = { width, height } = Dimensions.get('screen');


export default class PadronAnverso extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fotoUp: false,
      disabledButton: true,
      loading: false,
      openModal: false,
      imagePath: '',
      imageHeight: '',
      imageWidth: '',
      imagenUri: '',
      uri: require('../assets/images/fotos-obligatorias/bt-tomar-foto.png'),
      ideaOP: true,
      btnEstado: true
    }
  }

  componentDidMount() {
    
    Orientation.lockToLandscape();
    
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
            imagenUri: response.uri,
            imageHeight: response.height,
            imageWidth: response.width,
            fotoUp: true,
            btnEstado: false

          });
        }
      })
  }

  cambioImagen=()=>{
    /*
    this.setState({
      imagenUri: this.state.uri,
    })
    */
    Alert.alert('ASDASD')
  }


  render(){


    return(
      <View style={styles.container}>
        <ImageBackground source={require('../assets/others/fondo-titulos.png')}
          style={styles.fondoHeader}>

           <View style={styles.containHeader}>

               <Image source={require('../assets/others/icono-titulos.png')}
                style={styles.logoLet} />
                <Text style={styles.textHeader}>
                  INGRESO DE FOTOGRAFÍAS
                </Text>
          
              <ImageBackground source={require('../assets/others/cabecera-fondo-amarillo.png')}
              style={styles.containFotoObligatoria} resizeMode='contain' >

                <Text style={styles.textFotoObligatoria}>
                      Fotos Obligatorias
                </Text>
              
              
              </ImageBackground>

          
            </View>


         </ImageBackground>

         <View style={{flex: 1, backgroundColor:'transparent', flexDirection: 'row'}}>

            <View style={{backgroundColor:'#E3B38D', height: width, width: height*0.5, position: 'absolute'}}>

              {this.state.imagenUri ? <Image style={styles.imagePhoto} source={{uri: this.state.imagenUri}} /> : null}

            </View>

            <View style={{backgroundColor:'white', height: width, width: height*0.5, position: 'absolute', left: (height/2), justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flex: 1, alignItems: 'center', paddingTop: 20}}>
                <Text>
                  Padrón Anverso
                </Text>
                <Text style={{textAlign: 'center'}}>
                  Debe poder leerse claramente el texto del documento
                </Text>

                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flexDirection: 'column'}}>
                    <TouchableWithoutFeedback
                        onPress={this.cambioImagen.bind(this)}
                        disabled={this.state.btnEstado}
                      >
                    {this.state.fotoUp ? <Image style={styles.iconCam} source={require('../assets/images/fotos-obligatorias/bt-ver-referencia.png')}/> : <Image style={styles.test1} source={require('../assets/images/fotos-obligatorias/bt-ver-referencia.png')}/>}
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={{flexDirection: 'column'}}>
                    <TouchableWithoutFeedback
                      onPress={this.openImagePicker.bind(this)}
                      
                    >
                    {this.state.fotoUp ? <Image style={styles.iconCam} source={require('../assets/images/fotos-obligatorias/bt-repetirfoto.png')}/> : <Image style={styles.iconCam} source={require('../assets/images/fotos-obligatorias/bt-tomar-foto.png')}/>}
                    </TouchableWithoutFeedback>
                  </View>
                </View>

                <View style={{flex: 1}}>
                  <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('padronA')}>
                      <Image source={require('../assets/images/botones/bt-continuar.png')}
                        style={styles.btnSiguiente} />
                  </TouchableWithoutFeedback>
                </View>
              </View>


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
        flexDirection: 'row',
        width: height * 0.7,
        height: width * 0.15,
        backgroundColor: 'transparent',
        alignItems: 'center',
        backgroundColor: 'transparent',
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

        
    },
    iconCam: {
      width: width * 0.2,
      height: height * 0.3,
      resizeMode: 'contain',
      
    },
    textFotoObligatoria: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      textAlignVertical: 'center'
    },
    containFotoObligatoria: {
        flexDirection: 'row',
        width: height * 0.5,
        height: width * 0.5,
        borderColor: 'grey',
        borderBottomWidth: 0,
        justifyContent:'center',

    },
    btnSiguiente: {
      width: width * 0.8,
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



  })