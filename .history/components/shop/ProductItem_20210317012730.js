import React from 'react'
import { View, Text , StyleSheet, Image } from 'react-native';

const ProductItem = (props) => {
    return (
        <View style={styles.product}>
            <Image source={{uri : props.image}} />
            <Text>{props.title}</Text>
            <Text>${props.price.toFixed(2)}</Text>
            <View>
                <Button title='View Details' />
                <Button title='Add To Cart' />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    product:{
        shadowColor: 'black',
        shadowOpacity:0.26,
        shadowOffset: {width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin : 20,
    }
});

export default ProductItem;
