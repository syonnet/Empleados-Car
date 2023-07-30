import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text, ImageBackground, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("Menu"); 
  };

  const handleRegistration = () => {
    navigation.navigate("Registration");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{ uri: "https://i.postimg.cc/sx1DKxKn/fondo.png" }}
        borderRadius={5}
      >
        <View style={styles.logoContainer}>
          <View style={styles.logoWrapper}>
            <Image
              source={{ uri: "https://i.postimg.cc/qB5kRrxp/logo.png" }} 
              style={styles.logo}
            />
          </View>
          <Text style={styles.title}>Bienvenido a Icar Plus</Text>
        </View>
        <View style={styles.inputContainer}>
          <AntDesign
            name="user"
            size={24}
            color="red"
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
  logoWrapper: {
    width: 170,
    height: 170,
    borderRadius: 150, 
    backgroundColor: "white", 
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 150, 
    height: 150, 
    resizeMode: "contain",
    borderRadius: 150, 
    
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
    width: "80%",
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
