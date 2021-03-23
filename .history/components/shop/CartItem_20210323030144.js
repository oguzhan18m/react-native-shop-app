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
                <Text style={styles.amount}>$ {props.amount.toFixed(2)}</Text>
                {props.deletable && (
                <TouchableOpacity onPress={props.onRemove} style={styles.deleteBtn}>
                    <View style={{flexDirection:'row', alignItems: 'center', borderWidth:1, borderRadius:10, borderColor:'red'}}>
                    <Ionicons name={Platform.OS ==='android' ? 'md-trash' : 'ios-trash' } size={27} color='red' />
                    <Text style={{color:'red', fontSize:16 , fontWeight:'bold'}}>DELETE</Text>
                    </View>
                </TouchableOpacity>
                )}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cartItem:{
        width:'100%',
        padding:15,
        backgroundColor:'white',
        justifyContent:'space-between',
        marginVertical:10,
        borderRadius:20,
        borderColor:'#cecece',
        borderWidth:1,
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
        fontFamily:'Inter_900Black',
        color:'#888',
        fontSize:16,
        marginVertical:5
    },
    title:{
        fontFamily:'Inter_900Black',
        fontSize:16,
        marginVertical:5
    },
    amount:{
        fontFamily:'Inter_900Black',
        fontSize:20,
        color:'#4CAF50'
    },
    deleteBtn:{
        marginLeft:20,
    },
});

export default CartItem;
