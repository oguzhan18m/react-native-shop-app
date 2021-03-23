import React, {useState,useEffect} from 'react';
import { FlatList, StyleSheet, ActivityIndicator, View } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import OrderItem from '../../components/shop/OrderItem';
import {HeaderButtons , Item} from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import * as ordersActions from '../../store/actions/orders';


const OrdersScreen = (props) => {
    const[isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);

    useEffect(() => {
      setIsLoading(true);
      dispatch(ordersActions.fetchOrders()).then(()=>{
        setIsLoading(false);
      });
    
    }, [dispatch]);

    if(isLoading){
      <View style={{flex:1 , justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color='black' />
        </View>
    };

    if(orders.length === 0){
      return( 
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text>No order found! Maybe you should start ordering one?</Text>
      </View>)
  }

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
