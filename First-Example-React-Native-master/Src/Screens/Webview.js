import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


class Web extends Component {
  render() {
    return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
  }
}




export default Web;