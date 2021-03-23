import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createDrawerNavigator, DrawerNavigatorItems} from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform , SafeAreaView ,Button, View } from 'react-native';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import AuthScreen from '../screens/user/AuthScreen';
import StartUpScreen from '../screens/StartUpScreen';
import Colors from '../constants/Colors';
import { Ionicons } from "@expo/vector-icons";
import {useDispatch} from 'react-redux';
import * as authActions from '../store/actions/auth';

const defaultNavOptions = {
    headerStyle : {
        backgroundColor : Platform.OS==='android' ?  Colors.primary : '' ,
    },
    headerTitleStyle : {
        fontFamily : 'Inter_900Black'
    },
    headerBackTitleStyle : {
        fontFamily : 'Inter_900Black'
    },
    headerTintColor :  Platform.OS==='android' ? 'white' : Colors.primary,
};

const ProductsNavigator = createStackNavigator({
    ProductsOverview : {screen : ProductsOverviewScreen},
    ProductDetail : {screen : ProductDetailScreen},
    Cart : { screen : CartScreen}
},{
    navigationOptions:{
        drawerIcon : drawerConfig => <Ionicons name={Platform.OS==='android' ? 'md-cart' : 'ios-cart'} 
        size={23} color={drawerConfig.tintColor} />
    },
    dafaultNavigationOptions : defaultNavOptions
});


const OrdersNavigator = createStackNavigator({
    Orders : {screen : OrdersScreen},

},{
    navigationOptions:{
        drawerIcon : drawerConfig => <Ionicons name={Platform.OS==='android' ? 'md-list' : 'ios-list'} 
        size={23} color={drawerConfig.tintColor} />
    },
    dafaultNavigationOptions : defaultNavOptions
});

const AdminNavigator = createStackNavigator({
    UserProducts : {screen : UserProductsScreen},
    EditProduct : {screen: EditProductScreen},

},{
    navigationOptions:{
        drawerIcon : drawerConfig => <Ionicons name={Platform.OS==='android' ? 'md-create' : 'ios-create'} 
        size={23} color={drawerConfig.tintColor} />
    },
    dafaultNavigationOptions : defaultNavOptions
});

const ShopNavigator = createDrawerNavigator({
    Products : ProductsNavigator,
    Orders : OrdersNavigator,
    Admin : AdminNavigator,
},{
    contentOptions :{
        activeTintColor : Colors.primary, 
    },
    contentComponent: props => {
        const dispatch = useDispatch();
        return (
          <View style={{flex:1, padding:20}}>
            <SafeAreaView forseInset={{top:'always', horizontal:'never'}}>
              <DrawerNavigatorItems {...props} />
              <Button title="Logout" color='black' onPress={() => {
                  dispatch(authActions.logout());
                  props.navigation.navigate('Auth');
              }} />
            </SafeAreaView>
          </View>
        )
      }
});

const AuthNavigator = createStackNavigator({
    Auth : {screen : AuthScreen},
},{
    defaultNavigationOptions: defaultNavOptions,
})

const MainNavigator = createSwitchNavigator({
    StartUp : StartUpScreen,
    Auth : AuthNavigator,
    Shop: ShopNavigator,
})

export default createAppContainer(MainNavigator);