import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import {useSelector} from 'react-redux';

const OrdersScreen = () => {
    const orders = useSelector(state => state.orders.orders);
    return (
        <FlatList 
        data={orders} 
        keyExtractor={item => item.id}
        renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>} />
    )
};

const styles = StyleSheet.create({

});

export default OrdersScreen;
