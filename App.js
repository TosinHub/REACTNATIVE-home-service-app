import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};


export default function App() {
  return (
   <ClerkProvider tokenCache={tokenCache} publishableKey='pk_test_Y29udGVudC1hc3AtMzguY2xlcmsuYWNjb3VudHMuZGV2JA'>
        <SignedIn>
        
        </SignedIn> 
         <SignedOut>
    
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
        <StatusBar style="auto" />
        </SignedOut> 
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
