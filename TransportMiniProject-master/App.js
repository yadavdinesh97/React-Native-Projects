/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import userLogin from './Src/Screens/Login';
import dashBoard from './Src/Screens/Dashboard';
import Addtransport from './Src/Screens/Addtransport';
import vehicleTraking from './Src/Screens/VehicleTracking';

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Track Vehicle'>
          <Stack.Screen name="Login Area" component={userLogin} />
          <Stack.Screen name="DashBoard" component={dashBoard} />
          <Stack.Screen name="Add Transport" component={Addtransport} />
          <Stack.Screen name="Track Vehicle" component={vehicleTraking} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create();
const Stack = createStackNavigator();

export default App;
