import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import Orientation from 'react-native-orientation';

const { width, height } = Dimensions.get('screen');

  export default class LoginForm extends Component{

    componentWillMount() {
      Orientation.lockToPortrait()
    }

    render(){
      const { navigate, goBack } = this.props.navigation
      return(
          <View style={styles.container}> 
            <Text style={styles.textoRut}>
              RUT Asegurado:
            </Text> 
            <TextInput
              style={styles.input} 
            /> 
            <Text style={styles.textoPatente}>
              Patente:
            </Text> 
            <TextInput
              style={styles.input} 
            /> 

            <TouchableWithoutFeedback
                      onPress={() => navigate('terms')}>
                    <Image source={require('../assets/images/botones/bt-continuar.png')}
                      style={styles.btnIngresar} />
            </TouchableWithoutFeedback>
          </View> 
        )
    }
  }


  const styles = StyleSheet.create({
  container: {
    padding: 0,
    paddingBottom: 30,
    height: height * 0.4,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: 'white',
    alignItems:'center',
    borderRadius: 10,
  },
  input: {
    height: height * 0.06,
    width: width * 0.8,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom: 0.5,
    borderColor: '#ccc',
    borderWidth: 1,
    color: 'black',
    borderRadius: 10,
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0,


  },
  textoRut: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    marginTop: 30,
  },
  textoPatente: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    marginTop: 30,
  },
  btnIngresar: {
    width: width * 0.8,
    height: height * 0.09,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
    alignItems:'center',
    justifyContent: 'center',
  },
})