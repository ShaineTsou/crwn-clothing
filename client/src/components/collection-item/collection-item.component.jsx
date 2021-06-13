import React from 'react';

import { useDispatch } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart.actions';

import CustomButton from '../../components/custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
    const { name, imageUrl, price } = item;
    const dispatch = useDispatch();

    return (
        <div className='collection-item'>
            <div 
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={() => dispatch(addCartItem(item))}>Add to cart</CustomButton>
        </div>
    )
}

export default CollectionItem;