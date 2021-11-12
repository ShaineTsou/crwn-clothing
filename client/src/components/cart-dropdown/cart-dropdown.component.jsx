import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  CartItemsContainer,
  CartFooterContainer,
} from "./cart-dropdown.styles";

const CartDropdown = ({ history }) => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <CartDropdownContainer className="cart-dropdown">
      <CartItemsContainer className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty!</span>
        )}
      </CartItemsContainer>
      <CartFooterContainer className="cart-footer">
        <div className="cart-total">Total: ${total}</div>
        <CustomButton
          onClick={() => {
            history.push("/checkout");
          }}
        >
          Go to Checkout
        </CustomButton>
      </CartFooterContainer>
    </CartDropdownContainer>
  );
};

export default withRouter(CartDropdown);
