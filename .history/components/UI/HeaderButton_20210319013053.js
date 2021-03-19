import React from 'react';
import {Platform} from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const CustomHeaderButton = props => {
    console.log(props);
    return (<HeaderButton {...props} IconComponent={Ionicons} iconSize={23}  />);
}

export default CustomHeaderButton;