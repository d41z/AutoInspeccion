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

export default class AccContinueAccesorieScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            disabledButton: true,
            openModal: false


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
                            CARACTERÍSTICAS Y ACCESORIOS
                        </Text>
                    </View>


                </ImageBackground>
                <ImageBackground source={require('../assets/fondo-danos.jpg')}
                                 style={styles.fondoBody}>
                    <View style={styles.Body}>
                        <View style={{flex:1, alignItems:'center', paddingHorizontal: width * 0.05, paddingVertical: height * 0.05}}>

                            <Text style={{textAlign: 'center', fontFamily: 'FiraSans-Medium', color: 'black', paddingTop:10}}>
                                ¿Desea integrar otro accesorio?
                            </Text>


                            <View style={{flex:1, flexDirection: 'row'}}>

                                <TouchableWithoutFeedback
                                    onPress={() => this.goToScreen()}>

                                    <Image  source={require('../assets/images/botones/bt-si.png')}
                                            style={styles.btnSi}/>

                                </TouchableWithoutFeedback>

                                <TouchableWithoutFeedback
                                    onPress={() => this.props.navigation.navigate('sendAutoScreen')}>
                                    <Image  source={require('../assets/images/botones/bt-no.png')}
                                            style={styles.btnSi}/>
                                </TouchableWithoutFeedback>
                            </View>
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
        height: height * 0.3,
        width: width*0.8,
        backgroundColor: 'white',
        borderRadius: 20
    }




})