import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PersonalInfoScreen = ({ navigation }) => {
  
  const employeesData = [
    {
      name: 'Jhon Rambo',
      email: 'john.Rbo@example.com',
      photo: require('../assets/Image/p1.png'),
    },
    {
      name: 'Juana Burbano',
      email: 'juna.B@example.com',
      photo: require('../assets/Image/p2.png'),
    },
    {
      name: 'Leonardo Suarez',
      email: 'Leo.S@example.com',
      photo: require('../assets/Image/p3.png'),
    },
    {
      name: 'Dona Benitez',
      email: 'Dona.B@example.com',
      photo: require('../assets/Image/p4.png'),
    },
  ];

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👩‍💼 Información Personal de Empleados 👨‍💼</Text>
      <ScrollView>
        {employeesData.map((employee, index) => (
          <View key={index} style={styles.employeeContainer}>
            <Image source={employee.photo} style={styles.photo} />
            <Text style={styles.infoItem}>Nombre: {employee.name}</Text>
            <Text style={styles.infoItem}>Correo: {employee.email}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Icon name="sign-out" size={20} color="#fff" />
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#2d7a00',
  },
  employeeContainer: {
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#97b0c48f',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  infoItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#2d7a00',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8, 
  },
  
});

export default PersonalInfoScreen;
