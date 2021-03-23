import React from 'react'
import { Button, FlatList, Alert, Platform, View , Text} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
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
    };

    if(userProducts.length === 0){
        return( 
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>No product found! Maybe you should create one?</Text>
        </View>)
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
        <View style={{borderRadius:24, borderWidth:1, paddingHorizontal:10}}>
        <Button color={Colors.accent} title='Edit' onPress={()=>{
            editProductHandler(itemData.item.id)
        }} />
        </View>
        
        <Button color='#FE5C5C' title='Delete' onPress={()=>{
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
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),

    headerRight : () => 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Add"
            iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
            onPress={() => {
              navData.navigation.navigate('EditProduct');
            }}
          />
        </HeaderButtons>,
      
    }
}

export default UserProductsScreen;
