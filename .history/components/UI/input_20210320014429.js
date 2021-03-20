import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Button, Alert } from 'react-native';

const input = (props) => {
    return (
        <View style={styles.formControl}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} value={formState.inputValues.title} onChangeText={textChangeHandler.bind(this,'title')} 
        keyboardType='default' autoCapitalize='sentences' autoCorrect returnKeyType='next' 
        onEndEditing={()=>{console.log('onEndEditing');}} onSubmitEditing={()=>{console.log('onSubmitEditing');}} />
        {!formState.inputValidities.title && <Text>Please enter a valid title!</Text>}
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
