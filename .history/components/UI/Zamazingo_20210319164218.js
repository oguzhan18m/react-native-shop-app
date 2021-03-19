import React from 'react';
import {Platform} from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
// import Colors from '../../constants/Colors';

const Zamazingo = props => {

    return (<HeaderButton {...props} IconComponent={Ionicons} iconName={Platform.OS==='android' ? 'md-menu' : 'ios-menu'} 
    iconSize={23} color='black' />);
}

export default Zamazingo;