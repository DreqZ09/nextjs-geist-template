/**
 * TermsOfServiceScreen.jsx
 * Terms of Service screen displaying terms and conditions
 * 
 * Libraries used:
 * - nativewind for Tailwind-style styling
 * 
 * UI only, mock data, no backend or logic
 */

import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function TermsOfServiceScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Terms of Service</Text>
      <Text style={styles.paragraph}>
        Welcome to the Smart Water Billing & Management App. By using our services, you agree to the following terms and conditions.
      </Text>
      <Text style={styles.paragraph}>
        We reserve the right to update these terms at any time. Continued use of the app constitutes acceptance of the updated terms.
      </Text>
      <Text style={styles.paragraph}>
        Please use the app responsibly and report any issues to our support team.
      </Text>
    </ScrollView>
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
  paragraph: {
    fontSize: 16,
    color: '#334155',
    marginBottom: 12,
    lineHeight: 22,
  },
});
