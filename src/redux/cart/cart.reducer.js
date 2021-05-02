import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
    dropdownHidden: true,
    cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN: 
            return {
                ...state,
                dropdownHidden: !state.dropdownHidden
            }
        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        default: 
            return state;
    }
}

export default cartReducer;