import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = (props) => {
    const products = useSelector(state=> state.products.availableProducts);
    console.log(products);

    return (
    <FlatList data={products} 
    keyExtractor={item => item.id} 
    renderItem={itemData => <ProductItem />} 
    />
    );
};


ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products',
};

const styles = StyleSheet.create({
    title:{
        color: 'black',
    }
})

export default ProductsOverviewScreen;
