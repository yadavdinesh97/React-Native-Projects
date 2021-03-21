import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
                            []
                        );
                    }
                }
            );
        });
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.container}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>SQL Lite Example </Text>

                    <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.navigate('Add')}
                    >
                        <Text>Add User</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.navigate('Update')}
                    >
                        <Text>Update User</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.navigate('Delete')}
                    >
                        <Text>Delete User</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.navigate('View')}
                    >
                        <Text>View User</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.navigate('ViewAll')}
                    >
                        <Text>View All User</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;


const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 600,


        },

        btn: {
            elevation: 8,
            backgroundColor: "#009688",
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 12

        }
    }
)