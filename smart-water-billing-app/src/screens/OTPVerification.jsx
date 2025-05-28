import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';

export default function OTPVerification({ navigation }) {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);
  const [resendDisabled, setResendDisabled] = useState(true);

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setResendDisabled(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    setTimer(30);
    setResendDisabled(true);
    setOtp('');
    // Simulate resend OTP action
  };

  const handleVerify = () => {
    if (otp.length < 4) {
      alert('Please enter a 4-digit OTP.');
      return;
    }
    // Navigate to Dashboard
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput
        style={styles.otpInput}
        keyboardType="number-pad"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
        placeholder="Enter OTP"
      />
      <Text style={styles.timerText}>
        {resendDisabled ? `Resend OTP in 00:${timer < 10 ? `0${timer}` : timer}` : ''}
      </Text>
      <TouchableOpacity
        onPress={handleResend}
        disabled={resendDisabled}
        style={[styles.resendButton, resendDisabled && styles.resendButtonDisabled]}
      >
        <Text style={styles.resendButtonText}>Resend OTP</Text>
      </TouchableOpacity>
      <View style={styles.verifyButton}>
        <Button title="Verify" onPress={handleVerify} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
    color: '#0f172a',
  },
  otpInput: {
    height: 48,
    borderColor: '#cbd5e1',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 20,
    letterSpacing: 12,
    textAlign: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 16,
  },
  timerText: {
    textAlign: 'center',
    color: '#64748b',
    marginBottom: 16,
  },
  resendButton: {
    backgroundColor: '#0ea5e9',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 32,
  },
  resendButtonDisabled: {
    backgroundColor: '#94a3b8',
  },
  resendButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  verifyButton: {
    marginTop: 8,
  },
});
