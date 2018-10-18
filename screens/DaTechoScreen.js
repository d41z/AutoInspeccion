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
    BackHandler
} from 'react-native';
import Orientation from 'react-native-orientation';
import ImagePicker from 'react-native-image-picker';

let screen = { width, height } = Dimensions.get('screen');


export default class DaTechoScreen extends Component {
    constructor(props) {
        super(props)
        console.log('PROPS constructor')

        console.log('ASDASDASD'+props)
        console.log(props)

        if(props.navigation.state.params.techo.listo === true){
            this.methodGoTo(props)
        }else{

            this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
            this.state = {
                fotoUp1: false,
                disabledButton: false,
                loading: false,
                openModal: false,
                openModalInstru: false,
                imagePath: '',
                imagenUri: '',
                imageRef: require('../assets/fotoRef/obg-13.jpg'),
                ideaOP: true,
                btnEstado: true,
                imageHeight: height,
                imageWidth: width,
                date: '',
                openModalImg1: false,
                techo: {
                    listo: this.props.navigation.state.params.techo.listo,
                    techo: false,
                    imagen: require('../assets/fotoRef/obg-13.jpg')
                },

            }

        }


    }

    methodGoTo = (props) => {
        console.log('propsitosmios')
        let posterior = props.navigation.state.params.techo
        console.log(posterior)

        var aux = false
        var aux = posterior.techo

        var img1 = posterior.imagen



        console.log('asdasdasd'+aux)
        this.state= {
            fotoUp1: aux,
            disabledButton: false,
            loading: false,
            openModal: false,
            imagePath: '',
            imagenUri: '',
            imageRef: require('../assets/fotoRef/obg-13.jpg'),
            ideaOP: true,
            btnEstado: true,
            imageHeight: height,
            imageWidth: width,
            date: '',
            openModalImg1: false,
            openModalInstru: false,
            techo: {
                listo: this.props.navigation.state.params.techo.listo,
                techo: aux,
                imagen: img1
            },
        }



    }

    handleBackButtonClick() {
       
        return true;
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
        if (Platform.OS == 'ios') {
            Orientation.lockToLandscapeRight();
        }else{
            Orientation.lockToLandscapeLeft();
        }


    }

    componentWillReceiveProps(nextProps) {
        var props = nextProps.navigation.state.params;
        console.log('component will receive props')


    }

    componentWillUnmount() {

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentDidMount(){

        console.log('variable fotoup1'+this.state.fotoUp1)
        console.log(this.state.techo.imagen)



        if (Platform.OS == 'ios') {
            Orientation.lockToLandscapeRight();
        }else{
            Orientation.lockToLandscapeLeft();
        }
        console.log('DaSelectionScreen: '+this.state.posteriorDa)

    }

    openImagePicker1(){
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



                let techo = Object.assign({}, this.state.techo);
                techo.imagen = { uri: response.uri }
                techo.listo = true
                techo.techo = true

                console.log('viendo la imagen perrito')
                console.log(techo.imagen)
                this.setState({
                    imageRef: source,
                    imageHeight: response.height,
                    imageWidth: response.width,
                    fotoUp1: true,
                    btnEstado: false,
                    disabledButton: true,
                    techo: techo

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
            imageRef: require('../assets/fotoRef/obg-13.jpg'),
            disabledButton: true
        })



    }


    nextScreen(){

        Orientation.lockToPortrait();
        console.log('......................')
        console.log(this.state.posteriorDa)
        console.log('......................')
        this.props.navigation.navigate('daSelectionScreen', {item: 'DaTechoScreen', techo:this.state.techo})



    }


    render(){


        return(
            <View style={styles.container}>
                <ImageBackground source={require('../assets/others/fondo-titulos.png')}
                                 style={styles.fondoHeader}>

                    <View style={styles.containHeader}>

                        <View style={{flex:1}}>
                            <View style={{flexDirection: 'row'}}>
                                <Image source={require('../assets/others/icono-titulos.png')}
                                       style={styles.logoLet} />
                                <Text style={styles.textHeader}>
                                    Daños
                                </Text>
                            </View>

                        </View>


                        <View style={{flex:0.25, flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../assets/images/fotos-obligatorias/cabecera-icono-tiempo.png')} style={styles.flecha} />
                            <Text style={{textAlign: 'center'}}>
                              00:00
                            </Text>
                        </View>

                        <View style={{flex:0.25}}>
                            <TouchableWithoutFeedback
                                onPress={() => this.setState({ openModalInstru: true })}>
                                <Image source={require('../assets/modal/icono-ayuda.png')} style={styles.flecha} />
                            </TouchableWithoutFeedback>
                        </View>

                        <View style={{flex:0.25}}>
                            <TouchableWithoutFeedback
                                onPress={() => this.nextScreen()}
                            >
                                <View style={{flex:1, backgroundColor: 'orange', alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{textAlign: 'center', color: 'white', alignItems:'center'}}>
                                        siguiente >
                                    </Text>

                                </View>
                            </TouchableWithoutFeedback>

                        </View>

                    </View>


                </ImageBackground>

                <View style={{flex: 1, backgroundColor:'white'}}>
                    <View style={{flex:1, alignItems:'center'}}>
                        <Text style={{textAlign: 'center', fontFamily: 'FiraSans-Medium', color: 'black', paddingVertical: width * 0.02}}>
                            ¿En que lugar en específico se encuentra el daño?
                        </Text>

                        <View style={{flexDirection: 'row'}}>

                            <TouchableWithoutFeedback
                                disabled={this.state.disabledButton}
                                onPress={this.openImagePicker1.bind(this)}

                            >
                                {this.state.fotoUp1 ? <Image  source={require('../assets/images/botones/bt-puerta-delantera-off.png')} style={styles.btnSi}/> : <Image  source={require('../assets/images/botones/bt-puerta-delantera-off.png')} style={styles.btnSi}/>}
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback
                                disabled={!this.state.disabledButton}
                                onPress={this.openImagePicker1.bind(this)}
                            >
                                {this.state.fotoUp1 ?  <Image  source={require('../assets/images/fotos-obligatorias/bt-repetirfoto.png')} style={styles.icVerFoto}/> : <View></View>}
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback
                                onPress={() => this.setState({ openModalImg1: true })}>
                                {this.state.fotoUp1 ? <Image  source={require('../assets/images/fotos-obligatorias/ic-verfoto.png')} style={styles.icVerFoto}/> : <View></View>}
                            </TouchableWithoutFeedback>

                        </View>








                    </View>
                    <Modal
                  visible={this.state.openModalInstru}
                  transparent={true}
                  animationType={'slide'}
                  onRequestClose={() => this.setState({ openModalInstru: false })}
                  supportedOrientations={['landscape']}
                >
                  <View style={styles.modalConfirmationInstru}>
                    <View style={styles.containerModalInstru}>
                      <View style={styles.bordeModalInstru}>
                        <View style={{flex:1, alignItems:'center', paddingHorizontal: width * 0.05}}>
                          
                          <Image  source={require('../assets/others/icono-titulos.png')} 
                                style={styles.logitoLet}/>

                          <Text style={{textAlign: 'center', fontFamily: 'FiraSans-Black', color: 'black', paddingBottom: width * 0.03}}>
                          Seleccione el lugar exacto y en donde se encuentra el daño y toma la fotografía.
                          Para continuar presiona siguiente.
                          </Text>

                          <TouchableWithoutFeedback onPress={() => this.setState({ openModalInstru: false })}>
                          <Image  source={require('../assets/images/botones/bt-ok.png')} 
                                style={styles.btOk}/>
                          </TouchableWithoutFeedback>

                          
                        </View>

                        

                        
                      </View>
                      
                    </View>
                  </View>
                </Modal>

                    <Modal
                        visible={this.state.openModalImg1}
                        transparent={true}
                        animationType={'slide'}
                        onRequestClose={() => this.setState({ openModalImg1: false })}
                        supportedOrientations={['landscape']}
                    >
                        <View style={styles.modalConfirmation}>
                            <View style={styles.containerModal}>
                                <View style={styles.bordeModal}>
                                    <View style={{flex:1}}>
                                        <Image resizeMode='contain' style={{flex:1, height: null, width: null,
                                            alignItems:'center', justifyContent:'center'}} source={this.state.techo.imagen} />
                                    </View>




                                </View>
                                <TouchableWithoutFeedback onPress={() => this.setState({ openModalImg1: false })}>
                                    <Image source={require('../assets/modal/bt-cerrar.png')}
                                           style={styles.btnCerrarModal} />
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </Modal>

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
    btsiguiente:{
        width: height * 0.15,
        height: width * 0.14,
    },
    btnSi:{
        width: width * 0.7,
        height: height * 0.065,
        resizeMode: 'contain',
    },
    icVerFoto:{
        width: height * 0.07,
        height: width * 0.1,
        resizeMode: 'contain',

    },
    modalConfirmationInstru: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  containerModalInstru: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bordeModalInstru: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: width * 0.5,
    width: height * 0.5,
    borderRadius: width * 0.02,
    borderColor: 'white',
    borderWidth: 0.666,
    backgroundColor: 'white',
  },
  logitoLet:{
    width: height * 0.25,
    height: width * 0.15,
    resizeMode: 'contain',
  },
  btOk: {
    width: height * 0.25,
    height: width * 0.13,
    resizeMode: 'contain'
  },



})