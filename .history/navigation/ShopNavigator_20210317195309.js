import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator({
    ProductsOverview : {screen : ProductsOverviewScreen},
    ProductDetail : {screen : ProductDetailScreen},
    Cart : { screen : CartScreen}
},{
    dafaultNavigationOptions : {
        headerStyle : {
            backgroundColor : Platform.OS==='android' ?  'black' : '' ,
        },
        headerTitleStyle : {
            fontFamily : 'open-sans-bold'
        },
        headerBackTitleStyle : {
            fontFamily : 'open-sans'
        },
        headerTintColor :  Platform.OS==='android' ? 'white' : 'black',
    }
})

export default createAppContainer(ProductsNavigator);