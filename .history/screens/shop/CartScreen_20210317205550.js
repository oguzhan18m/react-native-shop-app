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
    screen:{
        margin:20,

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

    },
    amount:{

    }
});

export default CartScreen;
