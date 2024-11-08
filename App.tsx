import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppProvider from './Contex/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './Componentes/DrawerNavigator';

export default function App() {
  return (
   <AppProvider>
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
   </AppProvider>
  );
}

