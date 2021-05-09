import React from 'react';
import { connect } from 'react-redux';

import { selectShopCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => (
    <div className='collection-page'>
        <h2>Collection Page</h2>
        {
            collection.items.map(
                item => <CollectionItem key={item.id} item={item} />
            )
        }
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

