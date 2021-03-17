import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Button, Platform } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const CartItem = (props) => {
    return (
        <View>
            <Text>
                <Text>QTY</Text>
                <Text>TITLE</Text>
            </Text>
            <View>
                <Text>$AMT</Text>
                <TouchableOpacity>
                    <Ionicons name={Platform.OS ==='android' ? 'md-trash' : 'ios-trash' } />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default CartItem;
