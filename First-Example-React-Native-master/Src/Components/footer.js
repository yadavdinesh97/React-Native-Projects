/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {withNavigation} from '@react-navigation/compat'

 class footer extends React.Component {
  render() {
    return (
      <View style={styles.foot}>
        <Text
          style={styles.text1}
          onPress={() => this.props.navigation.navigate('Home',{userID:'1'})}>
          Home
        </Text>
        <Text style={styles.text2} onPress={()=> this.props.navigation.navigate("List View")}>List</Text>
        <Text
          style={styles.text3}
          onPress={() => this.props.navigation.navigate('Profile')}>
          profile
        </Text>
      </View>
    );
  }
}

export default withNavigation(footer)

const styles = StyleSheet.create({
  foot: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'lightpink',
    width: '100%',
    height: 50,
    alignItems: 'center',
   
  },

  text1: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  text2: {
    flex: 1,
    justifyContent: 'center',
  },
  text3: {
    justifyContent: 'flex-end',
  },
});
