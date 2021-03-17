import {createStackNavigator} from 'react-navigation';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';

const ProductsNavigator = createStackNavigator({
    ProductsOverview : ProductsOverviewScreen,
},{
    dafault
})
