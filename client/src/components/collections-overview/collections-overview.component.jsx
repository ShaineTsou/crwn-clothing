import React from 'react';
import { useSelector } from 'react-redux';

import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionsOverviewStyles } from './collections-overview.styles';

const CollectionsOverview = () => {
    const collections = useSelector(selectShopCollectionsForPreview);

    return (
        <CollectionsOverviewStyles>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </CollectionsOverviewStyles>
    );
}

export default CollectionsOverview;