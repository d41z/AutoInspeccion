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

export default class Terms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabledButton: true,
      loading: false,
      openModal: false,
      user: {
        email: '',
        password: '',
        token: '',
      },
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
                  TÉRMINOS Y CONDICIONES
                </Text>
            </View>


         </ImageBackground>
         <View style={{flex: 1, marginLeft: 30, marginRight: 20}}>
              <ScrollView
                  onScroll={({nativeEvent}) => {
                    if (isCloseToBottom(nativeEvent)) {
                      this.setState({disabledButton: false})
                    }
                  }}
                  scrollEventThrottle={400}
                  
              >
                      <Text style={{fontFamily: 'FiraSans-Black', fontSize: 18, color: 'black', marginTop: 30}}>
                      TÉRMINOS Y CONDICIONES DE USO APP AUTOINSPECCIONES
                      </Text>

                      <Text style={{marginTop: 20, fontFamily: 'FiraSans-Regular', color: 'black'}}>
                        El uso de la Aplicación está sujeto a los siguientes Términos
                        y Condiciones, que el Usuario declara conocer y aceptar:
                      </Text>

                      <Text style={{fontFamily: 'FiraSans-Black', color: 'black', marginTop: 20}}>
                        Definiciones:
                      </Text>

                     
                      <Text style={{marginTop: 20}}>
                        <Text style={{fontFamily: 'FiraSans-Black', color: 'black'}}>
                            1. Aplicación
                        </Text>
                        <Text style={{fontFamily: 'FiraSans-Regular', color: 'black'}}>
                          : la aplicación móvil desarrollada y puesta a disposición del público general por LET 
                          para el apoyo del proceso de contratación de seguros de vehículos livianos.
                        </Text>
                      </Text>

                      <Text>
                        <Text style={{fontFamily: 'FiraSans-Black', color: 'black'}}>
                            2. Asegurado
                        </Text>
                        <Text style={{fontFamily: 'FiraSans-Regular', color: 'black'}}>
                          : la persona que está contratando el seguro sobre el Vehículo al que se le realiza la Autoinspección.
                        </Text>
                      </Text>

                      <Text>
                        <Text style={{fontFamily: 'FiraSans-Black', color: 'black'}}>
                            3. 3. Autoinspección
                        </Text>
                        <Text style={{fontFamily: 'FiraSans-Regular', color: 'black'}}>
                          : captura de la Información realizada por el Usuario a través de la Aplicación, 
                          cuyo objetivo es permitir que LET informe a la Compañía sobre la individualización, características y estado del Vehículo,
                           de manera que esta última evalúe la suscripción o rechazo de una póliza de seguro sobre el Vehículo.
                        </Text>
                      </Text>

                      <Text>
                        <Text style={{fontFamily: 'FiraSans-Black', color: 'black'}}>
                            4. Compañía
                        </Text>
                        <Text style={{fontFamily: 'FiraSans-Regular', color: 'black'}}>
                          : la compañía de seguros que está tomando el seguro del Asegurado.
                        </Text>
                      </Text>

                      <Text>
                        <Text style={{fontFamily: 'FiraSans-Black', color: 'black'}}>
                            5. Corredor
                        </Text>
                        <Text style={{fontFamily: 'FiraSans-Regular', color: 'black'}}>
                          : el vendedor de la póliza de seguro, intermediario entre el Asegurado y la Compañía.
                        </Text>
                      </Text>

                      <Text>
                        <Text style={{fontFamily: 'FiraSans-Black', color: 'black'}}>
                            6. Información
                        </Text>
                        <Text style={{fontFamily: 'FiraSans-Regular', color: 'black'}}>
                          : fotografías tomadas e información declarada por el Usuario a través de la Aplicación.
                        </Text>
                      </Text>

                      <Text>
                        <Text style={{fontFamily: 'FiraSans-Black', color: 'black'}}>
                            7. LET
                        </Text>
                        <Text style={{fontFamily: 'FiraSans-Regular', color: 'black'}}>
                          : LET Chile SpA, desarrolladora y dueña de la Aplicación.
                        </Text>
                      </Text>

                      <Text>
                        <Text style={{fontFamily: 'FiraSans-Black', color: 'black'}}>
                            8. Usuario
                        </Text>
                        <Text style={{fontFamily: 'FiraSans-Regular', color: 'black'}}>
                          : la persona que, a través de la Aplicación, realiza la Autoinspección.
                        </Text>
                      </Text>

                      <Text>
                        <Text style={{fontFamily: 'FiraSans-Black', color: 'black'}}>
                            9. Vehículo
                        </Text>
                        <Text style={{fontFamily: 'FiraSans-Regular', color: 'black'}}>
                          : vehículo liviano sobre el que el Asegurado está contratando
                           un seguro y respecto del que el Usuario realizará la Autoinspección.
                        </Text>
                      </Text>

                      
                        <Text style={{fontFamily: 'FiraSans-Black', color: 'black', marginTop: 20}}>
                            Es deber del Usuario:
                        </Text>
                 
                        <Text style={{marginTop:5, fontFamily: 'FiraSans-Regular', color: 'black'}}>
                            - En caso de ser una persona distinta del Asegurado, contar con la autorización de éste para, en su representación, 
                            realizar la Autoinspección y autorizar a LET las acciones descritas en el párrafo siguiente.
                        </Text>
                 

                          <Text style={{marginTop:5, fontFamily: 'FiraSans-Regular', color: 'black'}}>
                            - Tomar fotografías y declarar información única y exclusivamente del Vehículo.
                          </Text>

                        <Text style={{marginTop:5, fontFamily: 'FiraSans-Regular', color: 'black'}}>
                        - Informar el verdadero estado de conservación del Vehículo, sus características y accesorios.
                        </Text>

                        <Text style={{marginTop:5, fontFamily: 'FiraSans-Regular', color: 'black'}}>
                        - Declarar y fotografiar todos y cada uno de los daños que presenta el Vehículo.
                        </Text>

                      
                      
                      
              </ScrollView>
            </View>
            <View style={{flex: 0.3}}>

              {this.state.disabledButton ? <Image source={require('../assets/others/flecha-abajo.png')} 
              style={styles.btnIngresar}/>: <View style={{width: width * 0.8,
    height: height * 0.10}}></View>}

              <TouchableWithoutFeedback
                  onPress={() => this.props.navigation.navigate('infoCar')}
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
        backgroundColor: 'transparent',
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
    justifyContent: 'center'
  },



  })