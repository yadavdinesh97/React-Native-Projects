import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

export default function Privacypolicy() {
  return (
    <View style={{flex: 1}}>
      <WebView source={{uri: 'https://www.google.com/'}} />
    </View>
  );
}
