import React, {useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {t, color} from 'react-native-tailwindcss';

import Input from '../Components/Input';
import Button from '../Components/Button';

const MOBILE_REGEX = /^[0]?[789]\d{9}$/;

export default function Addtransport({navigation}) {
  const {handleSubmit, control, errors} = useForm();

  const onSubmit = (data) => {
    console.log(data.name);
    console.log(data.Address);
    console.log(data.Mobile);
  };

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
        name="Address"
        defaultValue=""
        control={control}
        rules={{
          required: {value: true, message: 'Address is required'},
        }}
        render={({onChange, value}) => (
          <Input
            error={errors.Address}
            errorText={errors?.Address?.message}
            onChangeText={(text) => onChange(text)}
            value={value}
            placeholder="Enter Address"
          />
        )}
      />

      <Controller
        name="Mobile"
        defaultValue=""
        control={control}
        rules={{
          required: {value: true, message: 'Mobile No is required'},
          pattern:{
          value: MOBILE_REGEX,
          message: 'Not a valid Mobile No',}
        }}
        
        render={({onChange, value}) => (
          <Input
            error={errors.Mobile}
            errorText={errors?.Mobile?.message}
            onChangeText={(text) => onChange(text)}
            value={value}
            placeholder="Enter Mobile No
            "
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)} label="Submit" />
    </View>
  );
}

const styles = {
  container: [t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],
};
