/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';

function Item({item}) {
  console.log(item);
  return (
    <View style={styles.listItem}>
      <Image
        source={{uri: item.img}}
        style={{height: 60, width: 60, borderRadius: 30}}
      />
      <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.name} </Text>
    </View>
  );
}

export default function DashBoard({navigation}) {
  const [names, setNames] = useState([
    // {name: 'sonu', img:'../Assets/Images/Doraemon.jpg'},
    {name: 'rahul', img: 'https://picsum.photos/200'},
    {name: 'arvind', img: 'https://picsum.photos/200'},
    {name: 'pankaj', img: 'https://picsum.photos/200'},
  ]);

  return (
    <View style={styles.container}>
      <FlatList data={names} renderItem={({item}) => <Item item={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    position: 'relative',
  },

  listItem: {
    margin: 20,
    padding: 20,
    width: '100%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: 'gray',
  },
});
