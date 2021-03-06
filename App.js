import React from 'react';
import { Text, View, StyleSheet, Button, AsyncStorage } from 'react-native'
import HomeScreen from './Screens/HomeScreen';
import Scanner from './Screens/barcodeScanner';
import { NativeRouter, Route, Link, Redirect  } from "react-router-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Added from './components/Added';
import IngredientHistory from './Screens/IngredientHistory';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style = "auto" />
        <Stack.Navigator initialRouteName = "HomeScreen">
          <Stack.Screen name="Added Ingredients" component={IngredientHistory}/>
          <Stack.Screen name="Scanner"  component={Scanner}/>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f4f4f4'
	}
});

export default App;
