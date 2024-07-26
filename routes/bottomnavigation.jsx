import React, { useState, useEffect } from 'react';
import { View, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../pages/Home/homescreen';
import Recieve from '../pages/recieve';
import Manifier from '../pages/manifier';
import Sendcourrier from '../pages/sendcourrier';
import TabBar from '../components/TabBar';
import Profile from '../pages/profile/Profile';
import ReceiverTopNav from './receiveTabnav';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Bottomnavigation() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={{ flex: 1 }}>
        <Navigator tabBar={(props) => (isKeyboardVisible ? null : <TabBar {...props} />)}>
          <Screen
            name="Home"
            component={Homescreen}
            options={{ headerShown: false }}
          />
          <Screen
            name="Recieve"
            component={ReceiverTopNav}
            options={{ title: 'Recieve',headerShown: false }}
          />
          <Screen
            name="Manifier"
            component={Manifier}
            options={{ title: 'Manifier' }}
          />
          <Screen
            name="Sendcourrier"
            component={Sendcourrier}
            options={{headerShown: true}}
          />
          <Screen
            name="profile"
            component={Profile}
            options={{ headerShown: false }}
          />
        </Navigator>
      </View>
    </KeyboardAvoidingView>
  );
}
