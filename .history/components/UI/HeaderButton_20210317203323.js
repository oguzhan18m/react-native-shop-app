import React from 'react';
import {Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

const CustomHeaderButton = (props) => {

    const { colors } = useTheme();

    return (<HeaderButton 
    {...props} 
    IconComponent={Ionicons}
    color={Platform.OS==='android' ? colors.text : colors.text}
    iconSize={23}
    />);
}

export default CustomHeaderButton;
