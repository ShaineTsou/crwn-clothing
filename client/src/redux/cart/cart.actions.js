import CartActionTypes from "./cart.types";

export const addCartItem = (item) => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: item,
});

export const removeCartItem = (item) => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
