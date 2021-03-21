import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import { launchImageLibrary} from 'react-native-image-picker';
class profile extends React.Component {
  state = {
    imageData: {},
  };

  selectFile = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        launchImageLibrary(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
          },
          (response) => {
            this.setState({imageData: response});
          },
        );
      } else {
      Alert.alert('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    console.log(this.state.imageData);
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Image
            source={{uri: this.state.imageData.uri}}
            style={{width: 200, height: 300}}
          />

          <TouchableOpacity onPress={this.selectFile} style={styles.button}>
            <View>
              <Text style={{color: 'red'}}>Add Photo</Text>
            </View>
          </TouchableOpacity>

          {/* <Text>Hii UserName :-{this.props.route.params.userName} </Text>
           <Text>Mob No:-{this.props.route.params.mobNo} </Text>
           <Text> Gender:-{this.props.route.params.genDer} </Text> */}
        </View>

        <View style={styles.foot}>
          <Text
            style={styles.text1}
            onPress={() => this.props.navigation.navigate('Home')}>
            Home
          </Text>
          <Text style={styles.text2} onPress={()=> this.props.navigation.navigate('List View')}>List</Text>
          <Text
            style={styles.text3}
            onPress={() => this.props.navigation.navigate('Profile')}>
            Profile
          </Text>
        </View>
      </View>
    );
  }
}
export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },

  foot: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'lightpink',
    width: '100%',
    height: 30,
    alignItems: 'flex-end',
  },

  text1: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  text2: {
    flex: 1,
    justifyContent: 'center',
  },
  text3: {
    justifyContent: 'flex-end',
  },
});
