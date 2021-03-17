import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Button, Platform } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const CartItem = (props) => {
    return (
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.quantity}>Quantity : {props.quantity} </Text>
            </View>

            <View style={styles.itemDataBottom}>
                <Text style={styles.amount}>$ {props.amount}</Text>
                <TouchableOpacity onPress={props.onRemove} style={styles.deleteBtn}>
                    <Ionicons name={Platform.OS ==='android' ? 'md-trash' : 'ios-trash' } size={27} color='red' />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cartItem:{
        width:'100%',
        padding:10,
        backgroundColor:'white',
        justifyContent:'space-between',
        marginHorizontal:5,
        borderRadius:10,
    },
    deleteBtn:{
    },
    itemData:{
        alignItems:'flex-start',
    },
    itemDataBottom:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:10,
    },
    quantity:{
        fontFamily:'open-sans',
        color:'#888',
        fontSize:16,
        marginVertical:5
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:16,
        marginVertical:5
    },
    amount:{
        fontFamily:'open-sans-bold',
        fontSize:16,
        color:'#4CAF50'
    },
    deleteBtn:{
        marginLeft:20,
    },
});

export default CartItem;
