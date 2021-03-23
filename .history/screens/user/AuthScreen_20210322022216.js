import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, ScrollView, Button} from 'react-native';
import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import { LinearGradient } from 'expo-linear-gradient';

const AuthScreen = (props) => {
    return (
        <KeyboardAvoidingView style={styles.screen}>
            <LinearGradient>
        <Card style={styles.authContainer}>
            <ScrollView>
                <Input 
                id='email' 
                label='E-mail' 
                keyboardType='email-address' 
                required 
                email 
                autoCapitalize='none' 
                errorMessage='Please enter a valid e-mail address'
                onInputChange={()=>{}}
                initialValue=''
                />
                <Input 
                id='password' 
                label='Password' 
                keyboardType='default' 
                secureTextEntry
                required 
                minLength={5}
                autoCapitalize='none' 
                errorMessage='Please enter a valid password'
                onInputChange={()=>{}}
                initialValue=''
                />
                <Button title='Login' color='#4CAF50'  onPress={()=>{}} />
                <Button title='Switch to Signup' color='grey' onPress={()=>{}} />
            </ScrollView>
        </Card>
        </LinearGradient>
        </KeyboardAvoidingView>
    )
};

AuthScreen.navigationOptions = navData => {
    return{
        headerTitle: 'Authenticate',
    }
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    authContainer:{
        width:'80%',
        maxWidth:400,
        height:'50%',
        maxHeight:400,
        padding:10,
    }
});

export default AuthScreen;
