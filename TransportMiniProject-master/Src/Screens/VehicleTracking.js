import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from "react-native-geolocation-service";

export default function vehicleTraking() {
  const [mark] = useState([
    {
      title: 'hello dear',
      coordinates: {
        latitude: 28.57966,
        longitude: 77.32111,
      },
    },
    {
      title: 'hii', 
      coordinates: {
        latitude: 35.57966,
        longitude: 80.32111,
      },
    },
  ]);

  return (
    <View style={styles.container}>


      {/* Below Commented  Code for only one marker in the map */}

      {/* <MapView
        style={styles.map}
        initialRegion={{
          latitude: 28.57966,
          longitude: 77.32111,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}> */}
      {/* <Marker
          coordinate={{latitude: 28.57966, longitude: 77.32111}}
          title={'JavaTpoint'}
        /> */}


      <MapView style={styles.map}>
        {mark.map((marker) => (
          <MapView.Marker
            coordinate={marker.coordinates}
            title={marker.title}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
