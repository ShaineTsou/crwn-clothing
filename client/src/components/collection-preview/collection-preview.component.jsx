import React from "react";
import { withRouter } from "react-router";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  PreviewStyles,
} from "./collection-preview.styles";

const CollectionPreview = ({ routeName, title, items, history, match }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle
        onClick={() => history.push(`${match.url}/${routeName}`)}
      >
        {title.toUpperCase()}
      </CollectionPreviewTitle>
      <PreviewStyles>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewStyles>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
