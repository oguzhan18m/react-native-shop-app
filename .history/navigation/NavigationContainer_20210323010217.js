import React from 'react';
import ShopNavigator from './ShopNavigator';
import {useSelector} from 'react-redux';

const NavigationContainer = (props) => {
    const isAuth = useSelector(state => !!state.auth.token);


    return <ShopNavigator />;
}

export default NavigationContainer;
