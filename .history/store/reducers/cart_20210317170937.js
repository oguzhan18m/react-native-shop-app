import { ADD_TO_CART } from "../actions/cart";
import CartItem from '../../models/cart-item';

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

            if(state.items[addedProduct.id]){
                //already have the item
                const updatedCartItem = new CartItem(
                    state.items[addedProduct.id].quantity +1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id]+prodPrice,
                )
            }else{
                const newCartItem = new CartItem(1,prodPrice,prodTitle, prodPrice);
                return {...state.items , [addedProduct.id] : newCartItem }
            }
        default:
            break;
        }
        return state;
}