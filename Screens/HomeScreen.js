import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Button, TouchableOpacity, StatusBar } from 'react-native';


function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor="#9e2dd6"
          barStyle="light-content"
        />
        <Text style={styles.title}>Calorie Counts</Text>
        <Text style={styles.logintext}>Login to scan your ingredients</Text>
        <TextInput 
            placeholder="email" 
            style={styles.input}
            onChangeText={(username)=>setUserDetails(username)} 
        />
        <TextInput 
            placeholder="password" 
            style={styles.input} 
            secureTextEntry 
            onChangeText={(password)=>setUserDetails(password)} 
            />
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%'}}>
          <TouchableOpacity style={styles.btn} onPress={() => alert("login pressed")}>
            <Text style={styles.btntext}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn} 
            onPress={() => alert("Signup pressed")}>
            <Text style={styles.btntext}>Signup</Text>
          </TouchableOpacity>
        </View>
        <View style= {{margin: 5}}>
        <Button
          title="Scan barcode"
          onPress={() => navigation.navigate('Scanner')}
        />
        </View>
        <View style= {{margin: 5}}>
        <Button
          title="Ingredient History"
          onPress={() => navigation.navigate('IngredientHistory')}
        />
        </View>
      </View>
    ); 
  }

  export default HomeScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f9b64f',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    title: {
      fontSize: 35,
      justifyContent: 'center',
      margin: 10,
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#fff',
    },
  
    logintext: {
      fontSize: 20,
      justifyContent: 'center',
      margin: 10,
      textAlign: 'center',
      color: '#fff',
    },
  
    input: {
      backgroundColor:'#fff',
      margin: 15,
      width: '90%',
      padding: 10, 
    },
  
    btntxt: {
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  
    btn: {
      backgroundColor: '#986019',
      padding: 12,
      width: '45%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
  
  });