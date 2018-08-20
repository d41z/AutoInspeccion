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
      main: {
        screen: StackNavigator({
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

            },{
              headerMode: 'none',
              navigationOptions: {
                tabBarVisible: false,
              },
            }),
          },
        },{

          headerMode: 'none',
          navigationOptions: {
            tabBarVisible: false,
          },
        }),
      },
    },{
      headerMode: 'none',
      navigationOptions: {
        tabBarVisible: false,
      },
      
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





