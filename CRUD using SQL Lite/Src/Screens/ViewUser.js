import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const ViewUser = () => {
    let [inputUserId, setInputUserId] = useState('');
    let [userData, setUserData] = useState({});

    let searchUser = () => {
        console.log(inputUserId);
        setUserData({});
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM table_user where user_id = ?',
                [inputUserId],
                (tx, results) => {
                    var len = results.rows.length;
                    console.log('len', len);
                    if (len > 0) {
                        setUserData(results.rows.item(0));
                    } else {
                        alert('No user found');
                    }
                }
            );

            console.log(userData);
        });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{fontSize:20, marginTop:40}}>User ID</Text>
                    <TextInput
                        placeholder="Enter User Id"
                        onChangeText={(inputUserId) => setInputUserId(inputUserId)}
                        style={{ padding: 10, borderWidth: 2 }}

                    />
                    <TouchableOpacity style={styles.btn}
                        onPress={searchUser}
                    >
                        <Text style={{fontSize:20}}>Search User</Text>
                    </TouchableOpacity>

                    <View style={{ marginLeft: 25, marginRight: 35, marginTop: 30 }}>
                        <Text style={styles.txt}>User Id: {userData.user_id}</Text>
                        <Text style={styles.txt}>User Name: {userData.user_name}</Text>
                        <Text style={styles.txt}>User Contact: {userData.user_contact}</Text>
                        <Text style={styles.txt}>User Address: {userData.user_address}</Text>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default ViewUser;


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

        },

        txt:
        {
            fontSize: 20,
            fontWeight: 'bold'
        }
    }
)