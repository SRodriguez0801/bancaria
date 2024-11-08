import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Inicio from '../Page/Inicio/Inicio';
import Tranferencia from '../Page/Transferencia/Tranferencia';
import Historico from '../Page/Historico/Historico';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
   <Drawer.Navigator initialRouteName='Inicio'>
    <Drawer.Screen name='Inicio' component={Inicio}/>
    <Drawer.Screen name='Transferencias' component={Tranferencia}/>
    <Drawer.Screen name='Historico' component={Historico}/>
   </Drawer.Navigator>
  );
}