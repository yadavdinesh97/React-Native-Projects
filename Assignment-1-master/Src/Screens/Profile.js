/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import Button from '../Components/Button';
import Input from '../Components/Input';
import {t} from 'react-native-tailwindcss';
import {useForm, Controller} from 'react-hook-form';

export default function Profile({navigation}) {
  const {handleSubmit, control, errors} = useForm();

  const onSubmit = () => {
    Alert.alert('Succesfully Data Updated');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../Assets/Images/Doraemon.png')}
        style={{width: 180, height: 150}}
      />
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
        name="email"
        defaultValue=""
        control={control}
        rules={{
          required: {value: true, message: 'Email is required'},
        }}
        render={({onChange, value}) => (
          <Input
            error={errors.email}
            errorText={errors?.email?.message}
            onChangeText={(text) => onChange(text)}
            value={value}
            placeholder="Enter Email"
          />
        )}
      />

      <Controller
        name="mobileNo"
        defaultValue=""
        control={control}
        rules={{
          required: {value: true, message: 'Mobile No is required'},
        }}
        render={({onChange, value}) => (
          <Input
            error={errors.mobileNo}
            errorText={errors?.mobileNo?.message}
            onChangeText={(text) => onChange(text)}
            value={value}
            placeholder="Enter Mobile No"
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)} label="Submit" />
    </View>
  );
}

const styles = {
  container: [t.flex1, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],
};
