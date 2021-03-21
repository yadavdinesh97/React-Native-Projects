import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import {withNavigation} from '@react-navigation/compat'

class Activity extends Component {
  render() {
      console.log(this.props)
    return (
      <View style={[styles.container, styles.horizontal]}>
        
        <ActivityIndicator size="large" color="purple" animating={this.props.spinner}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'absolute',
    top:200,
    left:140
    
  },
  horizontal: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 20
  }
});

export default withNavigation(Activity)