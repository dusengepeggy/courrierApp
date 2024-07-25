import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
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
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Navigator tabBar={(props) => <TabBar {...props} />}>
        <Screen
          name="Home"
          component={Homescreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="Recieve"
          component={ReceiverTopNav}
          options={{ title: 'Recieve' }}
        />
        <Screen
          name="Manifier"
          component={Manifier}
          options={{ title: 'Manifier' }}
        />
        <Screen
          name="Sendcourrier"
          component={Sendcourrier}
          options={{ title: 'Send Courrier' }}
        />
        <Screen
          name="profile"
          component={Profile}
          options={{ headerShown: false }}
        />
      </Navigator>
    </KeyboardAvoidingView>
  );
}
