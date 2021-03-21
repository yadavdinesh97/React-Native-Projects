import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {t} from 'react-native-tailwindcss';
import Button from '../Components/Button';
import Input from '../Components/Input';

export default function UserLogin({navigation}) {
  const {handleSubmit, control, errors} = useForm();

  const onSubmit = (data) => {
    console.log(data, 'data');
    navigation.navigate('DashBoard');
  };

  return (
    <View style={styles.container}>
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

      <Button onPress={handleSubmit(onSubmit)} label="Submit" />

      <View style={styles.container2}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button2}
          onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.buttonLabel2}>Registration</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  container: [t.flex1, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],

  container2: [t.flex2, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],

  button2: [t.selfStretch, t.bgGreen600, t.itemsCenter, t.pY3, t.rounded],
  buttonLabel2: [t.textWhite, t.textLg],
};
