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
  Picker,
  TouchableOpacity,

} from 'react-native';
import Orientation from 'react-native-orientation';

const { width, height } = Dimensions.get('screen');

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

export default class AccesorieScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabledButton: true,
      openModal: false,
      useCar: '',
      combustible: '',
      radioBtnsImporta: ['Sí', 'No'],
      checkedImporta: 0,
      radioBtnsAcces: ['Alarma', 'Aire Acondicionado', 'AirBags', 'Frenos ABS', 'Otro',],
      checkedAcces: 0,
      checkedAlarma:false,
      checkedAire: false,
      checkedAirbags: false,
      checkedFrenos:false,
      checkedOtro: false,

      

    }
  }

  componentWillMount(){
    Orientation.lockToPortrait();

  }

  goToScreen(){
    if(this.state.checkedOtro){
      this.props.navigation.navigate('accSelectionScreen')
    }else{
        this.props.navigation.navigate('sendAutoScreen')
    }



    
  }

 checkMethod(){

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
                <View style={{flex:1, paddingHorizontal: width * 0.03, paddingVertical: height * 0.05}}>
                  <Text style={{textAlign: 'center', fontFamily: 'FiraSans-Medium', color: 'black'}}>
                  Registre las características y accesorios del autómovil.
                  </Text>
                  <Text style={{fontFamily: 'FiraSans-Black', color: 'black', paddingTop: height * 0.015}}>
                  CARACTERÍSTICAS
                  </Text>
                <View style={{flex:1, alignItems:'center'}}>
                  <View style={{flex:1, backgroundColor: '#DCDCDC', borderRadius: 30, height: height * 0.02, width: width * 0.7}}>
                    <Picker
                      mode='dropdown'
                      selectedValue={this.state.useCar}
                      style={{ flex:1 }}
                      onValueChange={(itemValue, itemIndex) => this.setState({useCar: itemValue})}>
                      <Picker.Item label="Particular" value="particular" />
                      <Picker.Item label="Comercial" value="comercial" />
                      <Picker.Item label="Deportivo" value="deportivo" />
                    </Picker>
                  </View>
                  <View style={{height: height * 0.02}}>
                  </View>
                  <View style={{flex:1, backgroundColor: '#DCDCDC', borderRadius: 30,  height: height * 0.02, width: width * 0.7}}>
                    <Picker
                      mode='dropdown'
                      selectedValue={this.state.combustible}
                      style={{ flex:1 }}
                      onValueChange={(itemValue, itemIndex) => this.setState({combustible: itemValue})}>
                      <Picker.Item label="Bencina" value="bencina" />
                      <Picker.Item label="Diesel" value="diesel" />
                      <Picker.Item label="Eléctrico" value="eléctrico" />
                      <Picker.Item label="Híbrido" value="híbrido" />
                      <Picker.Item label="Gas Licuado" value="gaslicuado" />
                    </Picker>
                  </View>
                  <View style={{flexDirection: 'row', alignItems:'center', paddingTop: height * 0.02}}>
                    <Text>Vehículo de importación directa</Text>
                    <TouchableWithoutFeedback
                                onPress={() => this.setState({openModal: true})}>
                    <Image source={require('../assets/modal/icono-ayuda.png')} style={styles.flecha} />
                    </TouchableWithoutFeedback>
                  </View>
                  
                    <View style={{flex:1, flexDirection: 'row'}}>
                    
      
                    {this.state.radioBtnsImporta.map((data, key) => {
                      return (
                        <View key={key}>
                          {this.state.checkedImporta == key ?
                            <TouchableOpacity style={styles.btn}>
                              <Image style={styles.img} source={require('../assets/images/botones/bt-radio-on.png')}/>
                                <Text>{data}</Text>
                             </TouchableOpacity>
                                        :
                              <TouchableOpacity onPress={()=>{this.setState({checkedImporta: key})}} style={styles.btn}>
                                <Image style={styles.img} source={require('../assets/images/botones/bt-radio-off.png')} />
                                <Text>{data}</Text>
                              </TouchableOpacity>
                            }
                        </View>
                            )
                    })}

                 

                    </View>  
                </View>
                <Text style={{fontFamily: 'FiraSans-Black', color: 'black', paddingTop: height * 0.015}}>
                  ACCESORIOS
                  </Text>
              <View style={{flex:1}}>

                <TouchableOpacity style={styles.btn}
                              onPress={() => this.setState(previousState => {
                                return { checkedAlarma: !previousState.checkedAlarma };
                              })}>

                {this.state.checkedAlarma ? <Image style={styles.img} source={require('../assets/images/botones/bt-radio-on.png')}/> : <Image style={styles.img} source={require('../assets/images/botones/bt-radio-off.png')}/>}
                <Text style={{textAlign: 'center'}}>Alarma</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}
                              onPress={() => this.setState(previousState => {
                                return { checkedAire: !previousState.checkedAire };
                              })}>

                {this.state.checkedAire ? <Image style={styles.img} source={require('../assets/images/botones/bt-radio-on.png')}/> : <Image style={styles.img} source={require('../assets/images/botones/bt-radio-off.png')}/>}
                <Text style={{textAlign: 'center'}}>Aire</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}
                              onPress={() => this.setState(previousState => {
                                return { checkedAirbags: !previousState.checkedAirbags };
                              })}>

                {this.state.checkedAirbags ? <Image style={styles.img} source={require('../assets/images/botones/bt-radio-on.png')}/> : <Image style={styles.img} source={require('../assets/images/botones/bt-radio-off.png')}/>}
                <Text style={{textAlign: 'center'}}>AirBags</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}
                              onPress={() => this.setState(previousState => {
                                return { checkedFrenos: !previousState.checkedFrenos };
                              })}>

                {this.state.checkedFrenos ? <Image style={styles.img} source={require('../assets/images/botones/bt-radio-on.png')}/> : <Image style={styles.img} source={require('../assets/images/botones/bt-radio-off.png')}/>}
                <Text style={{textAlign: 'center'}}>Frenos ABS</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btn}
                              onPress={() => this.setState(previousState => {
                                return { checkedOtro: !previousState.checkedOtro };
                              })}>

                {this.state.checkedOtro ? <Image style={styles.img} source={require('../assets/images/botones/bt-radio-on.png')}/> : <Image style={styles.img} source={require('../assets/images/botones/bt-radio-off.png')}/>}
                <Text style={{textAlign: 'center'}}>Otro(deberá fotografiarlo en el próximo paso)</Text>
                </TouchableOpacity>
                



                              

                <TouchableWithoutFeedback
                      onPress={() => this.goToScreen()}>
                  <Image source={require('../assets/images/botones/bt-continuar.png')} style={styles.btnIngresar} />
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
                        <View style={{flex:1, alignItems:'center'}}>
                          
                          <Image  source={require('../assets/others/icono-titulos.png')} 
                                style={styles.logitoLet}/>

                          <Text style={{textAlign: 'center', fontFamily: 'FiraSans-Black', color: 'black'}}>
                          Importación Directa:
                          </Text>
                          <Text style={{textAlign: 'center', fontFamily: 'FiraSans-Regular', color: 'black'}}>
                          Vehículo ingresado al país por gestión particular.
                          </Text>

                          <TouchableWithoutFeedback
                                onPress={() => this.setState({ openModal: false })}>
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
    height: height * 0.8,
    width: width*0.8,
    backgroundColor: 'white',
    borderRadius: 20

  },
  img:{
        height:height * 0.04,
        width: width * 0.1,
        resizeMode: 'contain'
    },
  btn:{
    flexDirection: 'row',
    alignItems:'center',

  },
  flecha: {
      width: width * 0.1,
      height: height * 0.04,
      resizeMode: 'contain',
  },
  btnIngresar: {
    paddingTop: height * 0.1,
    width: width * 0.7,
    height: height * 0.09,
    resizeMode: 'contain'
  },
  picker: {
    width: 200,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    borderWidth: 1
  },
  pickerItem: {
    color: 'red'
  },


  
  

  })