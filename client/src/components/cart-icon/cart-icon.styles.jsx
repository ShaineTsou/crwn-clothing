import styled from 'styled-components';

import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ShoppingIcon = styled(Icon)`
    width: 24px;
    height: 24px;
`;

export const ItemCountStyles = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    font-family: sans-serif;
    bottom: 12px;
`;