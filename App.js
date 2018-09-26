/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation';

import Login from './screens/Login';
import Terms from './screens/Terms';
import InfoCar from './screens/InfoCar';
import Instruccion from './screens/Instruccion';
import InicioInspeccion from './screens/InicioInspeccion';

import PadronAnverso from './screens/PadronAnverso';
import PadronReverso from './screens/PadronReverso';
import Posterior from './screens/Posterior';
import LateralDerecho from './screens/LateralDerecho';
import Frontal from './screens/Frontal';
import LateralIzquierdo from './screens/LateralIzquierdo';
import Panel from './screens/Panel';
import Kilometraje from './screens/Kilometraje';
import Motor from './screens/Motor';
import Chasis from './screens/Chasis';
import RuedaRepuesto from './screens/RuedaRepuesto';
import Neumatico from './screens/Neumatico';
import Parabrisa from './screens/Parabrisa';
import DamagedScreen from './screens/DamagedScreen';
import AccesorieScreen from './screens/AccesorieScreen';

import DaSelectionScreen from './screens/DaSelectionScreen';
import DaPosteriorScreen from './screens/DaPosteriorScreen';

import AccSelectionScreen from './screens/AccSelectionScreen';
import AccNewSelectionScreen from './screens/AccNewSelectionScreen';

import SendAutoScreen from './screens/SendAutoScreen';
import DaFrontalScreen from "./screens/DaFrontalScreen";
import DaLateralDScreen from "./screens/DaLateralDScreen";
import DaLateralIScreen from "./screens/DaLateralIScreen";
import DaTechoScreen from "./screens/DaTechoScreen";
import AccContinueAccesorieScreen from "./screens/AccContinueAccesorieScreen";


export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
  }


  render() {
    const RootTabs = StackNavigator({
      login: {
        screen: Login
      },
      terms: {
        screen: Terms
      },
      infoCar: {
        screen: InfoCar
      },
      instru: {
        screen: Instruccion
      },
      inicioins: {
        screen: InicioInspeccion
      },
          inspeccion: {
            screen: TabNavigator({
              padronA: {
                screen: PadronAnverso
              },
              padronR: {  
                screen: PadronReverso
              },
              posteriorS: {
                screen: Posterior
              },
              lateralD: {
                screen: LateralDerecho
              },
              frontal: {
                screen: Frontal
              },
              lateralI: {
                screen: LateralIzquierdo
              },
              panel: {
                screen: Panel
              },
              kilometraje: {
                screen: Kilometraje
              },
              motor: {
                screen: Motor
              },
              chasis: {
                screen: Chasis
              },
              ruedaR: {
                screen: RuedaRepuesto
              },
              neumatico: {
                screen: Neumatico
              },
              parabrisa: {
                screen: Parabrisa
              },

            },{
              headerMode: 'none',
              swipeEnabled: false,
              navigationOptions: {
                tabBarVisible: false,
              },
            }),
          },
      damaged:{
        screen: StackNavigator({
          damagedScreen: {
              screen: DamagedScreen
          },
          daSelectionScreen: {
              screen: DaSelectionScreen
          },
          daPosteriorScreen:{
              screen: DaPosteriorScreen
          },
            daFrontalScreen: {
              screen: DaFrontalScreen
            },
            daLateralDScreen: {
              screen: DaLateralDScreen
            },
            daLateralIScreen: {
              screen: DaLateralIScreen
            },
            daTechoScreen: {
              screen: DaTechoScreen
            },
        },
        {
          headerMode: 'none',
          navigationOptions: {
            tabBarVisible: false,
          },
        },
        ),
      },
      accesories:{
        screen: StackNavigator({
          accesorieScreen: {
            screen: AccesorieScreen
          },
          accSelectionScreen:{
            screen: AccSelectionScreen,
          },
          accNewSelectionScreen:{
            screen: AccNewSelectionScreen,
          },
                accContinueAccesorieScreen: {
            screen: AccContinueAccesorieScreen,
            },
          sendAutoScreen:{
            screen: SendAutoScreen,
          },

        },
        {
          headerMode: 'none',
          navigationOptions: {
            tabBarVisible: false,
          },

        },
        ),
      },
    },{
      headerMode: 'none',
      navigationOptions: {
        tabBarVisible: false,
      },
      swipeEnabled: false,
    })

    return (
      <View style={styles.container}>
        <RootTabs />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});





