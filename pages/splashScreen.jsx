import { View, Text, Touchable, Image, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import SplashImg from '../assets/splash.png'


const SplashScreen = ({navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("Login")}>
            <ImageBackground source={"../assets/splash.png"}  style={{ width: '100%', height: '100%', resizeMode: 'cover' }}>

            </ImageBackground>

    </Pressable>


  )
}

export default SplashScreen