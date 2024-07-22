import { View, Text, Touchable, Image, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import SplashImg from '../assets/Splash.png'


const SplashScreen = ({navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("Login")}>
            <ImageBackground source={SplashImg}  style={{ width: '100%', height: '100%', resizeMode: 'cover' }}>

            </ImageBackground>

    </Pressable>
  



  )
}

export default SplashScreen