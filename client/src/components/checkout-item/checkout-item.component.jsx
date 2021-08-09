import React from 'react';
import { useDispatch } from 'react-redux';

import { addCartItem, removeCartItem, clearItemFromCart } from '../../redux/cart/cart.actions';

import { CheckoutItemContainter, ImageContainer } from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;
    const dispatch = useDispatch();

    return(
        <CheckoutItemContainter>
            <ImageContainer>
                <img alt='item' src={imageUrl}/>
            </ImageContainer>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => dispatch(removeCartItem(cartItem))}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => dispatch(addCartItem(cartItem))}>&#10095;</div>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => dispatch(clearItemFromCart(cartItem))}>&#10005;</div>
        </CheckoutItemContainter>
    )
}

export default CheckoutItem;