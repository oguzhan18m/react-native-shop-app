import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, ScrollView, Button} from 'react-native';
import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';

const AuthScreen = (props) => {
    return (
        <KeyboardAvoidingView style={styles.screen}>
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
                onValueChange={()=>{}}
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
                onValueChange={()=>{}}
                initialValue=''
                />
                <Button title='Login' color='#4CAF50'  onPress={()=>{}} />
                <Button title='Switch to Signup' color='grey' onPress={()=>{}} />
            </ScrollView>
        </Card>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    authContainer:{

    }
});

export default AuthScreen;
