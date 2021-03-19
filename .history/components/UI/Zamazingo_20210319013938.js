import React from 'react';
import {Platform} from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
// import Colors from '../../constants/Colors';

const Zamazingo = props => {
    console.log(props);
    return (<HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={Platform.OS==='android' ? 'white' : 'black'} />);
}

export default Zamazingo;