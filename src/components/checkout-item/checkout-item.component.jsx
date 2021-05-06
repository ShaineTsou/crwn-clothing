import React from 'react';
import { connect } from 'react-redux';

import { addCartItem, removeItem, clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, addCartItem, removeItem, clearItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addCartItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addCartItem: cartItem => dispatch(addCartItem(cartItem)),
    removeItem: cartItem => dispatch(removeItem(cartItem)),
    clearItem: cartItem => dispatch(clearItemFromCart(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);