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
} from 'react-native';

const { width, height } = Dimensions.get('screen');



export default class InicioInspeccion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabledButton: true,
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
                  INICIAR AUTOINSPECCION
                </Text>

            </View>
         </ImageBackground>

          <View style={styles.title}>
                
                    <Image source={require('../assets/others/icono-inicio-autoinspeccion.png')}
                      style={styles.logoInspeccion} />
                
          </View>

          <View style={styles.containBody}>
              <Text>
                Estas a punto de iniciar la autoinspección. Gira tu teléfono para tomar las fotografías
                (deben ser horizontales) y porfavor recuerda:
              </Text>

              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../assets/others/flecha-amarilla.png')}
                style={styles.flecha} />
                <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.textHeader}>No puedes retroceder los pasos.</Text>
                </View>
              </View>

              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../assets/others/flecha-amarilla.png')}
                style={styles.flecha} />
                <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.textHeader}>Puedes corregir la fotografia antes de avanzar el siguiente paso.</Text>
                </View>
              </View>

              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../assets/others/flecha-amarilla.png')}
                style={styles.flecha} />
                <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.textHeader}>Tienes 20 minutos.</Text>
                </View>
              </View>


              

              
          </View>

          <View style={styles.containFooter}>
          <TouchableWithoutFeedback
                      onPress={() => this.props.navigation.navigate('padronA')}>
                    <Image source={require('../assets/images/botones/bt-continuar.png')}
                      style={styles.btnIngresar} />
                    </TouchableWithoutFeedback>

              
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
        textAlign: 'left',
        textAlignVertical: "center"
    },
    flecha: {
      width: width * 0.1,
      height: height * 0.1,
      resizeMode: 'contain',
      
    },
    containBody:{
      flex: 1,
      height: height * 0.1,
      backgroundColor: 'white',
      paddingTop: 23,
      justifyContent: 'space-between',
      paddingHorizontal: 30
      
    },
    containFooter:{
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'

    },

  btnIngresar: {
    width: width * 0.8,
    height: height * 0.10,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
    alignItems:'center',
    justifyContent: 'center'
  },
  title: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoInspeccion: {
    width: width * 0.6,
    height: height * 0.5,
    resizeMode: 'contain', 
    alignItems:'center',
    justifyContent: 'center'

  },



  })