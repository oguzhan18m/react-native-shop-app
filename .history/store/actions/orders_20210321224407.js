export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (cartItems, totalAmount) => {
    return async dispatch => {
        const theDate =  new Date().toISOString();
    const response = await fetch('https://react-native-shop-1c437-default-rtdb.firebaseio.com/orders/u1.json', {
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