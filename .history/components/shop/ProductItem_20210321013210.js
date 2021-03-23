import React from 'react'
import { View, Text , StyleSheet, Image, TouchableOpacity, TouchableNativeFeedback , Platform } from 'react-native';


const ProductItem = (props) => {

    let TouchableComponent = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.product}>
            <View style={styles.touchable}>    
            <TouchableComponent onPress={props.onSelect} useForeground>
                <View>
                    <View style={styles.imageContainer}>
                        <Image source={require(props.image)} style={styles.image} />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                    </View>
                    <View style={styles.actions}>
                        {props.children}
                    </View>
                </View>
            </TouchableComponent>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    product:{
        shadowColor: 'black',
        shadowOpacity:0.26,
        shadowOffset: {width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin : 20,
    },
    touchable:{
        borderRadius:10,
        overflow: 'hidden',
    },
    imageContainer:{
        width: '100%',
        height:'60%',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        overflow: 'hidden',
    },
    image:{
        width: '100%',
        height:'100%',
    },
    title:{
        fontSize: 18,
        marginVertical:2,
        fontFamily: 'Inter_900Black',
    },
    price:{
        fontSize: 14,
        color:'#888',
        fontFamily: 'Inter_900Black',
    },
    actions:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        height:'23%',
        paddingHorizontal:20,
    },
    details:{
        alignItems:'center',
        height:'17%',
        padding:10,
    }
});

export default ProductItem;
