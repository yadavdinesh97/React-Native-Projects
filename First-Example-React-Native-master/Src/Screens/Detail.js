import React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';

class DetailScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Detail Screen</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DashBoard')}>
          <View style={{width:100,height:100,backgroundColor:'yellow', justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <Text>Navigate</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DetailScreen;
