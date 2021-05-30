import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ history }) => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                    ) : (
                        <span className='empty-message'>Your cart is empty!</span>
                    )
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>Go to Checkout</CustomButton>
        </div>
    )
};

export default withRouter(CartDropdown);