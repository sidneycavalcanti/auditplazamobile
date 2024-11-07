// components/Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ title, onNavigate }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navButton} onPress={() => onNavigate('Vendas')}>
          <Text style={styles.navText}>Vendas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => onNavigate('Fluxo')}>
          <Text style={styles.navText}>Fluxo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => onNavigate('Perdas')}>
          <Text style={styles.navText}>Perdas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => onNavigate('Anotacoes')}>
          <Text style={styles.navText}>Anotação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => onNavigate('Outros')}>
          <Text style={styles.navText}>Outros</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#66CDAA',
    padding: 15,
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
    width: '100%',
  },
  navButton: {
    padding: 5,
  },
  navText: {
    color: '#ffffff',
    fontSize: 14,
  },
});

export default Header;
