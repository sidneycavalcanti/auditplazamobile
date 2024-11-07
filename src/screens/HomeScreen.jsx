import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Button, Surface, IconButton } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import useAuditorias from '../hooks/useAuditorias.js';
import { isSameDate } from '../utils/dateUtils.js';
import globalStyles from '../styles/globalStyles.js';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const auditorias = useAuditorias();

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleSearchDate = (text) => {
    setSearchDate(text);
  };

  // Filter and sort auditorias
  const filteredAuditorias = auditorias
    .filter((auditoria) => {
      const searchLower = searchText.toLowerCase();
      const dataCadastro = new Date(auditoria.data).toLocaleDateString();
      
      const matchesName = auditoria.loja.name.toLowerCase().includes(searchLower);
      const matchesDate = searchDate ? dataCadastro === searchDate : true;
      
      return matchesName && matchesDate;
    })
    .sort((a, b) => {
      const isDisponivelA = isSameDate(new Date(), new Date(a.data));
      const isDisponivelB = isSameDate(new Date(), new Date(b.data));
      
      // Order "disponível" items at the top
      if (isDisponivelA && !isDisponivelB) return -1;
      if (!isDisponivelA && isDisponivelB) return 1;
      return 0;
    });

  const handleIniciarAuditoria = (id) => {
    navigation.navigate('Auditoria', { auditoriaId: id });
  };

  const renderAuditoria = ({ item }) => {
    const dataAtual = new Date();
    const dataCadastro = new Date(item.data);

    // Check if the audit is available today
    const isDisponivel = isSameDate(dataAtual, dataCadastro);

    return (
      <Surface style={globalStyles.auditoriaItem} elevation={2}>
        <Text style={globalStyles.auditoriaText}>
          <Text style={globalStyles.label}>Loja:</Text> {item.loja.name}
        </Text>
        <Text style={globalStyles.auditoriaText}>
          <Text style={globalStyles.label}>Data:</Text> {new Date(item.data).toLocaleDateString()}
        </Text>
        <Text style={globalStyles.auditoriaText}>
          <Text style={globalStyles.label}>Status:</Text> {isDisponivel ? 'Disponível' : 'Indisponível'}
        </Text>
        <TouchableOpacity
          style={[globalStyles.iniciarButton, isDisponivel ? { backgroundColor: '#66CDAA' } : { backgroundColor: '#d3d3d3' }]}
          onPress={() => handleIniciarAuditoria(item.id)}
          disabled={!isDisponivel}
        >
          <Text style={globalStyles.iniciarButtonText}>Iniciar Auditoria</Text>
        </TouchableOpacity>
      </Surface>
    );
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>Auditorias</Text>
        <IconButton
          icon="account-circle"
          color="#66CDAA"
          onPress={() => navigation.navigate('Perfil')}
        />
      </View>

      <View style={globalStyles.searchContainer}>
        <TextInput
          style={globalStyles.searchInput}
          placeholder="Pesquisar por nome da loja..."
          placeholderTextColor="#aaa"
          value={searchText}
          onChangeText={handleSearch}
        />
        <TextInput
          style={globalStyles.searchInput}
          placeholder="Pesquisar por data (DD/MM/AAAA)"
          placeholderTextColor="#aaa"
          value={searchDate}
          onChangeText={handleSearchDate}
        />
        <Button
          title="Buscar"
          onPress={() => handleSearch(searchText)}
          style={globalStyles.searchButton}
          color="#66CDAA"
        />
      </View>

      <FlatList
        data={filteredAuditorias}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAuditoria}
        contentContainerStyle={globalStyles.listContainer}
      />
    </View>
  );
};

export default HomeScreen;
