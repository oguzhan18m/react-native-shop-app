import React,{useState} from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { __REDUX_DEVTOOLS_EXTENSION__ } from 'redux-devtools-extension';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';


const rootReducer = combineReducers({
  products : productsReducer,
  cart : cartReducer,
});

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(!fontsLoaded){
    return (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={(err) => console.log(err)}
      />)
  }

  return (
    <Provider store={store}>
        <ShopNavigator />
    </Provider>
  );
};

export default App;