import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';

const ProductsOverviewScreen = (props) => {
    const products = useSelector(state=> state.products.availableProducts);
    const dispatch = useDispatch();
    
    console.log(products);


    return (
    <FlatList data={products} 
    keyExtractor={item => item.id} 
    renderItem={itemData => <ProductItem 
        onViewDetails={()=>{props.navigation.navigate('ProductDetail', { productId : itemData.item.id, productTitle : itemData.item.title })}} 
        onAddToCart={()=>{
            dispatch(cartActions.addToCart())
        }}
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
