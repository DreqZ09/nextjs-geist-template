/**
 * MeterDetailScreen.jsx
 * Meter Detail screen showing detailed reading history and export buttons
 * 
 * Libraries used:
 * - nativewind for Tailwind-style styling
 * - react-native-vector-icons for icons
 * 
 * UI only, mock data, no backend or logic
 */

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const readingHistory = [
  { id: '1', date: '2024-01-01', usage: 20.5, cost: 150.75 },
  { id: '2', date: '2024-02-01', usage: 18.0, cost: 130.00 },
  { id: '3', date: '2024-03-01', usage: 22.3, cost: 160.50 },
  { id: '4', date: '2024-04-01', usage: 19.8, cost: 140.25 },
];

export default function MeterDetailScreen({ navigation, route }) {
  const { meterId } = route.params;

  const handleExportCSV = () => {
    Alert.alert('Export', 'Export to CSV feature is not implemented in UI mock.');
  };

  const handleExportPDF = () => {
    Alert.alert('Export', 'Export to PDF feature is not implemented in UI mock.');
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.usage}>{item.usage} m³</Text>
      <Text style={styles.cost}>KES {item.cost.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meter Detail - {meterId}</Text>
      <FlatList
        data={readingHistory}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <View style={styles.headerRow}>
            <Text style={[styles.headerText, { flex: 2 }]}>Date</Text>
            <Text style={[styles.headerText, { flex: 1 }]}>Usage</Text>
            <Text style={[styles.headerText, { flex: 1 }]}>Cost</Text>
          </View>
        )}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.exportButton} onPress={handleExportCSV}>
          <Icon name="document-text-outline" size={20} color="white" />
          <Text style={styles.exportButtonText}>Export CSV</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.exportButton} onPress={handleExportPDF}>
          <Icon name="document-outline" size={20} color="white" />
          <Text style={styles.exportButtonText}>Export PDF</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e1',
    paddingBottom: 8,
    marginBottom: 8,
  },
  headerText: {
    fontWeight: '600',
    color: '#64748b',
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  date: {
    flex: 2,
    color: '#0f172a',
  },
  usage: {
    flex: 1,
    color: '#0f172a',
  },
  cost: {
    flex: 1,
    color: '#0f172a',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
  },
  exportButton: {
    flexDirection: 'row',
    backgroundColor: '#0ea5e9',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  exportButtonText: {
    color: 'white',
    fontWeight: '700',
    marginLeft: 8,
  },
});
