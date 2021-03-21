import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

class LoginScreen extends React.Component {
  state = {
    user: '',
    pass: '',
  };

  onSubmit() {
    console.log(this.state.date);
    if (this.isValid()) {
      this.props.navigation.navigate('Home', {
        userName: this.state.user
      });
    }
  }

  isValid() {
    const {user, pass} = this.state;
    if (user.length == 0 ) {
      Alert.alert('Invalid', 'You must enter an username');
      return false;
    } else if (user.length <= 5) {
      Alert.alert(
        'Invalid',
        'At least Enter more than 5 Character for Username',
      );
      return false;
    } else if (pass.length == 0) {
      Alert.alert('Invalid', 'You must enter  password ');
      return false;
    } else if (pass.length <= 5) {
      Alert.alert(
        'Invalid',
        'At least Enter more than 5 Character for Password',
      );
      return false;
    }
    return true;
  }

  render() {
    const {date} = this.state;
    return (
      <View style={styles.design}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#00BCD4"
          translucent={true}
        />
        <Text style={{fontSize: 15, marginTop: 20}}>UserName</Text>

        <TextInput
          style={styles.user}
          placeholder="Enter Username"
          onChangeText={(user) => this.setState({user})}
        />
        <Text style={{fontSize: 15, marginTop: 20}}>Password</Text>

        <TextInput
          style={styles.pass}
          placeholder="Enter Password"
          onChangeText={(pass) => this.setState({pass})}
        />

        <Button title="Press me" onPress={() => this.onSubmit()} />

        <Text>{'Username:-' + this.state.user}</Text>
        <Text>{'Password:-' + this.state.pass}</Text>

        <TouchableOpacity
          style={styles.newUserBtn}
          onPress={() => this.props.navigation.navigate('SignIn')}>
          <View style={{color: 'green'}}>
            <Text>New User</Text>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ActivityIndicator')}>
          <View style={{color: 'blue'}}>
            <Text>Activity</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  design: {},

  user: {
    fontSize: 10,
    borderWidth: 1,
    width: 300,
  },

  pass: {
    fontSize: 10,
    borderWidth: 1,
    width: 300,
  },

  newUserBtn: {
    backgroundColor: 'pink',
    width: 150,
    height: 100,
  },
});
