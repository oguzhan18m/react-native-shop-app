export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const deleteProduct = productId =>{
    return{type : DELETE_PRODUCT , pid : productId};
}

export const createProduct = (title, description, imageUrl, price) => {

    // any async code you want!
    fetch('https://react-native-shop-1c437-default-rtdb.firebaseio.com/products.json', {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            title,
            description,
            imageUrl,
            price,
        })
    })
    return dispatch => {
        dispatch({type : CREATE_PRODUCT , productData: {
            title,
            description,
            imageUrl,
            price,
        } })
    }
    

}

export const updateProduct = (id, title, description, imageUrl) => {
    return {type : UPDATE_PRODUCT ,
        pid: id, 
        productData: {
        title,
        description,
        imageUrl,
    } }
}