import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartDropdownHidden = createSelector(
    [selectCart],
    cart => cart.dropdownHidden
);

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 
        0
    )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedCost, cartItem) => accumulatedCost + cartItem.quantity * cartItem.price, 
        0
    )
);

