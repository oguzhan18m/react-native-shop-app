import React from 'react'
import { FlatList, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {useSelector} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import HeaderButton from '../../components/UI/HeaderButton';

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

UserProductsScreen.navigationOptions = (navData) => {
    headerTitle: 'Your Products',
    headerLeft : ()=>(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu'
            iconName={Platform.OS ==='android' ? 'md-menu' : 'ios-menu'}
            onPress={()=>{
                navData.navigation.toggleDrawer();
            }}
            />
        </HeaderButtons>
    )
}

export default UserProductsScreen;
