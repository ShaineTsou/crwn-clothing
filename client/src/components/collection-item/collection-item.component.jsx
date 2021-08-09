import React from 'react';

import { useDispatch } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart.actions';

import CustomButton from '../../components/custom-button/custom-button.component';

import { CollectionItemContainer, CollectionFooterContainer } from './collection-item.styles';

const CollectionItem = ({ item }) => {
    const { name, imageUrl, price } = item;
    const dispatch = useDispatch();

    return (
        <CollectionItemContainer>
            <div 
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <CollectionFooterContainer>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </CollectionFooterContainer>
            <CustomButton inverted onClick={() => dispatch(addCartItem(item))}>Add to cart</CustomButton>
        </CollectionItemContainer>
    )
}

export default CollectionItem;