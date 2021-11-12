import React from "react";
import { useDispatch } from "react-redux";

import {
  addCartItem,
  removeCartItem,
  clearItemFromCart,
} from "../../redux/cart/cart.actions";

import { ReactComponent as Delete } from "../../assets/delete.svg";

import { CartItemContainer, ItemDetailsContainer } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <CartItemContainer>
      <img src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
        <span className="quantity">
          <button
            className="item-buttons quantity-btn"
            onClick={() => dispatch(removeCartItem(cartItem))}
          >
            &#10094;
          </button>
          <span className="value">{quantity}</span>
          <button
            className="item-buttons quantity-btn"
            onClick={() => dispatch(addCartItem(cartItem))}
          >
            &#10095;
          </button>
        </span>
        <button className="item-buttons delete-btn">
          <Delete onClick={() => dispatch(clearItemFromCart(cartItem))} />
        </button>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default React.memo(CartItem);
