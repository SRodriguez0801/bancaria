import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Inicio from "../Page/Inicio/Inicio";
import Tranferencia from "../Page/Transferencia/Tranferencia";
import Historico from "../Page/Historico/Historico";

export default function NavBar() {
  const drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <drawer.Navigator initialRouteName="Inicio">
        <drawer.Screen name="Inicio" component={Inicio} />
        <drawer.Screen name="Transferencia" component={Tranferencia} />
        <drawer.Screen name="Historico" component={Historico} />
      </drawer.Navigator>
    </NavigationContainer>
  );
}
