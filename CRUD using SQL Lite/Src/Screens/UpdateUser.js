
import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const UpdateUser = ({ navigation }) => {
  let [inputUserId, setInputUserId] = useState('');
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let updateAllStates = (name, contact, address) => {
    setUserName(name);
    setUserContact(contact);
    setUserAddress(address);
  };

  let searchUser = () => {
    console.log(inputUserId);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(res.user_name, res.user_contact, res.user_address);
          } else {
            alert('No user found');
            updateAllStates('', '', '');
          }
        }
      );
    });
  };
  let updateUser = () => {
    console.log(inputUserId, userName, userContact, userAddress);

    if (!inputUserId) {
      alert('Please fill User id');
      return;
    }
    if (!userName) {
      alert('Please fill name');
      return;
    }
    if (!userContact) {
      alert('Please fill Contact Number');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE table_user set user_name=?, user_contact=? , user_address=? where user_id=?',
        [userName, userContact, userAddress, inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Updation Failed');
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>

                <Text style={{fontSize:20}}>User ID</Text>
                <TextInput
                       placeholder="Enter User Id"
                       onChangeText={(inputUserId) => setInputUserId(inputUserId)}
                       style={{ padding: 10 ,borderWidth:2}}
                       
                    /> 
                <TouchableOpacity style={styles.btn}
                        onPress={searchUser}
                        >
                        <Text style={{fontSize:20}}>Search User</Text>
                    </TouchableOpacity>
             
                    <Text style={{fontSize:20, marginTop:30}}>Name</Text>
                <TextInput
                       placeholder="Enter Name"
                       value={userName}
                       onChangeText={(userName) => setUserName(userName)}
                       style={{ padding: 10 ,borderWidth:2}}
                       
                    />    
                <Text style={{fontSize:20}}>Contact No</Text>
              <TextInput
                placeholder="Enter Contact No"
                value={'' + userContact}
                onChangeText={(userContact) => setUserContact(userContact)}
                maxLength={10}
                keyboardType="numeric"
                style={{ padding: 10, borderWidth:2 }}
              />

              <Text style={{fontSize:20}}>Address</Text>
              <TextInput
                placeholder="Enter Address"
                value={userAddress}
                onChangeText={(userAddress) => setUserAddress(userAddress)}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 , borderWidth:2}}
              />
            
            <TouchableOpacity style={styles.btn}
         onPress={updateUser}
         >
         <Text style={{fontSize:20}}>Update</Text>
       </TouchableOpacity>


            </KeyboardAvoidingView>
          </ScrollView>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default UpdateUser;

const styles = StyleSheet.create(
    {

        btn: {
            marginTop: 20,
            elevation: 8,
            backgroundColor: "#009688",
            borderRadius: 30,
            paddingVertical: 10,
            paddingHorizontal: 12,
            alignItems:'center'

        }
    }
)