import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewContainer, CollectionPreviewTitle, PreviewStyles } from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => {
    return (
        <CollectionPreviewContainer>
            <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
            <PreviewStyles>
                {items
                    .filter((item, idx) => idx < 4)
                    .map( item => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </PreviewStyles>
        </CollectionPreviewContainer>
    )
}

export default CollectionPreview;