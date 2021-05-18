import { ShopActionTypes } from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isCollectionsFetching: false,
    errorMessage: undefined
};

const shopReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isCollectionsFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isCollectionsFetching: false,
                collections: action.payload
            };
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isCollectionsFetching: false,
                errorMessage: action.payload
            };
        default: 
            return state;
    }
}

export default shopReducer;