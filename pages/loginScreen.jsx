import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { Image } from 'react-native'
import Button from '../components/button'
import { TextInput } from 'react-native-paper'

export default function LoginScreen({ navigation }) {
  return (
    <View style={tailwind`h-full bg-[#FFFFFF]`}>
      <View style={tailwind`h-[20%] bg-[#2490A9] justify-end`} >
        <Image style={tailwind`h-20 w-[100%] absolute`} source={require('../assets/towers.png')} resizeMode='repeat' />
        <Image style={tailwind`-bottom-7 ml-15`} resizeMode='center' source={require("../assets/bike.png")} />

      </View>
      <Image source={require("../assets/logo.png")} style={tailwind`border-[3px] border-white rounded-2 w-20 h-18 left-4 -top-9`} resizeMode='contain' />
      <View style={tailwind`h-[80%] w-[100%] bg-[#FFFFFF] self-center -top-3`}>
        <View style={tailwind`w-[90%] bg-[#FFFFFF] self-center`}>
          <Text style={tailwind`font-500 text-18px leading-tight `} >
            Sign In
          </Text>
          <Text style={tailwind`font-400  text-13px leading-tight opacity-40 my-4`} >
            Welcome back , you've been missed
          </Text>
          <View style={tailwind`my-1`}>
            <Text style={tailwind`font-400 text-13px leading-tight  my-3`}>
              UserName
            </Text>
            <TextInput
              placeholder='Enter your username'
              style={tailwind`bg-white text-14px`}
              mode='outlined'
              theme={{ colors: { primary: '#4CC6E2', } }}
              outlineColor='lightgray'
              placeholderTextColor={"lightgray"}
            />
          </View>
          <View style={tailwind`my-1`}>
            <Text style={tailwind`font-400 text-13px leading-tight  my-3`}>
              Password
            </Text>
            <TextInput
              placeholder='Enter your password'
              style={tailwind`bg-white text-14px`}
              mode='outlined'
              theme={{ colors: { primary: '#4CC6E2', } }}
              outlineColor='lightgray'
              placeholderTextColor={"lightgray"}
            />
          </View>
          <View style={tailwind`w-full justify-end`} className="justify-end">
            <Text style={tailwind`font-400 text-12px leading-tight text-[#2490A9]  self-end my-2`}>
              Forgot Password?
            </Text>
          </View>

        </View>

        <Button name={"Sign In"} />
      </View>
    </View>
  )
}