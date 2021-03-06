import Product from "../../models/products";

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

// FETCH PRODUCTS FIRST

export const fetchProducts = () => {
    return async dispatch => {

        try {
        // any async code you want!
        const response = await fetch('https://react-native-shop-1c437-default-rtdb.firebaseio.com/products.json');

        if(!response.ok){
            throw new Error('Something went wrong!');
        }
    
        const resData = await response.json();
        console.log(resData);
        
        const loadedProducts = [];
        for (const key in resData) {
            loadedProducts.push(new Product(
                key,
                'u1',
                resData[key].title,
                resData[key].imageUrl,
                resData[key].description,
                resData[key].price,
            ));
        }
        
        dispatch({type : SET_PRODUCTS , products: loadedProducts});
        } catch (error) {
            // send to custom analytic server 
            throw error;
        }

    }
}

// DELETE PRODUCT

export const deleteProduct = productId => {
    return async (dispatch, getState) => {

      const token = getState().auth.token;
        const response = await fetch(`https://react-native-shop-1c437-default-rtdb.firebaseio.com/products/${productId}.json?auth=${token}`, {
            method: 'DELETE',
          });

          if(!response.ok){
              throw new Error('Something went wrong!')
          }

        dispatch ({ type: DELETE_PRODUCT, pid: productId });

    }
};

// CREATE PRODUCT

export const createProduct = (title, description, imageUrl, price) => {
  return async (dispatch, getState) => {
    
    const token = getState().auth.token;
    const userId = getState().auth.userId;

    // any async code you want!
    const response = await fetch(`https://react-native-shop-1c437-default-rtdb.firebaseio.com/products.json?auth=${token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        description,
        imageUrl,
        price,
        ownerId: userId,
      })
    });

    const resData = await response.json();

    dispatch({
      type: CREATE_PRODUCT,
      productData: {
        id: resData.name,
        title,
        description,
        imageUrl,
        price,
        ownerId: userId,
      }
    });
  };
};

// UPDATE PRODUCT

export const updateProduct = (id, title, description, imageUrl) => {

    return async (dispatch, getState) =>{


    const token = getState().auth.token;
    // any async code you want!
    const response = await fetch(`https://react-native-shop-1c437-default-rtdb.firebaseio.com/products/${id}.json?auth=${token}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        description,
        imageUrl,
      })
    });

    if(!response.ok){
        throw new Error('Something went wrong!')
    }

        dispatch ({
            type: UPDATE_PRODUCT,
            pid: id,
            productData: {
              title,
              description,
              imageUrl
            }
          });
    }

};