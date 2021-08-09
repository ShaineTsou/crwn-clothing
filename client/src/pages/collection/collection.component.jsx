import React from 'react';
import { connect } from 'react-redux';

import { selectShopCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { CollectionPageStyles, ItemsContainer } from './collection.styles';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageStyles>
            <h2 className='title'>{title}</h2>
            <ItemsContainer>
                {
                    items.map(
                        item => <CollectionItem key={item.id} item={item} />
                    )
                }
            </ItemsContainer>
        </CollectionPageStyles>
    );
}


const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

