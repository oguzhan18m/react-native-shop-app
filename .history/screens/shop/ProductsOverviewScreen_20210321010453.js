import React from 'react';
import { FlatList, StyleSheet, Platform, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import Colors from '../../constants/Colors';
// import {HeaderButtons , Item} from 'react-navigation-header-buttons';
// import HeaderButton from '../../components/UI/HeaderButton';

const ProductsOverviewScreen = (props) => {
    const products = useSelector(state=> state.products.availableProducts);
    const dispatch = useDispatch();
    
    console.log(products);

    const selectItemHandler = (id, title) => {
        props.navigation.navigate('ProductDetail', { productId : id, productTitle : title });
    }

    return (
    <FlatList data={products} 
    keyExtractor={item => item.id} 
    renderItem={itemData => <ProductItem 
        onSelect={()=>{
            selectItemHandler(itemData.item.id, itemData.item.title)
        }} 
        onAddToCart={()=>{
            dispatch(cartActions.addToCart(itemData.item))
        }}
        image={itemData.item.imageUrl} 
        title={itemData.item.title} 
        price={itemData.item.price} >
            
        <Button color={Colors.primary} title='View Details' onPress={()=>{
            selectItemHandler(itemData.item.id, itemData.item.title)
        }} />
        <Button color={Colors.primary} title='Add To Cart' onPress={()=>{
            dispatch(cartActions.addToCart(itemData.item))
        }} />
        </ProductItem>
    
    } 
    />
    );
};


ProductsOverviewScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'All Products',
        headerLeft :()=> (
            <Button title='Orders' onPress={()=>{navData.navigation.toggleDrawer()}} />
            ) ,
        headerRight: ()=> (
            <Button title='Cart' onPress={()=>{navData.navigation.navigate('Cart')}} />
            ),
        }
};

const styles = StyleSheet.create({
    title:{
        color: 'black',
    }
})

export default ProductsOverviewScreen;
