import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import NotificationsScreen from '../pages/profile/notification';


const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
      <Drawer.Navigator initialRouteName="Notifications">
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
  );
}