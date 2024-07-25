import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNav from './routes/stackNav';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Bottomnavigation from './routes/bottomnavigation';
import AuthContextProvider from './context/authContext';

export default function App() {
  return (
    <AuthContextProvider>
    <GestureHandlerRootView>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </GestureHandlerRootView>
    </AuthContextProvider>
  );
}

