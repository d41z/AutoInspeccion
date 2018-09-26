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
  Alert
} from 'react-native';

const { width, height } = Dimensions.get('screen');

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

export default class Instruccion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabledButton: true,
      

    }
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
                  INSTRUCCIONES
                </Text>
            </View>


         </ImageBackground>
         <View style={{flex: 1, marginLeft: 30, marginRight: 20, alignItems: 'center', justifyContent:'center', backgroundColor: 'white'}}>
              <ScrollView
                  ref={scrollView  => {this.scrollView = scrollView; }}
                  onScroll={({nativeEvent}) => {
                    if (isCloseToBottom(nativeEvent)) {
                      this.setState({disabledButton: false})
                    }else{
                      this.setState({disabledButton: true})
                    }

                  }}
                  scrollEventThrottle={400}
                  contentContainerStyle={{justifyContent:'center', alignItems: 'center', paddingHorizontal: 20}}
                  
              >
                      <Text style={{fontFamily: 'FiraSans-Medium', color: 'black',  fontSize: 18, 
                      marginTop: 30, textAlign: 'center'}}>
                      Lea detenidamente y siga estas instrucciones.
                      </Text>

                      <Image source={require('../assets/others/icono-timer.png')}
                               style={styles.iconTimer} /> 

                      <Text style={{marginTop: 0, textAlign: 'justify', paddingBottom: 10, fontFamily: 'FiraSans-Regular', color: 'black'}}>
                        Dispone de <Text style={{color: 'black', fontFamily: 'FiraSans-Black'}}>40 minutos</Text> para realizar la autoinspección. 
                        El reloj en la esquina superior derecha le indica el tiempo restante. 
                        Si no termina la autoinspección en este tiempo, <Text style={{color: 'black', fontFamily: 'FiraSans-Black'}}>perderá lo realizado y deberá comenzar nuevamente.</Text>
                      </Text>

                      <Image source={require('../assets/others/icono-auto.png')}
                               style={styles.iconAuto} /> 

                     
                      <Text style={{marginTop: 0, paddingBottom: 15, fontFamily: 'FiraSans-Regular', color: 'black'}}>
                        El vehículo no puede estar <Text style={{fontFamily: 'FiraSans-Black', color: 'black'}}>Sucio por fuera</Text>      
                       
                      </Text>

                      <Image source={require('../assets/others/icono-inicio-autoinspeccion.png')}
                               style={styles.iconInicio} /> 

                      
                        <Text style={{marginTop: 0, paddingBottom: 15, fontFamily: 'FiraSans-Regular', color: 'black'}}>
                            Tome las fotografías de <Text style={{fontFamily: 'FiraSans-Black', color: 'black'}}>manera horizontal </Text> 
                            en un lugar <Text style={{fontFamily: 'FiraSans-Black', color: 'black'}}>espacioso y bien iluminado;</Text> no se permiten
                            autoinspecciones en subterraneos ni de noche.
                        </Text>

                        <Image source={require('../assets/others/icono-wifi.png')}
                               style={styles.iconWifi} /> 
                        

                      <Text style={{marginTop: 0, paddingBottom: 15, fontFamily: 'FiraSans-Regular', color: 'black'}}>
                            Debe contar con <Text style={{fontFamily: 'FiraSans-Black', color: 'black'}}>conexión a internet - wifi o red móvil - en todo momento.</Text>
                      </Text>

                      <Image source={require('../assets/others/icono-editar-intru.png')}
                               style={styles.iconWifi} /> 


                      <Text style={{marginTop: 0, paddingBottom: 15, fontFamily: 'FiraSans-Regular', color: 'black'}}>
                            En cada paso, <Text style={{fontFamily: 'FiraSans-Black', color: 'black'}}>antes de continuar al siguiente,</Text> asegúrese de que la fotografía o
                            información ingresada sea correcta. De no serlo, <Text style={{fontFamily: 'FiraSans-Black', color: 'black'}}>siempre puede corregir antes de 
                            continuar.</Text> Pero una vez que haya continuado al paso siguiente, <Text style={{fontFamily: 'FiraSans-Black', color: 'black'}}> no podrá
                            retroceder</Text> 
                        
                      </Text>

                      <Image source={require('../assets/others/icono-ayuda.png')}
                               style={styles.iconAyuda} /> 

                      <Text style={{marginTop: 0, fontFamily: 'FiraSans-Black', color: 'black'}}>
                            En todo momento puede consultar la ayuda presionando el icono ? 
                            en las esquina superior derecha.
                        
                      </Text>
         
                      
              </ScrollView>
            </View>

            <View style={{flex: 0.3}}>
            <TouchableWithoutFeedback
                  onPress={() => {this.scrollView.scrollToEnd()}}
                  
              >
              {this.state.disabledButton ? <Image source={require('../assets/others/flecha-abajo.png')} 
              style={styles.btnIngresar}/>: <View style={{width: width * 0.8,
    height: height * 0.10, }}></View>}
            </TouchableWithoutFeedback>

              <TouchableWithoutFeedback
                  onPress={() => this.props.navigation.navigate('padronA')}
                  disabled={this.state.disabledButton}
              >
              {this.state.disabledButton ? <Image source={require('../assets/images/botones/bt-aceptarycontinuar-off.png')} 
              style={styles.btnIngresar}/>:<Image source={require('../assets/images/botones/bt-aceptarycontinuar.png')}
              style={styles.btnIngresar} />}

              </TouchableWithoutFeedback>
            </View>
        
      </View>

    );
  }
}

 const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center'
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
     btnIngresar: {
    width: width * 0.8,
    height: height * 0.10,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
    alignItems:'center',
    justifyContent: 'center',
    bottom: 0,
    
  },
  iconAuto: {
    height: height * 0.1,
    width: width * 0.4,
    backgroundColor: 'transparent',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',

  },
  iconTimer: {
    height: height * 0.1,
    width: width * 0.4,
    backgroundColor: 'transparent',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center'

  },
  iconInicio: {
    height: height * 0.2,
    width: width * 0.4,
    backgroundColor: 'transparent',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center'

  },
  iconWifi: {
    height: height * 0.1,
    width: width * 0.4,
    backgroundColor: 'transparent',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center'

  },
  iconAyuda: {
    height: height * 0.1,
    width: width * 0.4,
    backgroundColor: 'transparent',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center'

  },



  })


 /*
 <TouchableWithoutFeedback
                      onPress={() => this.props.navigation.navigate('inicioins')}
                      disabled={this.state.disabledButton}>
              {this.state.disabledButton ? <Image source={require('../assets/images/botones/bt-aceptarycontinuar-off.png')} 
              style={styles.btnIngresar}/>:<Image source={require('../assets/images/botones/bt-aceptarycontinuar.png')}
              style={styles.btnIngresar} />}

          </TouchableWithoutFeedback>
*/