import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator({
    ProductsOverview : ProductsOverviewScreen,
},{
    dafaultNavigationOptions : {
        headerStyle : {
            backgroundColor : Platform.OS==='android' ?  Colors.primary : '' ,
        },
        headerTintColor :  Platform.OS==='android' ? 'white' : Colors.primary,
    }
})
