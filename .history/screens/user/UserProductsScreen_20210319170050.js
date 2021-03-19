import React from 'react'
import { Button, FlatList, Alert, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {CustomHeaderButton} from '../../components/UI/HeaderButton';
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import Colors from '../../constants/Colors';
import { deleteProduct } from '../../store/actions/products';


const UserProductsScreen = (props) => {
    const dispatch = useDispatch();
    const userProducts = useSelector(state => state.products.userProducts);

    const editProductHandler = (id) => {
        props.navigation.navigate('EditProduct' , {productId : id})
    };

    const deleteHandler = (id) =>{
        Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
            {text: 'No', style:'default'},
            {text : 'Yes' , style:'destructive', onPress:()=>{
                dispatch(deleteProduct(id))
            } }
        ])
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
            deleteHandler(itemData.item.id)
        }} />
        </ProductItem> 
    } 
        
        />
    )
};

UserProductsScreen.navigationOptions = (navData) => {
    return{

        headerTitle: 'Your Products',
        headerLeft : ()=> (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Men"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight : () => (<Button title='Add' onPress={()=>{
        navData.navigation.navigate('EditProduct');
    }} />)
    }
}

export default UserProductsScreen;
