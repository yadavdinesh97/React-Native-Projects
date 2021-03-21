import React from 'react';
import {
  Button,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Footer from '../Components/footer';
import NetInfo from '@react-native-community/netinfo';

import Spinner from '../Components/Activity';

class Listing extends React.Component {
  state = {data: [], spinner: true};

  async componentDidMount() {
    let internetState = await NetInfo.fetch();
   // Alert.alert(internetState.isConnected)
    if (internetState.isConnected) {
      fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => response.json())
        .then((result) => this.setState({data: result, spinner: false}));
    } else {
      Alert.alert('Not connected to internet');
    }
  }

  renderData = ({item, key}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ListDetails', {
              listDetailID: item.id,
            })
          }>
          <Text>{item.userId}</Text>
          <Text>{item.id}</Text>
          <Text>{item.title}</Text>
          <Text>{item.completed}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Spinner spinner={this.state.spinner} />
        <View style={{flex: 1}}>
          <FlatList data={this.state.data} renderItem={this.renderData} />
        </View>
        <Footer />
      </View>
    );
  }
}
export default Listing;
