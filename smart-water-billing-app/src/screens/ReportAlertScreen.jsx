/**
 * ReportAlertScreen.jsx
 * Reporting / Fault Submission screen with form and list of submitted reports
 * 
 * Libraries used:
 * - nativewind for Tailwind-style styling
 * - react-native-vector-icons for icons
 * 
 * UI only, mock data, no backend or logic
 */

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';

const alertTypes = [
  'Faulty Meter',
  'Power Outage',
  'Water Leak',
  'New Billing',
  'Payment Received',
  'Password Changed',
];

const mockReports = [
  { id: '1', type: 'Water Leak', description: 'Leak near kitchen', status: 'Resolved <1 hr' },
  { id: '2', type: 'Faulty Meter', description: 'Meter not reading', status: 'Pending' },
];

export default function ReportAlertScreen() {
  const [selectedType, setSelectedType] = useState(alertTypes[0]);
  const [description, setDescription] = useState('');
  const [reports, setReports] = useState(mockReports);

  const handleSubmit = () => {
    if (!description.trim()) {
      Alert.alert('Error', 'Please enter a description.');
      return;
    }
    const newReport = {
      id: (reports.length + 1).toString(),
      type: selectedType,
      description,
      status: 'Pending',
    };
    setReports([newReport, ...reports]);
    setDescription('');
    Alert.alert('Success', 'Report submitted.');
  };

  const renderReport = ({ item }) => (
    <View style={styles.reportItem}>
      <Text style={styles.reportType}>{item.type}</Text>
      <Text style={styles.reportDescription}>{item.description}</Text>
      <Text style={styles.reportStatus}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Alert</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Select Alert Type</Text>
        <View style={styles.pickerContainer}>
          {alertTypes.map(type => (
            <TouchableOpacity
              key={type}
              style={[styles.pickerItem, selectedType === type && styles.pickerItemSelected]}
              onPress={() => setSelectedType(type)}
            >
              <Text style={selectedType === type ? styles.pickerTextSelected : styles.pickerText}>{type}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.textInput}
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
          placeholder="Describe the issue"
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Submitted Reports</Text>
      <FlatList
        data={reports}
        keyExtractor={item => item.id}
        renderItem={renderReport}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
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
  form: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 8,
  },
  pickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  pickerItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    marginRight: 8,
    marginBottom: 8,
  },
  pickerItemSelected: {
    backgroundColor: '#0ea5e9',
    borderColor: '#0ea5e9',
  },
  pickerText: {
    color: '#64748b',
  },
  pickerTextSelected: {
    color: 'white',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 12,
    textAlignVertical: 'top',
    marginBottom: 16,
    backgroundColor: 'white',
    color: '#0f172a',
  },
  submitButton: {
    backgroundColor: '#0ea5e9',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  reportItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  reportType: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  reportDescription: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  reportStatus: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: '600',
  },
});
