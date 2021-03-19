import React from 'react'
import { Button, FlatList, Button } from 'react-native';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {useSelector} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import Colors from '../../constants/Colors';


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
        onSelect={}
        >
                    <Button color={Colors.primary} title='Edit' onPress={()=>{
            selectItemHandler(itemData.item.id, itemData.item.title)
        }} />
        <Button color={Colors.primary} title='Delete' onPress={()=>{
            dispatch(cartActions.addToCart(itemData.item))
        }} />
        </ProductItem> 
    } 
        
        />
    )
};

UserProductsScreen.navigationOptions = (navData) => {
    return{

        headerTitle: 'Your Products',
        headerLeft : ()=>(
            <Button title='Menu' onPress={()=>{
                        navData.navigation.toggleDrawer();
                    }} />
        //     <HeaderButtons HeaderButtonComponent={Zamazingo}>
        //     <Item title='Menu'
        //     iconName={Platform.OS ==='android' ? 'md-menu' : 'ios-menu'}
        //     onPress={()=>{
        //         navData.navigation.toggleDrawer();
        //     }}
        //     />
        // </HeaderButtons>
    ),
    }
}

export default UserProductsScreen;
