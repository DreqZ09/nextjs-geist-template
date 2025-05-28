/**
 * PrivacyPolicyScreen.jsx
 * Privacy Policy screen displaying privacy information
 * 
 * Libraries used:
 * - nativewind for Tailwind-style styling
 * 
 * UI only, mock data, no backend or logic
 */

import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function PrivacyPolicyScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.paragraph}>
        This is the privacy policy for the Smart Water Billing & Management App. We respect your privacy and are committed to protecting your personal information.
      </Text>
      <Text style={styles.paragraph}>
        We collect and use your data only for the purpose of providing and improving our services. Your data will not be shared with third parties without your consent.
      </Text>
      <Text style={styles.paragraph}>
        For more information, please contact our support team.
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
