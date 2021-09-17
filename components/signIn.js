import React, { Component }  from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Animated,
    Easing,
    ScrollView,
    RefreshControl,
    AsyncStorage
} from 'react-native';

//import LogoComponent from './LogoComponent';
import { NativeRouter, Route, Link, Redirect  } from "react-router-native";

export default class signIn extends React.Component {

    state = {
        text: '',
        auth: false,
    };


    handleAuth (){
        AsyncStorage.setItem('authentication_data', 'MjpYdWJvNWlOR3VFZVJpdzRQU2VkZmtkcEgyWnlaWXM=');
        AsyncStorage.getItem('authentication_data').then((res) => {
            if(res !== null){
                this.setState(() => ({
                    auth: true,
                }))
            }
        });
    }

    render() {

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignContent: 'center'
            }}>
 

                {this.state.auth ? <Redirect to="/" /> : <View/>}

                <View style={styles.dataBlock}>
                    <View style={{marginBottom: 10}}>
                        <Text>Email</Text>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Count"
                            value={this.state.text}
                            onChangeText={(text) => this.setState({text})}
                        />
                    </View>
                    <View style={{marginBottom: 20}}>
                        <Text>Pass</Text>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Count"
                            value={this.state.text}
                            onChangeText={(text) => this.setState({text})}
                        />
                    </View>
                    <Button
                        color="#00a65a"
                        title='Login'
                        style={{
                            marginTop: 10,
                        }}
                        onPress={() => {this.handleAuth()}}
                    />
                </View>

            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#333333'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    dataBlock:{
        flex: 0,
        flexDirection: 'column',
        alignContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#eee',
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 2
    },

    inputBlock:{
        flex: 0,
        flexDirection: 'column',
        alignContent: 'center',
        marginTop: 5,
        marginBottom: 10,
    },

    inputStyle:{
        height: 30,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
        width: '100%'
    }
});