import React,{useContext, useState} from 'react';
import { View, Text, Image } from 'react-native';
import tailwind from 'twrnc';
import { TextInput } from 'react-native-paper';
import { useForm, Controller, set } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../components/button';
import Loader from '../components/loader';
import { AuthContext } from '../context/authContext';

// Validation Schema
const schema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
});

export default function LoginScreen({ navigation }) {
  const {login} =  useContext(AuthContext)
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async data => {
    setLoading(true);
    try {
      setLoading(true)
      const response = await login(data) ;
    } catch (error) {
      setLoading(true)
      console.error(error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <View style={tailwind`h-full bg-[#FFFFFF]`}>
      <View style={tailwind`h-[20%] bg-[#2490A9] justify-end`} >
        <Image style={tailwind`h-20 w-[100%] absolute`} source={require('../assets/towers.png')} resizeMode='repeat' />
        <Image style={tailwind`-bottom-7 ml-15`} resizeMode='center' source={require("../assets/bike.png")} />
      </View>
      <Image source={require("../assets/logo.png")} style={tailwind`border-[3px] border-white rounded-2 w-20 h-18 left-4 -top-9`} resizeMode='contain' />
      <View style={tailwind`h-[80%] w-[100%] bg-[#FFFFFF] self-center -top-3`}>
        {loading ? (<Loader loading={loading}  />):null}
        <View style={tailwind`w-[90%] bg-[#FFFFFF] self-center`}>
          <Text style={tailwind`font-500 text-18px leading-tight `}>Sign In</Text>
          <Text style={tailwind`font-400  text-13px leading-tight opacity-40 my-4`}>Welcome back, you've been missed</Text>

          <View style={tailwind`my-1`}>
            <Text style={tailwind`font-400 text-13px leading-tight my-3`}>Username</Text>
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter your username"
                  style={tailwind`bg-white text-14px`}
                  mode="outlined"
                  theme={{ colors: { primary: '#4CC6E2' } }}
                  outlineColor="lightgray"
                  placeholderTextColor="lightgray"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.username && <Text style={tailwind`text-red-500`}>{errors.username.message}</Text>}
          </View>

          <View style={tailwind`my-1`}>
            <Text style={tailwind`font-400 text-13px leading-tight my-3`}>Password</Text>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter your password"
                  style={tailwind`bg-white text-14px`}
                  mode="outlined"
                  theme={{ colors: { primary: '#4CC6E2' } }}
                  outlineColor="lightgray"
                  placeholderTextColor="lightgray"
                  secureTextEntry
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.password && <Text style={tailwind`text-red-500`}>{errors.password.message}</Text>}
          </View>

          <View style={tailwind`w-full justify-end`} className="justify-end">
            <Text style={tailwind`font-400 text-12px leading-tight text-[#2490A9] self-end my-2`}>Forgot Password?</Text>
          </View>
        </View>
        <Button name="Sign In" action={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}
