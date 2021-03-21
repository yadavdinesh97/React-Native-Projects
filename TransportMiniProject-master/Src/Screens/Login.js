import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {t, color} from 'react-native-tailwindcss';
import Input from '../Components/Input';
import Button from '../Components/Button';
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function userLogin({navigation}) {
  //   const [userName,setUserName] = useState('');
  //   const [passWord, setpassWord] = useState('');

  let obj = {
    name: '',
    adminId: '',
    packageID: '',
    phoneNo:''
  };

  const {handleSubmit, control, errors} = useForm();

  const onSubmit = (data) => {
    axios
      .get(
        `https://87073f87c9d2.ngrok.io/admin/login?username=${data.name}&password=${data.password}`,
      )
      .then((res) => {
        const result = res.data;
        // console.log(result)
        obj.name = result.data.name;
        obj.adminId = result.data.adminId;
        obj.packageID = result.data.packageID;
        obj.phoneNo=result.data.phone

        console.log(obj.name, obj.packageID, obj.phoneNo);
        AsyncStorage.setItem('user', JSON.stringify(obj));
        navigation.navigate('DashBoard');
      } );
  };

  // const displayData = async () => {
  //     let user = await AsyncStorage.getItem('user');
  //     let parsed = await JSON.parse(user);
  //     alert(parsed.name+ ',' +parsed.adminId+',' +parsed.packageID+ ',' +parse.phone);
  //   } 

  return (
    <View style={styles.container}>
      {/* <Input placeholder="Enter Name" />
      <Input placeholder="Enter Password" /> */}

      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{
          required: {value: true, message: 'Name is required'},
        }}
        render={({onChange, value}) => (
          <Input
            error={errors.name}
            errorText={errors?.name?.message}
            onChangeText={(text) => onChange(text)}
            value={value}
            placeholder="Enter Name"
          />
        )}
      />

      <Controller
        name="password"
        defaultValue=""
        control={control}
        rules={{
          required: {value: true, message: 'Password is required'},
        }}
        render={({onChange, value}) => (
          <Input
            error={errors.password}
            errorText={errors?.password?.message}
            onChangeText={(text) => onChange(text)}
            value={value}
            placeholder="Enter Password"
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)} label="Submit"/>

      {/* <TouchableOpacity onPress={displayData}>
        <Text style={{marginTop: 30}}>Click to display data</Text>
      </TouchableOpacity> */}

      {/* <Button label="Submit" /> */}
    </View>
  );
}

const styles = {
  container: [t.flex1, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],
};
