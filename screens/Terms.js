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
         <View style={{flex: 1}}>
              <ScrollView
                  onScroll={({nativeEvent}) => {
                    if (isCloseToBottom(nativeEvent)) {
                      this.setState({disabledButton: false})
                    }
                  }}
                  scrollEventThrottle={400}
                  
              >
                      <Text>
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAA
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAAASASASASASASASASASASASASASAS
                      ASASASASASASASASASASASASASASSAA

                      </Text>
              </ScrollView>
            </View>
            <View style={{flex: 0.3}}>
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
        textAlign: 'center'
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