import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../../Contex/AppContext";

export default function Historico() {
  const { transacciones } = useContext(AppContext)!;

  return (
    <View style={styles.container}>
      <Text style={styles.balanceText}>Bienvenido a la Aplicacion </Text>
      <Text style={styles.balanceText}>De MiBanco erapalo</Text>

      <Text style={styles.title}>Historial Completo de Transacciones</Text>
      <FlatList
        data={transacciones}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.transactionItem}>{item.detalle}</Text>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  balanceText: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  container: { flex: 1, padding: 20 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  transactionItem: { fontSize: 16, marginVertical: 5 },
});
