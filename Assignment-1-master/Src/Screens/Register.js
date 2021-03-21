import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {t} from 'react-native-tailwindcss';
import Button from '../Components/Button';
import Input from '../Components/Input';

export default function Registration({navigation}) {
  const {handleSubmit, control, errors} = useForm();

  const onSubmit = () => {
    navigation.navigate('DashBoard');
  };

  return (
    <ScrollView>
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
              placeholder="Enter email"
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
              secureTextEntry={true}
              placeholder="Confirm Password"
            />
          )}
        />

        <Button onPress={handleSubmit(onSubmit)} label="Register" />

        <View style={styles.container2}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button2}
            onPress={() => navigation.navigate('Privacy policy')}>
            <Text style={styles.buttonLabel2}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = {
  container: [t.flex1, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],

  container2: [t.flex2, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],

  button2: [t.selfStretch, t.bgGreen600, t.itemsCenter, t.pY3, t.rounded],
  buttonLabel2: [t.textWhite, t.textLg],
};
