import React,{useState, useEffect, useCallback , useReducer} from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, Button, Alert } from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import { createProduct, updateProduct } from '../../store/actions/products';

const formReducer = (state,action) => {
    if(action.type === 'UPDATE')
}

const EditProductScreen = (props) => {
    const prodId = props.navigation.getParam('productId');
    const editedProduct = useSelector(state => state.products.userProducts.find(prod => prod.id === prodId));

    // states
    const [ title, setTitle] = useState(editedProduct ? editedProduct.title : '');
    const [titleIsValid, setTitleIsValid] = useState(false);
    const [ imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '');
    const [ price, setPrice] = useState('');
    const [ description, setDescription] = useState(editedProduct ? editedProduct.description : '');
    const dispatch = useDispatch();

    useReducer(formReducer, {
        inputValues : {
            title: editedProduct ? editedProduct.title : '',
            imageUrl : editedProduct ? editedProduct.imageUrl : '',
            description : editedProduct ? editedProduct.description : '',
            price : '',
        },
        inputValidities: {
            title: editedProduct ? true : false,
            imageUrl : editedProduct ? true : false,
            description : editedProduct ? true : false,
        },
        formIsValid : false,
    })


    const submitHandler = useCallback(()=>{
        if(!titleIsValid){
            Alert.alert('Wrong Input!', 'Please check the errors in the form.' ,[
                {text: 'OK' }
            ])
            return;
        }

        if(editedProduct){
            dispatch(updateProduct(prodId,title,description,imageUrl))
        }else{
            dispatch(createProduct(title,description,imageUrl,+price))
        };
        props.navigation.goBack();
    },[dispatch, title, imageUrl, price, description, prodId, titleIsValid]);

    useEffect(() => {
        props.navigation.setParams({submit : submitHandler})
    }, [submitHandler]);

    const titleChangeHandler = (text) => {
        if(text.trim().length === 0){
            setTitleIsValid(false);
        }else{
            setTitleIsValid(true);
        }
        setTitle(title);
    }

    return (
        <ScrollView>
            <View style={styles.form}>

            <View style={styles.formControl}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} value={title} onChangeText={titleChangeHandler} 
                keyboardType='default' autoCapitalize='sentences' autoCorrect returnKeyType='next' 
                onEndEditing={()=>{console.log('onEndEditing');}} onSubmitEditing={()=>{console.log('onSubmitEditing');}} />
                {!titleIsValid && <Text>Please enter a valid title!</Text>}
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Image URL</Text>
                <TextInput style={styles.input} value={imageUrl} onChangeText={text => setImageUrl(text)}  />
            </View>
            {editedProduct ? null : (<View style={styles.formControl}>
                <Text style={styles.label}>Price</Text>
                <TextInput style={styles.input} value={price} onChangeText={text => setPrice(text)} keyboardType='decimal-pad' />
            </View>)}
            <View style={styles.formControl}>
                <Text style={styles.label}>Description</Text>
                <TextInput style={styles.input} value={description} onChangeText={text => setDescription(text)} />
            </View>
            
            </View>
        </ScrollView>
    )
};

EditProductScreen.navigationOptions = navData => {
    const submitFn = navData.navigation.getParam('submit');

    return{
        headerTitle : navData.navigation.getParam('productId') ? 'Edit Product' : 'Add Product',
        headerRight : <Button title='Save' onPress={submitFn} />
    }
}

const styles = StyleSheet.create({
    form:{
        margin:20
    },
    formControl:{
        width:'100%'
    },
    label:{
        fontFamily:'Inter_900Black',
        marginVertical:8,
    },
    input:{
        paddingHorizontal:2,
        paddingVertical:5,
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
    },
});

export default EditProductScreen;
