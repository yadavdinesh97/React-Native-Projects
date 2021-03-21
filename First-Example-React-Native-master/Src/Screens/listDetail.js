import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

import Spinner from '../Components/Activity'
import Footer from '../Components/footer';

   
class listDetail extends Component {
   state = {
      data: [], spinner: true
   }

  async componentDidMount()
   {
        let detailID = await this.props.route.params.listDetailID
        console.log(detailID)
        fetch('https://jsonplaceholder.typicode.com/todos/'+detailID)

        .then((response) => response.json())
        .then((result) => this.setState({data: result, spinner: false}));
        

   }


  
   render() {
       const {data} =this.state
      return (
         <View style={{flex:1}}>
          <Spinner spinner={this.state.spinner} />
         <View style={{flex:2}}>
         <Text>
               ID:-{data.id}
            </Text>

            <Text>
               TITLE:-{data.title}
            </Text>
        
            <Text>
               COMPLETED:-{data.completed}
            </Text>

         </View>
            <Footer />
        
         </View>
      )
   }
}
export default listDetail

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})