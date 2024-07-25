import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../pages/loginScreen'
import Tutorialscreen from '../pages/tutorialscreen'
import SplashScreen from '../pages/splashScreen'
import Bottomnavigation from './bottomnavigation'
import { AuthContext } from '../context/authContext'
import DrawerNavigation from './drawernavigation'

const Stack = createNativeStackNavigator()

const StackNav = () => {
  const { log } = useContext(AuthContext)
  return (

    <Stack.Navigator>
      {log ? (
        <>
          <Stack.Screen name="Bottomnavigation" component={Bottomnavigation} options={{ headerShown: false }} />
          <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} options={{ headerShown: false }} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Tutorial" component={Tutorialscreen} options={{ headerShown: false }} />
        </>

      )}
    </Stack.Navigator>
  )
}

export default StackNav