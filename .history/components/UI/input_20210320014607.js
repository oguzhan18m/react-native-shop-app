import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Button, Alert } from 'react-native';

const input = (props) => {
    return (
        <View style={styles.formControl}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput 
        {...props}
        style={styles.input} value={formState.inputValues.title} onChangeText={textChangeHandler.bind(this,'title')} 
         />
        {!formState.inputValidities.title && <Text>{props.errorText}</Text>}
    </View>
    )
};

const styles = StyleSheet.create({
    formControl:{
        width:'100%'
    },
    label:{
        fontFamily:'Inter_900Black',
        marginVertical:8,
    },
    input:{
        paddingHorizontal:2,
        paddingVertical:5,
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
    },
});

export default input;
