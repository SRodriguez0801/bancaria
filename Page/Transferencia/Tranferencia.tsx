import { View, Text, Alert, Button, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { AppContext } from "../../Contex/AppContext";
import { TextInput } from "react-native-gesture-handler";

export default function Tranferencia() {
  const [monto, setMonto] = useState<string>("");
  const [cuenta, setCuenta] = useState<string>("");
  const [nombre, setNombre] = useState<string>("");
  const { saldo, transferirSaldo } = useContext(AppContext)!;

  const handleTransfer = () => {
    const montoNum = parseFloat(monto);
    if (montoNum <= saldo && montoNum > 0) {
      if (transferirSaldo(montoNum)) {
        Alert.alert("Exito", ` Retiro de $.${monto} realizada`);
        setMonto("");
        setCuenta("");
        setNombre("");
      }
    } else {
      Alert.alert("Error", "Saldo insuficiente o monto invalido");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.balanceText}>Bienvenido a la Aplicacion </Text>
      <Text style={styles.balanceText}>De MiBanco erapalo</Text>

      <Text>Numero de Cuenta </Text>
      <TextInput
        style={styles.input}
        value={cuenta}
        onChangeText={setCuenta}
        placeholder="Numero de Cuenta"
      ></TextInput>
      <Text>Nombre del Destinatario </Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Nombre"
      ></TextInput>
      <Text>Numero de Monto </Text>
      <TextInput
        style={styles.input}
        value={monto}
        onChangeText={setMonto}
        placeholder="Monto"
      ></TextInput>
      <Button title="Deposito de Saldo " onPress={handleTransfer}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  balanceText: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  input: {
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
});
