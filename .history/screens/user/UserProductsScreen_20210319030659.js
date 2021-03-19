import React from 'react'
import { Button, FlatList } from 'react-native';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import Colors from '../../constants/Colors';
import { deleteProduct } from '../../store/actions/products';


const UserProductsScreen = () => {
    const dispatch = useDispatch();
    const userProducts = useSelector(state => state.products.userProducts);

    const editProductHandler = (id) => {
        props.navigation.navigate('EditProduct' , {productId : id})
    } 

    return (
        <FlatList 
        data={userProducts} 
        keyExtractor={item => item.id} 
        renderItem={itemData => 
        <ProductItem 
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        price={itemData.item.price}
        onSelect={()=>{
            editProductHandler(itemData.item.id)
        }}
        >
        <Button color={Colors.primary} title='Edit' onPress={()=>{
            editProductHandler(itemData.item.id)
        }} />
        
        <Button color={Colors.primary} title='Delete' onPress={()=>{
            dispatch(deleteProduct(itemData.item.id))
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
    headerRight : ()=> (<Button title='Add' onPress={()=>{
        navData.navigation.toggleDrawer();
    }} />)
    }
}

export default UserProductsScreen;
