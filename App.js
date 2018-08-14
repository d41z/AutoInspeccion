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
import Instruccion from './screens/Instruccion'
import InicioInspeccion from './screens/InicioInspeccion'
import PadronAnverso from './screens/PadronAnverso'

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





