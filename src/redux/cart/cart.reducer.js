import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
    dropdownHidden: true
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN: 
            return {
                ...state,
                dropdownHidden: !state.dropdownHidden
            }
        default: 
            return state;
    }
}

export default cartReducer;