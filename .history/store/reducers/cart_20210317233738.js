import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from '../../models/cart-item';

const initialState = {
    items: {},
    totalAmount : 0 ,
};

export default (state = initialState , action ) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;

            let updatedOrNewCartItem;

            if(state.items[addedProduct.id]){
                //already have the item
                updatedOrNewCartItem= new CartItem(
                    state.items[addedProduct.id].quantity +1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id]+prodPrice,
                );
            
            }else{
                updatedOrNewCartItem= new CartItem(1,prodPrice,prodTitle, prodPrice);                
            }

            return {
                ...state,
                 items:{...state.items, [addedProduct.id] : updatedOrNewCartItem} , 
                 totalAmount : state.totalAmount + prodPrice,
                }

        case REMOVE_FROM_CART:
            const selectedCartItem = state.items[action.pid];
            const currentQty = selectedCartItem.quantity;
            if(currentQty >1){
                const updatedCartItems = new CartItem(selectedCartItem.quantity - 1, selectedCartItem.prodPrice, selectedCartItem.prodTitle,selectedCartItem.sum - selectedCartItem.prodPrice)
            }else{
                const updatedCartItems = {...state.items};
                delete updatedCartItems[action.pid];
            }

        default:
            break;
        }
        return state;
}