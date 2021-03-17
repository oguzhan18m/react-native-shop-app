import { ADD_TO_CART } from "../actions/cart";

const initialState = {
    items: {},
    sum : 0 ,

};

export default (state = initialState , action ) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;
        default:
            break;
        }
        return state;
}