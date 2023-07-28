import React from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Alert, StatusBar, Dimensions } from 'react-native';
import empleadosJSON from 'empleados/assets/data/empleados.json';
import Icon from 'react-native-vector-icons/FontAwesome';

const datos = empleadosJSON;

const secciones = [{ title: 'Ventas de empleados', data: datos.ventas }];

function mensaje(item) {
  Alert.alert(
    `Cliente: ${item.cliente}`,
    `Fecha: ${item.fecha}\nPrecio: $${item.precio.toFixed(2)}\nVendedor: ${item.vendedor}`
  );
}

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={secciones}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.btnSection}
            onPress={() => mensaje(item)}
            activeOpacity={0.8}
          >
            <View style={styles.infoContainer}>
              <View style={styles.column}>
                <Text style={styles.titleText}>Auto</Text>
                <View style={styles.autoInfo}>
                  <Icon name="car" size={16} color="#888" />
                  <Text style={styles.autoText}>{item.auto}</Text>
                </View>
              </View>
              <View style={styles.column}>
                <Text style={styles.titleText}>Vendedor</Text>
                <Text style={styles.vendedorText}>{item.vendedor}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.titleText}>Precio</Text>
                <Text style={styles.precioText}>
                  <Icon name="dollar" size={16} color="#0066cc" /> {item.precio.toFixed(2)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.txtHeader}>
            <Text style={styles.txtSeccion}>{section.title}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" backgroundColor={'#2d7a00'} />
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  btnSection: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Alinear los elementos de manera horizontal
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  infoContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: windowWidth / 3, // Ajustar al ancho necesario de la pantalla
  },
  autoInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888',
    textAlign: 'center',
  },
  autoText: {
    fontSize: 18,
    marginLeft: 8,
    textAlign: 'center',
  },
  precioText: {
    fontSize: 16,
    color: '#0066cc',
    textAlign: 'center',
  },
  vendedorText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  txtHeader: {
    backgroundColor: '#0066cc',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  txtSeccion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default HistoryScreen;
