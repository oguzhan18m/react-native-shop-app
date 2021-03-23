import React,{useState,useEffect, useCallback, useReducer} from 'react';
import {View, StyleSheet, KeyboardAvoidingView, ScrollView, Button, ActivityIndicator, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import * as authActions from '../../store/actions/auth';
import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import { LinearGradient } from 'expo-linear-gradient';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value
      };
      const updatedValidities = {
        ...state.inputValidities,
        [action.input]: action.isValid
      };
      let updatedFormIsValid = true;
      for (const key in updatedValidities) {
        updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
      }
      return {
        formIsValid: updatedFormIsValid,
        inputValidities: updatedValidities,
        inputValues: updatedValues
      };
    }
    return state;
  }; 

const AuthScreen = (props) => {
    const [isSignup, setIsSignup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(); 
    const dispatch = useDispatch();
    
    //useReducer()
    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
          email :'',
          password : '',
        },
        inputValidities: {
          email: false,
          password: false,
        },
        formIsValid:false
      });

    useEffect(() => {
        if(error){
            Alert.alert('An error occured!' , error, [{text: 'OK'}])
        }
    }, [error])

    const authHandler = async () => {
        let action;
        if(isSignup){
            action = authActions.signup(formState.inputValues.email, formState.inputValues.password);
        }else{
            action = authActions.login(formState.inputValues.email, formState.inputValues.password);
        };
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(action);
            props.navigation.navigate('Shop');
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }

    const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
          type: FORM_INPUT_UPDATE,
          value: inputValue,
          isValid: inputValidity,
          input: inputIdentifier
        });
      },[dispatchFormState]);

    return (
        <KeyboardAvoidingView  style={styles.screen}>
            <LinearGradient colors={['#dedede' , '#cecece' , '#fff' ]} style={styles.gradient}>
                <Card style={styles.authContainer}>
                    <ScrollView>
                        <Input 
                        id='email' 
                        label='E-mail' 
                        keyboardType='email-address' 
                        required 
                        email 
                        autoCapitalize='none' 
                        errorText='Please enter a valid e-mail address'
                        onInputChange={inputChangeHandler}
                        initialValue=''
                        />
                        <Input 
                        id='password' 
                        label='Password' 
                        keyboardType='default' 
                        secureTextEntry
                        required 
                        minLength={5}
                        autoCapitalize='none' 
                        errorText='Please enter a valid password'
                        onInputChange={inputChangeHandler}
                        initialValue=''
                        />
                        <View style={styles.buttonContainer}>
                            { isLoading ? 
                                <ActivityIndicator size='small' color='black' />
                            : <Button title={ isSignup ? 'Sign Up' : 'Login'} color='#4CAF50'  onPress={authHandler} />}
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title={`Switch to ${ isSignup ? 'Login' : 'Sign Up'}`} color='grey' onPress={()=>{
                                setIsSignup(prevState => !prevState)
                            }} />
                        </View>
                    </ScrollView>
                </Card>
        </LinearGradient>
        </KeyboardAvoidingView>
    )
};

AuthScreen.navigationOptions = navData => {
    return{
        headerTitle: 'Authenticate',
    }
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    authContainer:{
        width:'80%',
        maxWidth:400,
        height:'70%',
        maxHeight:400,
        padding:20,
    },
    gradient:{
        flex:1,
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    buttonContainer:{
        marginVertical:10,
    }
});

export default AuthScreen;
