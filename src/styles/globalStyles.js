import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
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
    backgroundColor: '#6200ea',
    borderRadius: 4,
  },
  iniciarButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  buscarButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});


export default globalStyles;
