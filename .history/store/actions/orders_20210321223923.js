export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (cartItems, totalAmount) => {
    return async dispatch => {
        dispatch(
            {
                type : ADD_ORDER , 
                orderData : { 
                    items : cartItems , 
                    amount : totalAmount
            }}
        )
    }
};