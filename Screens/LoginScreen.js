import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica de autenticación (a completar por el usuario)
    navigation.navigate("Menu"); // Redirige a la pantalla de Menu en este ejemplo
  };

  const handleRegistration = () => {
    navigation.navigate("Registration"); // Redirige a la pantalla de Registro
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{ uri: "https://picsum.photos/800/1200" }} // Imagen de fondo de Lorem Picsum
        borderRadius={5}
      >
        <View style={styles.logoContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="car" size={80} color="black" />
          </View>
          <Text style={styles.title}>Bienvenido a Icar Plus</Text>
        </View>
        <View style={styles.inputContainer}>
          <AntDesign
            name="user"
            size={24}
            color='red'
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign
            name="lock"
            size={24}
            color="red"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Iniciar Sesión"
            onPress={handleLogin}
            color="#2d7a00"
          />
          <View style={styles.buttonSeparator} />
          <Button
            title="Registrarse"
            onPress={handleRegistration}
            color="#0cb3c6"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100, // Ajusta el tamaño del logo según tus preferencias
    height: 100, // Ajusta el tamaño del logo según tus preferencias
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    width: "80%", // Ajusta el ancho del contenedor de los campos de entrada
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 35,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSeparator: {
    width: 20,
  },
});

export default LoginScreen;
