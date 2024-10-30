// LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Button } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';

const ProfilesScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Por favor, preencha todos os campos");
      return;
    }
    // Lógica de autenticação simulada
    Alert.alert('Login efetuado com sucesso!');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
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

export default ProfilesScreen;
