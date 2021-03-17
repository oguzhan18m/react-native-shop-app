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
    itemData:{},
    quantity:{},
    title:{},
    amount:{},
    deleteBtn:{},
});

export default CartItem;
