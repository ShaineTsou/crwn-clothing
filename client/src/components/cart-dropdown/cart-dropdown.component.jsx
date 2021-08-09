import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItemsContainer } from './cart-dropdown.styles';

const CartDropdown = ({ history }) => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                    ) : (
                        <span className='empty-message'>Your cart is empty!</span>
                    )
                }
            </CartItemsContainer>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>Go to Checkout</CustomButton>
        </CartDropdownContainer>
    )
};

export default withRouter(CartDropdown);