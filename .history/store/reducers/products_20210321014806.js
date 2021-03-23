import PRODUCTS from '../../data/dummy-data';
import Product from '../../models/products';
import { DELETE_PRODUCT,CREATE_PRODUCT, UPDATE_PRODUCT } from '../actions/products';


const initialState = {
    availableProducts : PRODUCTS,
    userProducts : PRODUCTS.filter(prod => prod.ownerId === 'u1'),
};


export default (state = initialState , action) =>{
    switch (action.type) {
        case CREATE_PRODUCT :
            const newProduct = new Product(new Date().toString() , 'u1' , 
            action.productData.title, 
            action.productData.description, 
            action.productData.imageUrl, 
            action.productData.price );

            return{
                ...state,
                availableProducts : state.availableProducts.concat(newProduct),
                userProducts : state.userProducts.concat(newProduct),
            }
        case UPDATE_PRODUCT:
            const prodIndex = state.userProducts.findIndex(prod => prod.id === action.pid);
            const updatedProd = new Product(action.pid, 
                state.userProducts[prodIndex].ownerId,
                action.productData.title,
                action.productData.description,
                action.productData.imageUrl,
                state.userProducts[prodIndex].price,
                );
            const updatedUserProducts = [...state.userProducts];
            updatedUserProducts[prodIndex] = updatedProd; 

            const availableProductIndex = state.availableProducts.findIndex(prod => prod.id === action.pid);
            const updatedAvailableProducts = [...state.availableProducts];
            updatedAvailableProducts[availableProductIndex] = updatedProd;
            return{
                ...state,
                availableProducts : updatedAvailableProducts,
                userProducts : updatedUserProducts,
            }
        case DELETE_PRODUCT:
        return {
            ...state, 
            userProducts: state.userProducts.filter(item=>item.id !== action.pid),
            availableProducts: state.availableProducts.filter(item=>item.id !== action.pid),
        }
    }
    return state;
}