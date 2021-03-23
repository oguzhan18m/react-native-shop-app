import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, ScrollView, Button} from 'react-native';
import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import { LinearGradient } from 'expo-linear-gradient';

const AuthScreen = (props) => {
    return (
        <View style={styles.screen}>
            <LinearGradient colors={['#ffedff' , '#ffedff' , '#ffe3ff' ]} style={styles.gradient}>
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
                        <View style={styles.buttonContainer}>
                            <Button title='Login' color='#4CAF50'  onPress={()=>{}} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title='Switch to Signup' color='grey' onPress={()=>{}} />
                        </View>
                    </ScrollView>
                </Card>
        </LinearGradient>
        </View>
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
    },
    authContainer:{
        width:'80%',
        maxWidth:400,
        height:'50%',
        maxHeight:400,
        padding:20,
    },
    gradient:{
        flex:1,
        width:'100%',
        height:'100%',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    buttonContainer:{
        marginVertical:10,
    }
});

export default AuthScreen;
