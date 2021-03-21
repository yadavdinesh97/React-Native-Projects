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

export default function ChangePass({navigation}) {
  const {handleSubmit, control, errors} = useForm();

  const onSubmit = () => {
    Alert.alert('Password Reset Success');
  };

  return (
    <View style={styles.container}>
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

      <Controller
        name="Cpassword"
        defaultValue=""
        control={control}
        rules={{
          required: {value: true, message: 'Password is required'},
        }}
        render={({onChange, value}) => (
          <Input
            error={errors.Cpassword}
            errorText={errors?.Cpassword?.message}
            onChangeText={(text) => onChange(text)}
            value={value}
            placeholder="Confirm Password"
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)} label="Reset" />
    </View>
  );
}

const styles = {
  container: [t.flex1, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],
};
