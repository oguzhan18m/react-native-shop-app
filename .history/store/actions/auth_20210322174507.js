export const SIGN_UP = 'SIGN_UP';
export const LOGIN = 'LOGIN';

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
            throw new Error('Something went wrong');
        };

        const resData = await response.json();
        console.log(resData);

        dispatch({type : SIGN_UP})
    }
};


export const login = (email,password) => {
    return async dispatch =>{
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPasswor?key=AIzaSyDjMVmld5O9ljyy7HnI2QBgDlFk9jG2hEo',{
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
            throw new Error('Something went wrong');
        };

        const resData = await response.json();
        console.log(resData);

        dispatch({type : LOGIN})
    }
}