import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, TextInput, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RegistrationScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/Image/fondo.png')} // Ruta de la imagen de fondo local
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons name="car" size={80} color="red" />
          <Text style={styles.title}>Registro</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <Ionicons
              name="person-outline"
              size={24}
              color="rgb(244, 52, 52)"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              autoCapitalize="words"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={24}
              color="rgb(244, 52, 52)"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="rgb(244, 52, 52)"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry
            />
          </View>
        </View>
        <TouchableOpacity style={styles.registerButton} onPress={() => {}}>
          <Ionicons name="person-add" size={24} color="#fff" style={styles.registerIcon} />
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  contentContainer: {
    backgroundColor: 'hsla(59, 6%, 96%, 0.32)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxWidth: 400,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderColor: 'hsla(59, 100%, 0%, 0.51)',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
  },
  registerButton: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    backgroundColor: '#ff5e3a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerIcon: {
    marginRight: 10,
  },
});

export default RegistrationScreen;
