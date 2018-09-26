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
    Modal, BackHandler
} from 'react-native';
import Orientation from 'react-native-orientation';

const { width, height } = Dimensions.get('screen');


const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

export default class DaSelectionScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabledButton: true,
      openModal: false,
        posterior: false,
        frotal: false,
        lderecho: false,
        lizquierdo: false,
        techo: false,
        enviar:{
          listo: false,
            pdelantera: false,
            ptrasera: false,
            chapaM: false,
            tapaDelantera: false,
            tapaTrasera: false,
            imagen: require('../assets/fotoRef/obg-13.jpg'),
            imagen2: require('../assets/fotoRef/obg-13.jpg'),
            imagen3: require('../assets/fotoRef/obg-13.jpg'),
            imagen4: require('../assets/fotoRef/obg-13.jpg'),
            imagen5: require('../assets/fotoRef/obg-13.jpg'),

        },
        enviar2:{
            listo: false,
            pdelantera: false,
            ptrasera: false,
            chapaM: false,
            tapaDelantera: false,
            tapaTrasera: false,
            parachoque: false,
            imagen: require('../assets/fotoRef/obg-13.jpg'),
            imagen2: require('../assets/fotoRef/obg-13.jpg'),
            imagen3: require('../assets/fotoRef/obg-13.jpg'),
            imagen4: require('../assets/fotoRef/obg-13.jpg'),
            imagen5: require('../assets/fotoRef/obg-13.jpg'),
            imagen6: require('../assets/fotoRef/obg-13.jpg'),

        },
        enviar3:{
            listo: false,
            pdelantera: false,
            ptrasera: false,
            chapaM: false,
            tapaDelantera: false,
            tapaTrasera: false,
            imagen: require('../assets/fotoRef/obg-13.jpg'),
            imagen2: require('../assets/fotoRef/obg-13.jpg'),
            imagen3: require('../assets/fotoRef/obg-13.jpg'),
            imagen4: require('../assets/fotoRef/obg-13.jpg'),
            imagen5: require('../assets/fotoRef/obg-13.jpg'),

        },
        enviar4:{
            listo: false,
            pdelantera: false,
            ptrasera: false,
            chapaM: false,
            tapaDelantera: false,
            tapaTrasera: false,
            imagen: require('../assets/fotoRef/obg-13.jpg'),
            imagen2: require('../assets/fotoRef/obg-13.jpg'),
            imagen3: require('../assets/fotoRef/obg-13.jpg'),
            imagen4: require('../assets/fotoRef/obg-13.jpg'),
            imagen5: require('../assets/fotoRef/obg-13.jpg'),


        },
        enviar5:{
            listo: false,
            techo: false,
            imagen: ''

        },

      

    }
  }

  componentWillMount(){
    Orientation.lockToPortrait();
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentDidMount(){
  Orientation.lockToPortrait();
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  console.log('DaSelectionScreen: '+this.state.posterior)
}

    handleBackButton() {
        return true;
    }


    saveme(enviar) {
      console.log(enviar)
        if (enviar.listo === true){
            console.log('si me meto')
            this.setState({
                posterior: true,
                enviar: {
                    listo: enviar.listo,
                    pdelantera: enviar.pdelantera,
                    ptrasera: enviar.ptrasera,
                    chapaM: enviar.chapaM,
                    tapaDelantera: enviar.tapaDelantera,
                    tapaTrasera: enviar.tapaTrasera,
                    imagen: enviar.imagen,
                    imagen2: enviar.imagen2,
                    imagen3: enviar.imagen3,
                    imagen4: enviar.imagen4,
                    imagen5: enviar.imagen5,
                }
            })

        }

    }

    saveme2(enviar){
      if(enviar.listo === true){
          this.setState({
              frontal: true,
              enviar2: {
                  listo: enviar.listo,
                  pdelantera: enviar.pdelantera,
                  ptrasera: enviar.ptrasera,
                  chapaM: enviar.chapaM,
                  tapaDelantera: enviar.tapaDelantera,
                  tapaTrasera: enviar.tapaTrasera,
                  parachoque: enviar.parachoque,
                  imagen: enviar.imagen,
                  imagen2: enviar.imagen2,
                  imagen3: enviar.imagen3,
                  imagen4: enviar.imagen4,
                  imagen5: enviar.imagen5,
                  imagen6: enviar.imagen6

              }
          })
      }
    }

    saveme3(enviar){
        if(enviar.listo === true){
            this.setState({
                lderecho: true,
                enviar3: {
                    listo: enviar.listo,
                    pdelantera: enviar.pdelantera,
                    ptrasera: enviar.ptrasera,
                    chapaM: enviar.chapaM,
                    tapaDelantera: enviar.tapaDelantera,
                    tapaTrasera: enviar.tapaTrasera,
                    imagen: enviar.imagen,
                    imagen2: enviar.imagen2,
                    imagen3: enviar.imagen3,
                    imagen4: enviar.imagen4,
                    imagen5: enviar.imagen5,
                }
            })
        }

    }

    saveme4(enviar){
        if(enviar.listo === true){
            this.setState({
                lizquierdo: true,
                enviar4: {
                    listo: enviar.listo,
                    pdelantera: enviar.pdelantera,
                    ptrasera: enviar.ptrasera,
                    chapaM: enviar.chapaM,
                    tapaDelantera: enviar.tapaDelantera,
                    tapaTrasera: enviar.tapaTrasera,
                    imagen: enviar.imagen,
                    imagen2: enviar.imagen2,
                    imagen3: enviar.imagen3,
                    imagen4: enviar.imagen4,
                    imagen5: enviar.imagen5,
                }
            })
        }

    }

    saveme5(enviar){
        if(enviar.listo === true){
            this.setState({
                techo: true,
                enviar5: {
                    listo: enviar.listo,
                    techo: enviar.techo,
                    imagen: enviar.imagen
                }
            })
        }

    }

    componentWillReceiveProps(nextProps) {


        console.log('COMO SABER')
        console.log(props)

        var props = nextProps.navigation.state.params;
        console.log(props)

        // meter dentro de try-catch

        if(props.item == 'DaPosteriorScreen'){
            console.log('posterior')
            let enviar = Object.assign({}, this.state.enviar);
            enviar.listo = props.posterior.listo
            enviar.pdelantera = props.posterior.pdelantera
            enviar.ptrasera = props.posterior.ptrasera
            enviar.chapaM = props.posterior.chapaM
            enviar.tapaDelantera = props.posterior.tapaDelantera
            enviar.tapaTrasera = props.posterior.tapaTrasera
            enviar.imagen = props.posterior.imagen
            enviar.imagen2 = props.posterior.imagen2
            enviar.imagen3 = props.posterior.imagen3
            enviar.imagen4 = props.posterior.imagen4
            enviar.imagen5 = props.posterior.imagen5

            this.saveme(enviar)
        } else if (props.item == 'DaFrontalScreen'){

            let enviar = Object.assign({}, this.state.enviar2);
            enviar.listo = props.frontal.listo
            enviar.pdelantera = props.frontal.pdelantera
            enviar.ptrasera = props.frontal.ptrasera
            enviar.chapaM = props.frontal.chapaM
            enviar.tapaDelantera = props.frontal.tapaDelantera
            enviar.tapaTrasera = props.frontal.tapaTrasera
            enviar.parachoque = props.frontal.parachoque
            enviar.imagen = props.frontal.imagen
            enviar.imagen2 = props.frontal.imagen2
            enviar.imagen3 = props.frontal.imagen3
            enviar.imagen4 = props.frontal.imagen4
            enviar.imagen5 = props.frontal.imagen5
            enviar.imagen6 = props.frontal.imagen6

            this.saveme2(enviar)
        } else if ( props.item == 'DaLateralDScreen') {
            console.log('entre a leteral derecho')
            console.log(props)
            let enviar = Object.assign({}, this.state.enviar);
            enviar.listo = props.lderecho.listo
            enviar.pdelantera = props.lderecho.pdelantera
            enviar.ptrasera = props.lderecho.ptrasera
            enviar.chapaM = props.lderecho.chapaM
            enviar.tapaDelantera = props.lderecho.tapaDelantera
            enviar.tapaTrasera = props.lderecho.tapaTrasera
            enviar.imagen = props.lderecho.imagen
            enviar.imagen2 = props.lderecho.imagen2
            enviar.imagen3 = props.lderecho.imagen3
            enviar.imagen4 = props.lderecho.imagen4
            enviar.imagen5 = props.lderecho.imagen5

            this.saveme3(enviar)
        }   else if ( props.item == 'DaLateralIScreen'){

            let enviar = Object.assign({}, this.state.enviar4);
            enviar.listo = props.lizquierdo.listo
            enviar.pdelantera = props.lizquierdo.pdelantera
            enviar.ptrasera = props.lizquierdo.ptrasera
            enviar.chapaM = props.lizquierdo.chapaM
            enviar.tapaDelantera = props.lizquierdo.tapaDelantera
            enviar.tapaTrasera = props.lizquierdo.tapaTrasera
            enviar.imagen = props.lizquierdo.imagen
            enviar.imagen2 = props.lizquierdo.imagen2
            enviar.imagen3 = props.lizquierdo.imagen3
            enviar.imagen4 = props.lizquierdo.imagen4
            enviar.imagen5 = props.lizquierdo.imagen5

            this.saveme4(enviar)
        } else if ( props.item == 'DaTechoScreen'){


            let enviar = Object.assign({}, this.state.enviar5);
            enviar.listo = props.techo.listo
            enviar.techo = props.techo.techo
            enviar.imagen = props.techo.imagen

            this.saveme5(enviar)

        }










    }

    nextScreenPosterior(){

      this.props.navigation.navigate('daPosteriorScreen', {item: 'daSelectionScreen', posterior:this.state.enviar})
    }

    nextScreenFrontal(){
      this.props.navigation.navigate('daFrontalScreen', {item: 'daSelectionScreen', frontal:this.state.enviar2})
    }
    nextScreenLateralDerecho(){
      this.props.navigation.navigate('daLateralDScreen', {item: 'daSelectionScreen', lderecho:this.state.enviar3})
    }
    nextScreenLateralIzquierdo(){
      this.props.navigation.navigate('daLateralIScreen', {item: 'daSelectionScreen', lizquierdo:this.state.enviar4})

    }
    nextScreenTecho(){
      this.props.navigation.navigate('daTechoScreen', {item: 'daSelectionScreen', techo:this.state.enviar5})
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
                  DAÑOS
                </Text>
            </View>


         </ImageBackground>
         <ImageBackground source={require('../assets/fondo-danos.jpg')}
          style={styles.fondoBody}> 
            <View style={styles.containerBody}>
                <View style={styles.containBody}>
                  <Text style={{textAlign: 'center', fontFamily: 'FiraSans-Medium', color: 'black', paddingBottom: height * 0.04,}}>
                  ¿En que lugar se encuentran los daños?
                  </Text>

                  <TouchableWithoutFeedback
                      onPress={() => this.nextScreenPosterior()}
                  >
                      {this.state.posterior ? <Image  source={require('../assets/images/botones/bt-posterior-on.png')} style={styles.btnSi}/> : <Image  source={require('../assets/images/botones/bt-posterior-off.png')} style={styles.btnSi}/>}
                  </TouchableWithoutFeedback>


                    <TouchableWithoutFeedback
                        onPress={() => this.nextScreenFrontal()}
                    >

                        {this.state.frontal ? <Image  source={require('../assets/images/botones/bt-frontal-on.png')}  style={styles.btnSi}/> : <Image  source={require('../assets/images/botones/bt-frontal-off.png')}  style={styles.btnSi}/>}

                    </TouchableWithoutFeedback>


                    <TouchableWithoutFeedback
                        onPress={() => this.nextScreenLateralDerecho()}
                    >

                        {this.state.lderecho ? <Image  source={require('../assets/images/botones/bt-lateral-der-on.png')}  style={styles.btnSi}/> : <Image  source={require('../assets/images/botones/bt-lateral-der-off.png')}   style={styles.btnSi}/>}

                    </TouchableWithoutFeedback>


                    <TouchableWithoutFeedback
                        onPress={() => this.nextScreenLateralIzquierdo()}
                    >

                        {this.state.lizquierdo ? <Image  source={require('../assets/images/botones/bt-lateral-izq-on.png')}   style={styles.btnSi}/> : <Image  source={require('../assets/images/botones/bt-lateral-izq-off.png')}    style={styles.btnSi}/>}

                    </TouchableWithoutFeedback>


                    <TouchableWithoutFeedback
                        onPress={() => this.nextScreenTecho()}
                    >

                        {this.state.techo ? <Image  source={require('../assets/images/botones/bt-techo-on.png')}   style={styles.btnSi}/> : <Image  source={require('../assets/images/botones/bt-techo-off.png')}    style={styles.btnSi}/>}

                    </TouchableWithoutFeedback>


                  <TouchableWithoutFeedback
                      onPress={() => this.props.navigation.navigate('accesorieScreen')}>
                  <Image source={require('../assets/images/botones/bt-continuar.png')}
                      style={styles.btnIngresar} />
                   </TouchableWithoutFeedback>

                </View>

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
    width: width * 0.7,
    height: height * 0.065,
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
  btnIngresar: {
    paddingTop: height * 0.15,
    width: width * 0.7,
    height: height * 0.09,
    resizeMode: 'contain'
  },
  containerBody: {
    height: height * 0.6,
    width: width*0.8,
    backgroundColor: 'white',
    borderRadius: 20
  },
  containBody: {
    flex:1,
     alignItems:'center',
      paddingHorizontal: width * 0.05,
       paddingVertical: height * 0.05
  },

  
  

  })