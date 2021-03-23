import React, {useState,useEffect, useCallback} from 'react';
import { FlatList, Button, Platform, ActivityIndicator, View, Text,StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import * as productActions from '../../store/actions/products';
import Colors from '../../constants/Colors';

const ProductsOverviewScreen = props => {
  const [isLoading , setIsLoading] = useState(false);
  const [error , setError] = useState(false);
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  const loadProducts = useCallback(async() => {
    setIsLoading(true);
    try {
      await dispatch(productActions.fetchProducts())
    } catch (error) {
        setError(error.message);
    }
    setIsLoading(false);
  },[dispatch,setIsLoading,setError]);

  useEffect(() => {
    loadProducts();
  }, [dispatch,loadProducts])

  const selectItemHandler = (id, title) => {
    props.navigation.navigate('ProductDetail', {
      productId: id,
      productTitle: title
    });
  };

  if(error){
    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.errorOccured}>An error occured : {error} </Text>
        <Button style={styles.tryAgainBtn} title='Try again' onPress={loadProducts} color='black' />
      </View>
    );
  }

  if(isLoading){
    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <ActivityIndicator size='large' color='black' />
      </View>
    );
  }
  if(!isLoading && products.length === 0){
    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>No Product Found! Maybe you should add some on Admin Panel...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            selectItemHandler(itemData.item.id, itemData.item.title);
          }}
        >
          <Button
            color={Colors.primary}
            title="View Details"
            onPress={() => {
              selectItemHandler(itemData.item.id, itemData.item.title);
            }}
          />
          <Button
            color={Colors.primary}
            title="To Cart"
            onPress={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Products',
    headerLeft: () => (
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => {
            navData.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    )
  };
};


const styles = StyleSheet.create({
  errorOccured:{
    marginBottom:30,
    fontSize:16,
    fontWeight:'bold'
  }
})

export default ProductsOverviewScreen;