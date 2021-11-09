import React from "react";
import { useSelector } from "react-redux";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountStyles,
} from "./cart-icon.styles";

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <CartIconContainer to="/checkout">
      <ShoppingIcon />
      <ItemCountStyles>{itemCount}</ItemCountStyles>
    </CartIconContainer>
  );
};

export default CartIcon;
