import React from 'react'
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import {useSelector} from 'redux';

const CartScreen = () => {

    const totalAmount = useSelector(state=>state.cart.totalAmount);

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total : <Text style={styles.amount}>${totalAmount}</Text></Text>
                <Button title='Order Now'  />
            </View>

            <FlatList  />
        </View>
    )
};

const styles = StyleSheet.create({

});

export default CartScreen;
