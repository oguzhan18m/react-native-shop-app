import React from 'react';
import {Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const CustomHeaderButton = (props) => {
    return (<HeaderButton 
    {...props} 
    IconComponent={Ionicons}
    color={Platform.OS==='android' ? 'white' : 'black'}
    iconSize={23}
    />);
}

export default CustomHeaderButton;
