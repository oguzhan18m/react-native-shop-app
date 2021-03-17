import React from 'react'
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import Colors  from '../../constants/Colors';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from '../../components/shop/CartItem';
import { removeFromCart } from '../../store/actions/cart';
import * as ordersActions from '../../store/actions/orders';

const CartScreen = () => {
    const dispatch = useDispatch();

    const totalAmount = useSelector(state=>state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedCardItems = [];
        for(const key in state.cart.items){
            transformedCardItems.push({
                productId : key,
                productTitle : state.cart.items[key].productTitle,
                productPrice : state.cart.items[key].productPrice,
                quantity : state.cart.items[key].quantity,
                sum : state.cart.items[key].sum,
            })
        };
        return transformedCardItems.sort((a,b)=> a.productId > b.productId ? 1 : -1 );
    });

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total : <Text style={styles.amount}>${totalAmount}</Text></Text>
                <Button onPress={()=>{
                    dispatch(ordersActions.addOrder(cartItems,totalAmount))
                }} color={Colors.accent} title='Order Now' disabled={cartItems.length === 0} />
            </View>

            <FlatList 
            data={cartItems} 
            keyExtractor={item => item.productId} 
            renderItem={itemData => <CartItem title={itemData.item.productTitle} 
            quantity={itemData.item.quantity} amount={itemData.item.sum} onRemove={()=>{dispatch(removeFromCart(itemData.item.productId))}} />} />
        </View>
    )
};

CartScreen.navigationOptions = {
    headerTitle : 'Your Cart'
}

const styles = StyleSheet.create({
    screen:{
        margin:20,
        flex:1,
    },
    summary:{   
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
        padding:10,
        shadowColor: 'black',
        shadowOpacity:0.26,
        shadowOffset: {width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor:'white',
    },
    summaryText:{
        fontFamily: 'open-sans-bold',
        fontSize:18,
    },
    amount:{
        color : Colors.accent,
    }
});

export default CartScreen;
