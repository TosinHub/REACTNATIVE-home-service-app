import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignIn, SignedOut } from '@clerk/clerk-expo';


export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_Y29udGVudC1hc3AtMzguY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <View style={styles.container}>
        
        <SignedOut>
          <Login />
        </SignedOut>

        <StatusBar style="auto" />
      </View>
    </ClerkProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40

  },
});
