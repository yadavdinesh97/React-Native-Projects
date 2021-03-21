import React from 'react';
import {Button, View, Text, FlatList} from 'react-native';
import Footer from '../Components/footer'


class Dashnboard extends React.Component {


  // state=
  // {data: []};  
  
  state = {data: [{name: 'Dinesh'}, {name: 'Sonu'}, {name: 'rahul'}],

 
};

componentDidMount()
{
  console.log(this.props.route.params)

}

  render() {
    return (
      <View style={{flex:1}}>
      <View style={{flex:1}}>

      <Button title="open nav" onPress={()=>this.props.navigation.openDrawer()} />
      {/* <Text>Hii  :-{this.props.route.params.userName} </Text> */}

        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />




        </View>
        <Footer/>
      </View>
    );
  }
}


export default Dashnboard;
