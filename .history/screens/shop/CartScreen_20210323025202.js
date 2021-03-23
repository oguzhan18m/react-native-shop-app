import React,{ useState } from 'react'
import { View, Text, FlatList, StyleSheet, Button, ActivityIndicator } from 'react-native';
import Colors  from '../../constants/Colors';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from '../../components/shop/CartItem';
import { removeFromCart } from '../../store/actions/cart';
import * as ordersActions from '../../store/actions/orders';
import Card from '../../components/UI/Card';


const CartScreen = () => {
    const [isLoading , setIsLoading] = useState(false);
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


    const sendOrderHandler = async () => {
        setIsLoading(true);
        await dispatch(ordersActions.addOrder(cartItems,totalAmount));
        setIsLoading(false);
    }

    return (
        <View style={styles.screen}>
            <Card style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total : <Text style={styles.amount}> 
                    ${Math.round(totalAmount.toFixed(2) * 100) / 100}
                    </Text>
                </Text>
                {isLoading ? <ActivityIndicator size='small' color='black' /> : 
                <Button onPress={sendOrderHandler} color={Colors.accent} title='Order Now' disabled={cartItems.length === 0} />
                }
                
            </Card>

            <FlatList 
            data={cartItems} 
            keyExtractor={item => item.productId} 
            renderItem={itemData => <CartItem title={itemData.item.productTitle} deletable
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
    },
    summaryText:{
        fontFamily: 'Inter_900Black',
        fontSize:18,
    },
    amount:{
        color : Colors.accent,
        fontSize:22,
        color:'#4CAF50'
    }
});

export default CartScreen;
