import React from 'react';

import { CartItemContainer, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: { name, imageUrl, price, quantity }}) => (
    <CartItemContainer>
        <img src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} &times; ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default React.memo(CartItem);