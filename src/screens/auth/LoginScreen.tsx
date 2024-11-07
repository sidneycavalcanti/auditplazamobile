// LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import { Button } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import loginStyles from './loginStyle.js';
import useAuth from '../../hooks/useAuth.js';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const { login, loading, error } = useAuth();

  const handleLogin = async () => {
    navigation.navigate('Home');
    if (!name || !password) {
      Alert.alert("Por favor, preencha todos os campos");
      return;
    }

    const result = await login(name, password);

    if (result.success) {
      Alert.alert('Login efetuado com sucesso!');
      //navigation.navigate('Home');
    } else {
      Alert.alert(result.error || 'Erro ao efetuar login');
    }
  };

  return (
    <View style={loginStyles.container}>
      <Image source={require('../../assets/images/logo.png')} style={loginStyles.logo} />
      <Text style={loginStyles.title}>Auditoria Plaza</Text>
      <Text style={loginStyles.subtitle}>Faça login para continuar</Text>

      <TextInput
        style={loginStyles.input}
        placeholder="Nome"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
        textContentType="username"
        selectTextOnFocus
      />

      <TextInput
        style={loginStyles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#66CDAA" style={loginStyles.loadingIndicator} />
      ) : (
        <Button
          title="Entrar"
          onPress={handleLogin}
          style={loginStyles.button}
        />
      )}

      {error && <Text style={loginStyles.errorText}>{error}</Text>}

      <TouchableOpacity style={loginStyles.registerButton} onPress={() => Alert.alert('Função de Registro')}>
        <Text style={loginStyles.registerText}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
