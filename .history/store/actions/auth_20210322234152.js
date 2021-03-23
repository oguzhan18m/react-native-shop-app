import {AsyncStorage} from "react-native";

// export const SIGN_UP = 'SIGN_UP';
// export const LOGIN = 'LOGIN';
export const AUTHENTICATE = 'AUTHENTICATE';

export const authenticate = (userId,token) => {
    return {type: AUTHENTICATE , userId:userId , token: token}
}

// SIGN UP

export const signup = (email,password) => {
    return async dispatch =>{
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDjMVmld5O9ljyy7HnI2QBgDlFk9jG2hEo',{
            method: 'POST',
            headers:{
                'Content-type' : 'application/json',
            },
            body: JSON.stringify({
                email : email,
                password: password,
                returnSecureToken: true, 
            })
        });

        if(!response.ok){
            const errorResData = await response.json();
            const errorId = errorResData.error.message;
            let message = 'Something went wrong!';
            
            if(errorId === 'EMAIL_EXISTS'){
                message = 'This e-mail exists already.';
            };

            throw new Error(message);
        };

        const resData = await response.json();
        console.log(resData);

        dispatch(authenticate(resData.localId, resData.idToken));
        const expirationDate = new Date( new Date().getTime() + parseInt(resData.expiresIn) * 1000 );
        saveDataToStorage(resData.idToken,resData.localId, expirationDate);
    }
};

// LOGIN

export const login = (email,password) => {
    return async dispatch =>{
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDjMVmld5O9ljyy7HnI2QBgDlFk9jG2hEo',{
            method: 'POST',
            headers:{
                'Content-type' : 'application/json',
            },
            body: JSON.stringify({
                email : email,
                password: password,
                returnSecureToken: true, 
            })
        });

        if(!response.ok){
            const errorResData = await response.json();
            const errorId = errorResData.error.message;
            let message = 'Something went wrong!';

            if(errorId === 'EMAIL_NOT_FOUND'){
                message = 'This e-mail can not be found.';
            }else if(errorId === 'INVALID_PASSWORD'){
                message = 'This password is invalid!'
            };

            throw new Error(message);
        };

        const resData = await response.json();
        console.log(resData);

        dispatch(authenticate(resData.localId, resData.idToken));
        
        const expirationDate = new Date( new Date().getTime() + parseInt(resData.expiresIn) * 1000 );
        saveDataToStorage(resData.idToken,resData.localId, expirationDate);
    }
};

// SAVE DATA TO DEVICE STORAGE

const saveDataToStorage = (token, userId, expirationDate) =>{
    AsyncStorage.setItem('userData' , JSON.stringify({
        token : token,
        userId : userId,
        expiryDate : expirationDate.toISOString(),
    }));
}