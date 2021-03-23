import React, {useEffect} from 'react';
import {View,ActivityIndicator, StyleSheet,AsyncStorage} from 'react-native';

import {useDispatch} from 'react-redux';
import * as authActions from '../store/actions/auth';

const StartUpScreen = (props) => {
    const dispatch = useDispatch();


    useEffect(() => {
        
        const tryLogin = async () =>{
             const userData = await AsyncStorage.getItem('userData');
             if(!userData){
                 props.navigation.navigate('Auth');
                 return;
             }
             const transformedData = JSON.parse(userData);
             const {token,userId,expiryDate} = transformedData;
             const expirationDate = new Date(expiryDate);

             if(expirationDate <= new Date() || !token || !userId){
                 props.navigation.navigate('Auth');
                 return;
             }

             props.navigation.navigate('Shop');
             dispatch(authActions.authenticate(userId,token));

        };
        
        tryLogin();

    }, [dispatch])

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
