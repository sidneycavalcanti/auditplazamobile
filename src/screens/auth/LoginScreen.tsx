// LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { Button } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!name || !password) {
      Alert.alert("Por favor, preencha todos os campos");
      return;
    }
    // Lógica de autenticação simulada
    Alert.alert('Login efetuado com sucesso!');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Auditoria Plaza</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>

      <TextInput 
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title="Entrar"
        onPress={handleLogin}
        style={styles.button}
      />

      <TouchableOpacity style={styles.registerButton} onPress={() => Alert.alert('Função de Registro')}>
        <Text style={styles.registerText}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 120, // ajuste a largura conforme necessário
    height: 110, // ajuste a altura conforme necessário
    marginBottom: 20, // espaço entre a logo e o título
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f1f1f1',
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 16,
    backgroundColor: '#66CDAA',
  },
  registerButton: {
    marginTop: 16,
  },
  registerText: {
    color: '#333',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
