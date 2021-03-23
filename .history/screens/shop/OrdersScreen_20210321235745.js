import React, {useEffect} from 'react';
import { FlatList, StyleSheet } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import OrderItem from '../../components/shop/OrderItem';
import {HeaderButtons , Item} from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import * as ordersActions from '../../store/actions/orders';

const OrdersScreen = (props) => {

    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);


    return (
        <FlatList 
        data={orders} 
        keyExtractor={item => item.id}
        renderItem={itemData => <OrderItem 
            amount={itemData.item.totalAmount} 
            date={itemData.item.readableDate} 
            items ={itemData.item.items}
        /> } />
    )
};

useEffect(() => {
  dispatch(ordersActions.fetchOrders());

}, [dispatch])

OrdersScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Your Orders',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      )
    };
  };

const styles = StyleSheet.create({

});

export default OrdersScreen;
