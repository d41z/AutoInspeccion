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

export default class Inntruccion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabledButton: true,
      uri1: require('../assets/images/botones/bt-instrucciones-off.png'),
      uri2: require('../assets/images/botones/bt-instrucciones-off.png'),
      uri3: require('../assets/images/botones/bt-instrucciones-off.png'),
      uri4: require('../assets/images/botones/bt-instrucciones-off.png'),
      uri5: require('../assets/images/botones/bt-instrucciones-off.png'),
      uri6: require('../assets/images/botones/bt-instrucciones-off.png'),
      okOn1: false,
      okOn2: false,
      okOn3: false,
      okOn4: false,
      okOn5: false,
      okOn6: false,

    }
  }

  onTap(opt) {
    switch (opt) {
      case 1:
        this.setState({
          okOn1: !this.state.okOn1,
        }, () => this.checkMethod())
        break
      case 2:
        this.setState({
          okOn2: !this.state.okOn2,
        }, () => this.checkMethod())
        break
      case 3:
        this.setState({
          okOn3: !this.state.okOn3,
        }, () => this.checkMethod())
        break
      case 4:
        this.setState({
          okOn4: !this.state.okOn4,
        }, () => this.checkMethod())
        break
      case 5:
        this.setState({
          okOn5: !this.state.okOn5,
        }, () => this.checkMethod())
        break
      case 6:
        this.setState({
          okOn6: !this.state.okOn6,
        }, () => this.checkMethod())
        break
    }
  }

  checkMethod() {
    if (this.state.okOn1 && this.state.okOn2 && this.state.okOn3 && this.state.okOn4 && this.state.okOn5 && this.state.okOn6) {
      this.setState({
        disabledButton: false,
      })
    } else {
      this.setState({
        disabledButton: true,
      })
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


            <View style={{ backgroundColor: '#F3F3F3', flexDirection: 'row' }}>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'justify' }}>
                  • Tomar fotografías en un lugar espacioso y bien iluminado,
                   no se permiten autoinspecciones en subterráneos ni de noche.
                   </Text>
              </View>
              <View style={{ flex: 0.5, flexDirection: 'row' }}>
                <Image source={require('../assets/others/linea-instrucciones.png')}
                  style={styles.imgLinea} />
                <TouchableWithoutFeedback
                  onPress={() => this.onTap(1)}
                >
                  {this.state.okOn1 ? <Image source={require('../assets/images/botones/bt-instrucciones-ok.png')} style={styles.imgButton} />
                    : <Image source={require('../assets/images/botones/bt-instrucciones-off.png')} style={styles.imgButton} />}
                </TouchableWithoutFeedback>

              </View>
            </View>

            <View style={{ backgroundColor: '#F3F3F3', flexDirection: 'row' }}>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>
                  • Seguir los ejemplos de las fotos guías.
                  </Text>
              </View>
              <View style={{ flex: 0.5, flexDirection: 'row' }}>
                <Image source={require('../assets/others/linea-instrucciones.png')}
                  style={styles.imgLinea} />
                <TouchableWithoutFeedback
                  onPress={() => this.onTap(2)}
                >
                  {this.state.okOn2 ? <Image source={require('../assets/images/botones/bt-instrucciones-ok.png')} style={styles.imgButton} />
                    : <Image source={require('../assets/images/botones/bt-instrucciones-off.png')} style={styles.imgButton} />}
                </TouchableWithoutFeedback>
              </View>
            </View>

            <View style={{ backgroundColor: '#F3F3F3', flexDirection: 'row' }}>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>
                  • Tomar las fotografías en forma horizontal.
                  </Text>
              </View>
              <View style={{ flex: 0.5, flexDirection: 'row' }}>
                <Image source={require('../assets/others/linea-instrucciones.png')}
                  style={styles.imgLinea} />
                <TouchableWithoutFeedback
                  onPress={() => this.onTap(3)}
                >
                  {this.state.okOn3 ? <Image source={require('../assets/images/botones/bt-instrucciones-ok.png')} style={styles.imgButton} />
                    : <Image source={require('../assets/images/botones/bt-instrucciones-off.png')} style={styles.imgButton} />}
                </TouchableWithoutFeedback>
              </View>
            </View>

            <View style={{ backgroundColor: '#F3F3F3', flexDirection: 'row' }}>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>
                  • La aplicación requiere acceder al GPS para georefenciar la información de la autoinspección.
                   No se permite realizar autoinspecciones sin georreferenciación
                  </Text>
              </View>
              <View style={{ flex: 0.5, flexDirection: 'row' }}>
                <Image source={require('../assets/others/linea-instrucciones.png')}
                  style={styles.imgLinea} />
                <TouchableWithoutFeedback
                  onPress={() => this.onTap(4)}
                >
                  {this.state.okOn4 ? <Image source={require('../assets/images/botones/bt-instrucciones-ok.png')} style={styles.imgButton} />
                    : <Image source={require('../assets/images/botones/bt-instrucciones-off.png')} style={styles.imgButton} />}
                </TouchableWithoutFeedback>
              </View>
            </View>

            <View style={{ backgroundColor: '#F3F3F3', flexDirection: 'row' }}>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>
                  • Si los datos móviles están desactivados, tiene que conectar su dispositivo a una red Wi-Fi
                  </Text>
              </View>
              <View style={{ flex: 0.5, flexDirection: 'row' }}>
                <Image source={require('../assets/others/linea-instrucciones.png')}
                  style={styles.imgLinea} />
                <TouchableWithoutFeedback
                  onPress={() => this.onTap(5)}
                >
                  {this.state.okOn5 ? <Image source={require('../assets/images/botones/bt-instrucciones-ok.png')} style={styles.imgButton} />
                    : <Image source={require('../assets/images/botones/bt-instrucciones-off.png')} style={styles.imgButton} />}
                </TouchableWithoutFeedback>
              </View>
            </View>

            <View style={{ backgroundColor: '#F3F3F3', flexDirection: 'row' }}>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>
                  • Para mayor información consulta la ayuda presionando el icono en la parte inferior derecha.
                  </Text>
              </View>
              <View style={{ flex: 0.5, flexDirection: 'row' }}>
                <Image source={require('../assets/others/linea-instrucciones.png')}
                  style={styles.imgLinea} />
                <TouchableWithoutFeedback
                  onPress={() => this.onTap(6)}
                >
                  {this.state.okOn6 ? <Image source={require('../assets/images/botones/bt-instrucciones-ok.png')} style={styles.imgButton} />
                    : <Image source={require('../assets/images/botones/bt-instrucciones-off.png')} style={styles.imgButton} />}
                </TouchableWithoutFeedback>
              </View>
            </View>



          </ScrollView>
        </View>

        <View style={styles.containFooter}>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate('inicioins')}
            disabled={this.state.disabledButton}>
            {this.state.disabledButton ? <Image source={require('../assets/images/botones/bt-aceptarycontinuar-off.png')}
              style={styles.btnIngresar} /> : <Image source={require('../assets/images/botones/bt-aceptarycontinuar.png')}
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
  containBody: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  containFooter: {
    flex: 0.3,
    backgroundColor: 'white',
    alignItems: 'center',

  },
  imgLinea: {
    resizeMode: 'contain',
    height: height * 0.09,

  },
  imgButton: {
    resizeMode: 'contain',
    height: height * 0.1,
    width: width * 0.15,
    left: 10
  },

  btnIngresar: {
    width: width * 0.8,
    height: height * 0.10,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    flex: 0.2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black'
  }



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