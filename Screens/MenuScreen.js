import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const MenuScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://i.postimg.cc/sx1DKxKn/fondo.png' }}
      style={styles.container}
    >
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://i.postimg.cc/qB5kRrxp/logo.png' }}
          style={styles.logo}
        />
        <Text style={styles.title}>Mi Cuenta</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#ff6347' }]} onPress={() => navigation.navigate('History')}>
          <Text style={styles.buttonText}>
            <Icon name="history" size={20} color="white" /> Historial
          </Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#4682b4' }]} onPress={() => navigation.navigate('PersonalInfo')}>
          <Text style={styles.buttonText}>
            <Icon name="user" size={20} color="white" /> Información Personal
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: '#333', // Color del borde del logo
  },
  title: {
    fontSize: 25,
    padding: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MenuScreen;
