import React, {useEffect} from 'react';
import {View,ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

const StartUpScreen = (props) => {


    useEffect(() => {
        
        const tryLogin = async () =>{
             const userData = await AsyncStorage.getItem('userData');
             if(!userData){
                 props.navigation.navigate('Auth');
                 return;
             }
             const transformedData = JSON.parse(userData);

        };

        
        tryLogin();
    }, [])

    return (
        <View style={styles.screen}>
            <ActivityIndicator size='large' color='black' />
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})

export default StartUpScreen;
