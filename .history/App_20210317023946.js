import React,{useState} from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import {AppLoading} from 'expo-app-loading';
import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';


const rootReducer = combineReducers({
  products : productsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(!fontsLoaded){
    return (<AppLoading startAsync={fetchFonts} onFinish={()=>{setFontsLoaded(true)}} />)
  }else{   
    return (
      <Provider store={store}>
        <ShopNavigator />
    </Provider>
  );
}
};
