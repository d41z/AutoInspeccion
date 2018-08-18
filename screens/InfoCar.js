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
  KeyboardAvoidingView
} from 'react-native';

const { width, height } = Dimensions.get('screen');


export default class InfoCar extends Component {
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
                  INFORMACIÓN DEL VEHÍCULO
                </Text>

            </View>
         </ImageBackground>

          <View style={styles.containInfo}>
              <Image source={require('../assets/others/icono-info-automovil.png')}
                     style={styles.logoAuto} />

              
              <View style={{flex: 1}}>
                <Text>Patente:</Text>
                <Text></Text>
                <Text>Revisa la informacíon y editalade ser necesario</Text>
              </View>


              
          </View>
          

          <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={0} style={styles.containIn}>
              <View style={{alignItems: 'center'}}>
              <Image source={require('../assets/others/linea-info-vehiculo.png')}
                     style={styles.imgLinea} />

              </View>
            
            <View style={styles.groupForm}>
                    <Text>Marca</Text>
                    <TextInput
                    style={[styles.input, styles.textAreaRut]} placeholderTextColor='white'
                    onChangeText={(rut) => this.setState({ rut })}
                    value={this.state.rut} />
                    <Text>Modelo</Text>
                    <TextInput
                    style={[styles.input, styles.textAreaRut]} placeholderTextColor='white'
                    onChangeText={(rut) => this.setState({ rut })}
                    value={this.state.rut} />
                    <Text>Año</Text>
                    <TextInput
                    style={[styles.input, styles.textAreaRut]} placeholderTextColor='white'
                    onChangeText={(rut) => this.setState({ rut })}
                    value={this.state.rut} />
                    <Text>Color</Text>
                    <TextInput
                    style={[styles.input, styles.textAreaRut]} placeholderTextColor='white'
                    onChangeText={(rut) => this.setState({ rut })}
                    value={this.state.rut} />

                    <TouchableWithoutFeedback
                      onPress={() => this.props.navigation.navigate('instru')}>
                    <Image source={require('../assets/images/botones/bt-confirmar.png')}
                      style={styles.btnIngresar} />
                    </TouchableWithoutFeedback>
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
        textAlign: 'center'
    },
    logoAuto: {
      width: width * 0.44,
      height: height * 0.18,
      resizeMode: 'contain',
      
    },
    containInfo:{
      flex: 0.3,
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
    justifyContent: 'center'
  },



  })