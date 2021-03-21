import React, { useState } from 'react';
import { Button, Text, View, Alert, SafeAreaView ,TextInput, TouchableOpacity,StyleSheet} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const DeleteUser = ({ navigation }) => {
  let [inputUserId, setInputUserId] = useState('');

  let deleteUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',
        [inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User deleted successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Please insert a valid User Id');
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>


        <Text style={{fontSize:20,marginTop:40}}>User ID</Text>
                <TextInput
                       placeholder="Enter User Id"
                       onChangeText={(inputUserId) => setInputUserId(inputUserId)}
                       style={{ padding: 10 ,borderWidth:2}}
                       
                    /> 
                <TouchableOpacity style={styles.btn}
                        onPress={deleteUser}
                        >
                        <Text style={{fontSize:20}}>Delete  User</Text>
                    </TouchableOpacity>


        </View>

      </View>
    </SafeAreaView>
  );
};

export default DeleteUser;


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