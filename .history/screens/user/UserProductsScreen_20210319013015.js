import React from 'react'
import { FlatList } from 'react-native';
import {useSelector} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const UserProductsScreen = () => {

    const userProducts = useSelector(state => state.products.userProducts);


    return (
        <FlatList 
        data={userProducts} 
        keyExtractor={item => item.id} 
        renderItem={itemData => 
        <ProductItem 
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        price={itemData.item.price}
        onViewDetail={()=>{}}
        onAddToCart={()=>{}}
        /> } />
    )
};

UserProductsScreen.navigationOptions = {
    headerTitle: 'Your Products',
}

export default UserProductsScreen;
