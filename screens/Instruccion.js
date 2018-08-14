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
} from 'react-native';

const { width, height } = Dimensions.get('screen');

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

export default class Inntruccion extends Component {
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
                  INSTRUCCIÓN
                </Text>

            </View>
         </ImageBackground>

          <View style={styles.title}>
                <Text style={styles.textTitle}>
                    Debes aceptar cada una de las indicaciones para poder continuar
                </Text>
          </View>

          
          <View style={styles.containBody}>
          <ScrollView>
          
            
              <View style={{backgroundColor: '#F3F3F3', flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Text>
                  • Tomar fotografías en un lugar espacioso y bien iluminado,
                   no se permiten autoinspecciones en subterráneos ni de noche.
                   </Text>
                </View>
                <View style={{flex: 0.5, flexDirection: 'row'}}>
                  <Image source={require('../assets/others/linea-instrucciones.png')}
                      style={styles.imgLinea} />
                  <Image source={require('../assets/images/botones/bt-instrucciones-off.png')}
                      style={styles.imgButton} />
                      
                </View>
              </View>

              <View style={{backgroundColor: '#F3F3F3', flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Text>
                    • Seguir los ejemplos de las fotos guías.
                  </Text>
                </View>
                <View style={{flex: 0.5, flexDirection: 'row'}}>
                  <Image source={require('../assets/others/linea-instrucciones.png')}
                      style={styles.imgLinea} />
                  <Image source={require('../assets/images/botones/bt-instrucciones-off.png')}
                      style={styles.imgButton} />    
                </View>
              </View>

              <View style={{backgroundColor: '#F3F3F3', flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Text>
                    • Tomar las fotografías en forma horizontal.
                  </Text>
                </View>
                <View style={{flex: 0.5, flexDirection: 'row'}}>
                  <Image source={require('../assets/others/linea-instrucciones.png')}
                      style={styles.imgLinea} />
                  <Image source={require('../assets/images/botones/bt-instrucciones-off.png')}
                      style={styles.imgButton} />    
                </View>
              </View>

              <View style={{backgroundColor: '#F3F3F3', flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Text>
                    • La aplicación requiere acceder al GPS para georefenciar la información de la autoinspección.
                     No se permite realizar autoinspecciones sin georreferenciación 
                  </Text>
                </View>
                <View style={{flex: 0.5, flexDirection: 'row'}}>
                  <Image source={require('../assets/others/linea-instrucciones.png')}
                      style={styles.imgLinea} />
                  <Image source={require('../assets/images/botones/bt-instrucciones-off.png')}
                      style={styles.imgButton} />    
                </View>
              </View>

              <View style={{backgroundColor: '#F3F3F3', flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Text>
                    • Si los datos móviles están desactivados, tiene que conectar su dispositivo a una red Wi-Fi 
                  </Text>
                </View>
                <View style={{flex: 0.5, flexDirection: 'row'}}>
                  <Image source={require('../assets/others/linea-instrucciones.png')}
                      style={styles.imgLinea} />
                  <Image source={require('../assets/images/botones/bt-instrucciones-off.png')}
                      style={styles.imgButton} />    
                </View>
              </View>

              <View style={{backgroundColor: '#F3F3F3', flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Text>
                    • Para mayor información consulta la ayuda presionando el icono en la parte inferior derecha.
                  </Text>
                </View>
                <View style={{flex: 0.5, flexDirection: 'row'}}>
                  <Image source={require('../assets/others/linea-instrucciones.png')}
                      style={styles.imgLinea} />
                  <Image source={require('../assets/images/botones/bt-instrucciones-off.png')}
                      style={styles.imgButton} />    
                </View>
              </View>



             </ScrollView>
          </View>
          
          <View style={styles.containFooter}>
          <TouchableWithoutFeedback
                      onPress={() => this.props.navigation.navigate('inicioins')}>
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
        textAlign: 'center'
    },
    containBody:{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'space-between',
    },
    containFooter:{
      flex: 0.3,
      backgroundColor: 'white',
      alignItems: 'center',

    },
    imgLinea: {
      resizeMode: 'contain',
      height: height * 0.1,

    },
    imgButton: {
      resizeMode: 'contain',
      height: height * 0.1,
      width: width * 0.15,
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
    flex: 0.3,
    backgroundColor: 'white',
  },
  textTitle: {
    textAlign: 'center'
  }



  })