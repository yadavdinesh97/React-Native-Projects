import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { useEffect } from 'react';
import axios from 'axios';

export default function dashBoard({navigation}) {

  const[sliderData, setSliderData]=useState([]);

  const [sliderImages, setSliderImages]=useState([]);

  useEffect( (data)=>{
    axios
      .get('https://jsonplaceholder.typicode.com/photos/')
      .then((response) => {
        const result = response.data;

        const imgr=result.slice(0,5)
        setSliderData(imgr)
        let sliderImages = []
         imgr.map(data => {
           sliderImages.push(data.url)
         })
         setSliderImages(sliderImages)
  });

})

  return (
    <View style={styles.first}>
      <View style={styles.second}>
        {/* <SliderBox images={ sliderImages}
                    sliderBoxHeight={200}
         /> */}
      </View>

      <View style={styles.third}>
        <TouchableOpacity
          style={styles.circlebtn}
          onPress={() => {
            navigation.navigate('Add Transport');
          }}>
          <Text>Add Order</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.circlebtn}>
          <Text>Add Order</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.circlebtn}>
          <Text>Add Order</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.circlebtn}>
          <Text>Add Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}









const styles = StyleSheet.create({
  first: {
    flex: 1,
    backgroundColor: 'gray',
    // alignItems: 'center',
    justifyContent: 'center',
  },

  second: {
    flex: 1,
    
  },

  third: {
    flex: 1,
    backgroundColor: 'lightgreen',
    padding: 20,
    flexDirection: 'row',
  },

  circlebtn: {
    backgroundColor: 'red',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginHorizontal: 7,
  },
});
