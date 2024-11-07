// screens/AuditoriaScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import TabNavigator from '../components/TabNavigator';

const AuditoriaScreen = () => {
  const [activeTab, setActiveTab] = useState('Vendas');

  const renderForm = () => {
    switch (activeTab) {
      case 'Vendas':
        return (
          <View style={styles.form}>
            <Text style={styles.label}>Valor da Venda:</Text>
            <TextInput style={styles.input} placeholder="Digite o valor" keyboardType="numeric" />
            <Button title="Gravar Venda" onPress={() => console.log('Venda Gravada')} />
          </View>
        );
      case 'Fluxo':
        return (
          <View style={styles.form}>
            <Text style={styles.label}>Número de Clientes:</Text>
            <TextInput style={styles.input} placeholder="Digite o número de clientes" keyboardType="numeric" />
            <Button title="Gravar Fluxo" onPress={() => console.log('Fluxo Gravado')} />
          </View>
        );
      case 'Perdas':
        return (
          <View style={styles.form}>
            <Text style={styles.label}>Valor da Perda:</Text>
            <TextInput style={styles.input} placeholder="Digite o valor" keyboardType="numeric" />
            <Button title="Gravar Perda" onPress={() => console.log('Perda Gravada')} />
          </View>
        );
      case 'Anotacao':
        return (
          <View style={styles.form}>
            <Text style={styles.label}>Observação:</Text>
            <TextInput style={[styles.input, styles.textArea]} placeholder="Digite uma anotação" multiline />
            <Button title="Gravar Anotação" onPress={() => console.log('Anotação Gravada')} />
          </View>
        );
      case 'Outros':
        return (
          <View style={styles.form}>
            <Button title="Pausa" onPress={() => console.log('Pausa')} />
            <Button title="Calculadora" onPress={() => console.log('Calculadora')} />
            <Button title="Trocar Auditor" onPress={() => console.log('Trocar Auditor')} />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LA CAMICERIA - Auditoria L2</Text>
      <TabNavigator tabs={['Vendas', 'Fluxo', 'Perdas', 'Anotacao', 'Outros']} activeTab={activeTab} setActiveTab={setActiveTab} />
      <View style={styles.formContainer}>{renderForm()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  formContainer: {
    flex: 1,
    padding: 20,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default AuditoriaScreen;
