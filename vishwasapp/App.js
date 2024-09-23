
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Login from './src/pages/Login';
import FarmerProfile from './src/pages/FarmerProfile';
import ContractorProfile from './src/pages/ContractorProfile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
       <Header/>
        <View style={styles.content}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name="FarmerProfile" component={FarmerProfile} options={{ headerShown: false }} />
            <Stack.Screen name="ContractorProfile" component={ContractorProfile} options={{ headerShown: false }} />
          </Stack.Navigator>
        </View>
        <Footer />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default App;
