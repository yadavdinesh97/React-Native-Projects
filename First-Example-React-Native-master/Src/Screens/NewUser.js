import React from 'react';
import {View, Text, TouchableOpacity, Alert, ScrollView,Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';

class NewUser extends React.Component {
  state = {
    cname: '',
    userName: '',
    email: '',
    password: '',
    mobile_No: '',
    gender: 'Male',
  };

  validate_Fields() {
    const {cname, userName, email, passWord, mobile_No,gender} = this.state;

    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const mobileReg = /^[0]?[789]\d{9}$/;

    console.log(emailReg.test(email));
    console.log(mobileReg.test(mobile_No));

    console.log(gender);

    if (cname == '') {
      Alert.alert('Enter Name');
      return false;
    } else if (userName == '') {
      Alert.alert('Enter Username');
      return false;
    } else if (email == '') {
      Alert.alert('Enter email ID');
      return false;
    }else if (emailReg.test(email) === false) {
      Alert.alert('Email Id  is Not Correct');
      return false;
    }else if (passWord == '') {
      Alert.alert('enter password');
      return false;
    } else if (mobile_No == '') {
      Alert.alert('Enter mobile no');
      return false;
    } else if (mobileReg.test(mobile_No) === false) {
      Alert.alert('Mobile No is Not Correct');
      return false;
    }

    this.props.navigation.navigate('Home',{userName: this.state.cname, mobNo: this.state.mobile_No, gender: this.state.gender});
    return true;
  }
  render() {
    return (
      <ScrollView>
        <View>
          <Text style={{fontSize: 20}}>Sign In Area</Text>

          <View style={{borderWidth: 4}}>
            <Text>Name</Text>

            <TextInput
              placeholder="Enter Name"
              style={{borderWidth: 1}}
              onChangeText={(cname) => this.setState({cname})}
            />

            <Text>User Name</Text>

            <TextInput
              placeholder="Enter UserName"
              style={{borderWidth: 1}}
              onChangeText={(userName) => this.setState({userName})}
            />

            <Text>Email</Text>

            <TextInput
              placeholder="Enter Email Id"
              style={{borderWidth: 1}}
              onChangeText={(email) => this.setState({email})}
            />

            <Text>Password</Text>

            <TextInput
              placeholder="Enter Password"
              style={{borderWidth: 1}}
              onChangeText={(passWord) => this.setState({passWord})}
            />

            <Text>Mobile No</Text>

            <TextInput
              placeholder="Enter Mobile No"
              style={{borderWidth: 1}}
              onChangeText={(mobile_No) => this.setState({mobile_No})}
            />
          </View>

          <Picker
            selectedValue={this.state.gender}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue) =>
              this.setState({gender: itemValue})
            }>
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>

          <TouchableOpacity onPress={() => this.validate_Fields()}>
            <View
              style={{
                width: 80,
                height: 50,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginTop: 20,
              }}>
              <Text>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default NewUser;
