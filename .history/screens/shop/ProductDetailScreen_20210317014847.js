import React from 'react'
import { View, StyleSheet, ScrollView, Text, Image, Button } from 'react-native';

const ProductDetailScreen = (props) => {
    
    const productId = props.navigation.getParam('productId');


    return (
        <View>
            <Text>PRODUCT DETAIL SCREEN</Text>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default ProductDetailScreen;
