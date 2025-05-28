/**
 * OTPVerification.jsx
 * Authentication Flow - OTP Verification Screen
 * 
 * Libraries used:
 * - nativewind for Tailwind-style styling
 * - react-native-vector-icons for icons
 * 
 * UI only, mock data, no backend or logic
 */

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function OTPVerification({ navigation }) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer(t => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (text, index) => {
    if (text.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    // Auto focus next input could be implemented here
  };

  const handleResend = () => {
    setTimer(60);
    // Resend OTP logic placeholder
  };

  const handleVerify = () => {
    // Verify OTP logic placeholder
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>We sent a 4-digit code to your phone</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={text => handleChange(text, index)}
          />
        ))}
      </View>
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>Resend OTP in {timer}s</Text>
        <TouchableOpacity onPress={handleResend} disabled={timer > 0}>
          <Text style={[styles.resendText, timer > 0 && styles.resendDisabled]}>
            Resend OTP
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
        <Icon name="checkmark-circle" size={24} color="white" style={{ marginLeft: 8 }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 24,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginBottom: 24,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    color: '#0f172a',
    backgroundColor: 'white',
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  timerText: {
    fontSize: 14,
    color: '#64748b',
    marginRight: 16,
  },
  resendText: {
    fontSize: 14,
    color: '#0ea5e9',
  },
  resendDisabled: {
    color: '#94a3b8',
  },
  verifyButton: {
    flexDirection: 'row',
    backgroundColor: '#0ea5e9',
    paddingVertical: 14,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});
