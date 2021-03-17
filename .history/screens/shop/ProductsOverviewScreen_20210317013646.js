import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = (props) => {
    const products = useSelector(state=> state.products.availableProducts);
    console.log(products);

    return (
    <FlatList data={products} 
    keyExtractor={item => item.id} 
    renderItem={itemData => <ProductItem onViewDetails={()=>{}} onAddToCart={()=>{}}
        image={itemData.item.imageUrl} 
        title={itemData.item.title} 
        price={itemData.item.price} />} 
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
