import React,{ useEffect, useCallback , useReducer} from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, Button, Alert } from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import { createProduct, updateProduct } from '../../store/actions/products';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state,action) => {
    if(action.type === FORM_INPUT_UPDATE){
        const updatedValues = {
            ...state.inputValues,
            [action.input] : [action.value],
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input] : [action.isValid]
        };
        let updatedFormIsValid = true;
        for(const key in updatedValidities){
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return{
            formIsValid : updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues : updatedValues,
        }
    };
    return state;

}

const EditProductScreen = (props) => {
    const prodId = props.navigation.getParam('productId');
    const editedProduct = useSelector(state => state.products.userProducts.find(prod => prod.id === prodId));

    const dispatch = useDispatch();

    //used useReducer() instead of useState() hook.
    const [formState , dispatchFormState] = useReducer(formReducer, {
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
            price :   editedProduct ? true : false,
        },
        formIsValid :  editedProduct ? true : false,
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

    const textChangeHandler = (inputIdentifier,text) => {
        let isValid = false;
        if(text.trim().length > 0){
            isValid === true;
        }else{

        }
        dispatchFormState({type : FORM_INPUT_UPDATE, value : text, isValid : isValid, input: inputIdentifier})
    }

    return (
        <ScrollView>
            <View style={styles.form}>

            <View style={styles.formControl}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} value={title} onChangeText={textChangeHandler.bind(this,'title')} 
                keyboardType='default' autoCapitalize='sentences' autoCorrect returnKeyType='next' 
                onEndEditing={()=>{console.log('onEndEditing');}} onSubmitEditing={()=>{console.log('onSubmitEditing');}} />
                {!titleIsValid && <Text>Please enter a valid title!</Text>}
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Image URL</Text>
                <TextInput style={styles.input} value={imageUrl} onChangeText={textChangeHandler.bind(this, 'imageUrl')}  />
            </View>
            {editedProduct ? null : (<View style={styles.formControl}>
                <Text style={styles.label}>Price</Text>
                <TextInput style={styles.input} value={price} onChangeText={textChangeHandler.bind(this, 'price')} keyboardType='decimal-pad' />
            </View>)}
            <View style={styles.formControl}>
                <Text style={styles.label}>Description</Text>
                <TextInput style={styles.input} value={description} onChangeText={textChangeHandler.bind(this, 'description')} />
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
