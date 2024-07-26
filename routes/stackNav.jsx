import { View, Text, LogBox } from 'react-native'
import React, { useContext,useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../pages/loginScreen'
import Tutorialscreen from '../pages/tutorialscreen'
import SplashScreen from '../pages/splashScreen'
import Bottomnavigation from './bottomnavigation'
import { AuthContext } from '../context/authContext'
import DrawerNavigation from './drawernavigation'
import * as SecureStore from 'expo-secure-store';
import { CourrierEnum } from '../apicall/enum'


LogBox.ignoreAllLogs()

const Stack = createNativeStackNavigator()

const StackNav = () => {



  const { log,setLog } = useContext(AuthContext)
  const [userToken, setUserToken] = useState(null)


  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(CourrierEnum.USERTOKEN);
      console.log(token)
      if (token) {
        setLog(true);
        setUserToken(token);
      }
    };
    loadToken();
  }, [log]);

  return (

    <Stack.Navigator>
      {log == true && userToken != null ? (
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