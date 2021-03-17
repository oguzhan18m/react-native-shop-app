import React from 'react'
import { View, StyleSheet, ScrollView, Text, Image, Button } from 'react-native';
import {useSelector} from 'react-redux';

const ProductDetailScreen = (props) => {
    
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId));


    return (
        <ScrollView>
            <Image source={{uri : selectedProduct.imageUrl}} />
            <Button title='Add To Cart' />
            <Text>${selectedProduct.price}</Text>
            <Text>{selectedProduct.description}</Text>
        </ScrollView>
    )
};

ProductDetailScreen.navigationOptions = (navData) => {
    return {
        headerTitle: navData.navigation.getParam('productTitle'),
    }
}

const styles = StyleSheet.create({

});

export default ProductDetailScreen;
