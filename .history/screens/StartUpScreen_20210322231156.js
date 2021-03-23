import React, {useEffect} from 'react';
import {View,ActivityIndicator, AsyncStorageStatic, StyleSheet} from 'react-native';

const StartUpScreen = (props) => {


    useEffect(() => {
        
        const tryLogin = async () =>{
             const userData = await AsyncStorageStatic.getItem('userData');
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
