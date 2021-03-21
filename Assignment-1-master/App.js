import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import UserLogin from './Src/Screens/Login';
import DashBoard from './Src/Screens/Dashboard';
import Registration from './Src/Screens/Register';
import Privacypolicy from './Src/Screens/Privacypolicy';
import Profile from './Src/Screens/Profile';
import ChangePass from './Src/Screens/ChangepassWord';

class Drawernav extends React.Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="DashBoard">
        <Drawer.Screen name="DashBoard" component={DashBoard} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Change Password" component={ChangePass} />
      </Drawer.Navigator>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={UserLogin} />
          <Stack.Screen name="DashBoard" component={Drawernav} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="Privacy policy" component={Privacypolicy} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create();
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

export default App;
