import React from 'react';
import { Text, View, StyleSheet, Button, AsyncStorage } from 'react-native'
import HomeScreen from './components/HomeScreen';
import signIn from './components/signIn';
import Scanner from './components/barcodeScanner';
import { NativeRouter, Route, Link, Redirect  } from "react-router-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { BarCodeScanner } from 'expo-barcode-scanner';




const AppNavigator = createStackNavigator(  
  {  
      Home: HomeScreen,  
      Scan: BarCodeScanner  
  },  
  {  
      initialRouteName: "Home"  
  }  
);  

const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
  render() {  
      return <AppContainer />;  
  }  
}  
