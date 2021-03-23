import Order from "../../models/order";

export const ADD_ORDER = 'ADD_ORDER';
export const SET_ORDERS = 'SET_ORDERS';

export const fetchOrders = () => {
    return async (dispatch,getState) => {
        
        const userId = getState().auth.userId;
        
        try {
            // any async code you want!
            const response = await fetch(`https://react-native-shop-1c437-default-rtdb.firebaseio.com/orders/${userId}.json`);
    
            if(!response.ok){
                throw new Error('Something went wrong!');
            }
        
            const resData = await response.json();
            console.log(resData);
            
            const loadedOrders = [];
            for (const key in resData) {
                loadedOrders.push(new Order(
                    key,
                    resData[key].cartItems,
                    resData[key].totalAmount,
                    new Date(resData[key].date),
                ));
            }
            
            dispatch({type : SET_ORDERS , products: loadedOrders});
            } catch (error) {
                // send to custom analytic server 
                throw error;
            }

        dispatch({type : SET_ORDERS, orders : []});
    }
}

export const addOrder = (cartItems, totalAmount) => {
    return async (dispatch,getState) => {

    const token = getState().auth.token;
    const userId = getState().auth.userId;

    const theDate =  new Date().toISOString();
    const response = await fetch(`https://react-native-shop-1c437-default-rtdb.firebaseio.com/orders/${userId}.json?auth=${token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cartItems,
        totalAmount,
        date :theDate,
      })
    });

    const resData = await response.json();

    if(!response.ok){
        throw new Error('Something went wrong!')
    }

        dispatch(
            {
                type : ADD_ORDER , 
                orderData : { 
                    id: resData.name,
                    items : cartItems , 
                    amount : totalAmount,
                    date :theDate,
            }}
        )
    }
};