import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../pages/loginScreen'
import Tutorialscreen from '../pages/tutorialscreen'
import SplashScreen from '../pages/splashScreen'

const Stack = createNativeStackNavigator()

const StackNav = () => {
  return (
    
    <Stack.Navigator initialRouteName='Tutorial'>
      {/* <Stack.Screen name="splash" component={SplashScreen} options={{ headerShown: false }} /> */}
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Tutorial" component={Tutorialscreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default StackNav