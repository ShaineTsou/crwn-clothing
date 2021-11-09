import React from "react";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { CartContainer } from "./cart.styles";

const Cart = () => {
  return (
    <CartContainer>
      <CartIcon />
      <CartDropdown />
    </CartContainer>
  );
};

export default Cart;
