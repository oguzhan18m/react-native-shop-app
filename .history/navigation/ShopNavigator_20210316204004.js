import {createStackNavigator} from 'react-navigation-stack';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator({
    ProductsOverview : ProductsOverviewScreen,
},{
    dafault
})
