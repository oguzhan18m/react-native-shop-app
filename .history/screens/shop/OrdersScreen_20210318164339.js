import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import {useSelector} from 'react-redux';
import OrderItem from '../../components/shop/OrderItem';

const OrdersScreen = (props) => {
    const orders = useSelector(state => state.orders.orders);
    return (
        <FlatList 
        data={orders} 
        keyExtractor={item => item.id}
        renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>} />
    )
};


OrdersScreen.navigationOptions = {
    headerTitle : 'Your Orders'
}

const styles = StyleSheet.create({

});

export default OrdersScreen;
