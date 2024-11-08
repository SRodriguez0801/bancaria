import { View, Text, Button,StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../Contex/AppContext';
import { FlatList } from 'react-native-gesture-handler';

export default function Inicio() {
  const{ saldo, agregarSaldo, transacciones } = useContext(AppContext)!;

  return (
    <View style={styles.container}>
            <Text style={styles.balanceText}>Bienvenido a la Aplicacion </Text>
            <Text style={styles.balanceText}>De MiBanco erapalo</Text>

      <Text style={styles.balanceText}>Saldo Actual: $.{saldo}</Text>
      <Button title='Depositar $.500' onPress={() =>agregarSaldo(500)}></Button>
   <Text style={styles.balanceText} > Historial de Transacciones</Text>
   <FlatList data={transacciones} keyExtractor={(item) => item.id} renderItem={({item}) => (<Text style={styles.balanceText} >{item.detalle}</Text>)}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding:20},
  balanceText :{ fontSize: 24, fontWeight:'bold', marginBottom:10},
  title: { fontSize: 18, fontWeight: 'bold', marginTop:20},
  transactionItem: {fontSize:16, marginTop:5},
});