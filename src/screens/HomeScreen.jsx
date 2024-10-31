import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Button, Surface, IconButton } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [auditorias, setAuditorias] = useState([]);

  useEffect(() => {
    // Função para buscar as auditorias da API
    const fetchAuditorias = async () => {
      try {
        const response = await axios.get('http://192.168.10.108:5000/auditoria');
        setAuditorias(response.data.auditoria);
      } catch (error) {
        console.error('Erro ao buscar auditorias:', error);
      }
    };

    fetchAuditorias();
  }, []);

  const handleSearch = () => {
    console.log('Buscando auditorias por:', searchText);
  };

  const handleIniciarAuditoria = (id) => {
    navigation.navigate('RegistroAuditoria', { auditoriaId: id });
  };

  const renderAuditoria = ({ item }) => (
    <Surface style={styles.auditoriaItem} elevation={2}>
      <Text style={styles.auditoriaText}><Text style={styles.label}>Loja:</Text> {item.loja.name}</Text>
      <Text style={styles.auditoriaText}><Text style={styles.label}>Data:</Text> {new Date(item.data).toLocaleDateString()}</Text>
      <Text style={styles.auditoriaText}><Text style={styles.label}>Fluxo Especulador:</Text> {item.fluxoespeculador}</Text>
      <Text style={styles.auditoriaText}><Text style={styles.label}>Status:</Text> {item.status || 'Indisponível'}</Text>
      <TouchableOpacity
        style={styles.iniciarButton}
        onPress={() => handleIniciarAuditoria(item.id)}
      >
        <Text style={styles.iniciarButtonText}>Iniciar Auditoria</Text>
      </TouchableOpacity>
    </Surface>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Auditorias</Text>
        <IconButton
          icon="account-circle"
          color="#66CDAA"
          onPress={() => navigation.navigate('Perfil')}
        />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar auditorias..."
          placeholderTextColor="#aaa"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Button
          title="Buscar"
          onPress={handleSearch}
          style={styles.searchButton}
          color="#66CDAA"
        />
      </View>

      <FlatList
        data={auditorias}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAuditoria}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f1f1f1',
    fontSize: 16,
    marginRight: 8,
  },
  searchButton: {
    height: 50,
    justifyContent: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  auditoriaItem: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  auditoriaText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
  },
  iniciarButton: {
    marginTop: 8,
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#66CDAA',
    borderRadius: 4,
  },
  iniciarButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
