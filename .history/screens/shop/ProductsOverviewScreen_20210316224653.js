import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = (props) => {
    const products = useSelector(state=> state.products.availableProducts);
    console.log(products);

    return (
    <FlatList data={products} 
    keyExtractor={item => item.id} 
    renderItem={itemData => <Text title={styles.title}>{itemData.item.title}</Text>} 
    />
    );
};


ProductsOverviewScreen.navigationOptions ={
    headerTitle: 'All Products',
};

const styles = StyleSheet.create({
    title:{
        color: 'black',
    }
})

export default ProductsOverviewScreen;
