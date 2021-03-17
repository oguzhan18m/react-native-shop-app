import React from 'react'
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = (props) => {
    const products = useSelector(state=> state.products.availableProducts);

    return <FlatList />;
}

export default ProductsOverviewScreen;
