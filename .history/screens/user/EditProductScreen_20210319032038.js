import React from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';

const EditProductScreen = () => {
    return (
        <ScrollView>
            <View style={styles.form}>

            <View style={styles.formControl}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Image URL</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Price</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Description</Text>
                <TextInput style={styles.input} />
            </View>
            
            </View>
        </ScrollView>
    )
};

EditProductScreen.navigationOptions = navData => {
    return{
        headerTitle : navData.navigation.getParam('productId') ? 'Edit Product' : 'Add Product',
    }
}

const styles = StyleSheet.create({
    form:{
        margin:20
    },
    formControl:{
        width:'100%'
    },
    label:{
        fontFamily:'open-sans-bold',
        marginVertical:8,
    },
    input:{
        paddingHorizontal:2,
        paddingVertical:5,
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
    },
});

export default EditProductScreen;
