import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RegistroAuditoria = ({ route }) => {
  const { auditoriaId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro da Auditoria</Text>
      <Text style={styles.subtitle}>Auditoria ID: {auditoriaId}</Text>
      {/* Aqui você pode adicionar os campos para registrar os detalhes da auditoria */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
});

export default RegistroAuditoria;
