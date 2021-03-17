import React from 'react'
import { View, Text , StyleSheet, Image } from 'react-native';

const ProductItem = () => {
    return (
        <View>
            <Image />
            <Text>TITLE</Text>
            <Text>$PRICE</Text>
            <View>
                <Button title='View Details' />
                <Button title='Add To Cart' />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default ProductItem;
