import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
// import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import authReducer from './store/reducers/auth';
import ShopNavigator from './navigation/ShopNavigator';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",
]);

const rootReducer = combineReducers({
  products : productsReducer,
  cart : cartReducer,
  orders : ordersReducer,
  auth : authReducer,
});
const composedEnhancer = composeWithDevTools(applyMiddleware(ReduxThunk));
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer,composedEnhancer);

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
//   })
// }

const App = () => {
  // const [fontsLoaded, setFontsLoaded] = useState(false);
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if(!fontsLoaded){
    return (
    <AppLoading/>)
  }

  return (
    <Provider store={store}>
        <ShopNavigator />
    </Provider>
  );
};

export default App;