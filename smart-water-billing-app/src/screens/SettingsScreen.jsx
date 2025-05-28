import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [leakAlerts, setLeakAlerts] = useState(true);
  const [billReminders, setBillReminders] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const settingsOptions = [
    {
      title: 'Push Notifications',
      value: notifications,
      onValueChange: setNotifications,
    },
    {
      title: 'Leak Alerts',
      value: leakAlerts,
      onValueChange: setLeakAlerts,
    },
    {
      title: 'Bill Reminders',
      value: billReminders,
      onValueChange: setBillReminders,
    },
    {
      title: 'Dark Mode',
      value: darkMode,
      onValueChange: setDarkMode,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.settingsList}>
        {settingsOptions.map((option, index) => (
          <View key={index} style={styles.settingItem}>
            <Text style={styles.settingLabel}>{option.title}</Text>
            <Switch
              value={option.value}
              onValueChange={option.onValueChange}
            />
          </View>
        ))}
      </View>

      <View style={styles.accountSection}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={[styles.buttonText, styles.logoutText]}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Terms of Service</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 24,
  },
  settingsList: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  settingLabel: {
    fontSize: 16,
    color: '#0f172a',
  },
  accountSection: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 16,
  },
  button: {
    paddingVertical: 12,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#0ea5e9',
  },
  logoutButton: {
    marginTop: 8,
  },
  logoutText: {
    color: '#ef4444',
  },
  aboutSection: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  version: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
  },
  link: {
    fontSize: 16,
    color: '#0ea5e9',
    marginBottom: 12,
  },
});
