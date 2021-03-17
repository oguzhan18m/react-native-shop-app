import {createStackNavigator} from 'react-navigation-stack';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';

const ProductsNavigator = createStackNavigator({
    ProductsOverview : ProductsOverviewScreen,
},{
    dafault
})
