import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Button, Platform } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const CartItem = (props) => {
    return (
        <View style={styles.cartItem}>
            <Text style={styles.itemData}>
                <Text style={styles.quantity}>QTY</Text>
                <Text style={styles.title}>TITLE</Text>
            </Text>
            <View style={styles.itemData}>
                <Text style={styles.amount}>$AMT</Text>
                <TouchableOpacity onPress={props.onRemove} style={styles.deleteBtn}>
                    <Ionicons name={Platform.OS ==='android' ? 'md-trash' : 'ios-trash' } size={23} color='red' />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cartItem:{
        padding:10,
        backgroundColor:'white',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginHorizontal:20,
    },
    deleteBtn:{

    },
    itemData:{
        flexDirection: 'row',
        alignItems:'center',
    },
    quantity:{
        fontFamily:'open-sans',
        color:'#888',
        fontSize:16,
    },
    title:{
        fontFamily:'open-sans',

        fontSize:16,
    },
    amount:{},
    deleteBtn:{
        marginLeft:20,
    },
});

export default CartItem;
