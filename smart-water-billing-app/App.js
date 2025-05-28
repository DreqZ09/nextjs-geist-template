import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import Sidebar from './src/components/Sidebar';

// Import screens
import LoginScreen from './src/screens/LoginScreen';
import OTPVerification from './src/screens/OTPVerification';
import DashboardScreen from './src/screens/DashboardScreen';
import BillingScreen from './src/screens/BillingScreen';
import PaymentSuccess from './src/screens/PaymentSuccessScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Sidebar />
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#ffffff',
                elevation: 0,
                shadowOpacity: 0,
              },
              headerTintColor: '#000000',
              headerTitleStyle: {
                fontWeight: '600',
              },
            }}
            style={styles.stack}
          >
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPVerification"
              component={OTPVerification}
              options={{ title: 'Verify OTP' }}
            />
            <Stack.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{ title: 'Home' }}
            />
            <Stack.Screen
              name="Billing"
              component={BillingScreen}
              options={{ title: 'Billing Details' }}
            />
            <Stack.Screen
              name="PaymentSuccess"
              component={PaymentSuccess}
              options={{ title: 'Payment Confirmation' }}
            />
            <Stack.Screen
              name="Notifications"
              component={NotificationsScreen}
              options={{ title: 'Notifications' }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{ title: 'Settings' }}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  stack: {
    flex: 1,
  },
});
