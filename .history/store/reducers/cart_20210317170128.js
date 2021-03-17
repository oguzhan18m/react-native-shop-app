import { ADD_TO_CART } from "../actions/cart";

const initialState = {
    items: {},
    sum : 0 ,

};

export default (state = initialState , action ) => {
    switch (action.type) {
        case ADD_TO_CART:
            
            break;
    
        default:
            return state;
    }
}