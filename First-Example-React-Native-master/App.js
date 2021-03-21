/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Src/Screens/Login';
import Details from './Src/Screens/Detail';
import Dashboard from './Src/Screens/Dashnboard';
import NewUser from './Src/Screens/NewUser';
import profile from './Src/Screens/profile';
import List from './Src/Screens/List';
import Listing from './Src/Screens/Listing';
import listDetail from './Src/Screens/listDetail';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Webview from './Src/Screens/Webview';
import PushNotification from 'react-native-push-notification';
import firebase from '@react-native-firebase/app'

class Drawernav extends React.Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="DashBoard">
        <Drawer.Screen name="DashBoard" component={Dashboard} />
        <Drawer.Screen name="Visit Web" component={Webview} />
        <Drawer.Screen name="Listing" component={Listing} />
      </Drawer.Navigator>
    );
  }
}

class App extends React.Component {
  componentDidMount() {
    this.checkPermission();

    // Must be outside of any component LifeCycle (such as `componentDidMount`).
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);

        // process the notification

        Alert.alert(notification.message )
      },

      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);

        // process the action
      },

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function (err) {
        console.error(err.message, err);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });
  }

  

  //1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  //3
  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
    console.log(fcmToken)
  }

  //2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignIn" component={NewUser} />
          <Stack.Screen name="Home" component={Drawernav} />
          <Stack.Screen name="Profile" component={profile} />
          <Stack.Screen name="List View" component={List} />
          <Stack.Screen name="ListDetails" component={listDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default App;
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const styles = StyleSheet.create({});
