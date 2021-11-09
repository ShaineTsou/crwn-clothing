import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled(Link)`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(Icon)`
  width: 30px;
  height: 30px;
`;

export const ItemCountStyles = styled.span`
  position: absolute;
  bottom: 10px;
  font-size: 13px;
  font-weight: 700;
  font-weight: bold;
  font-family: sans-serif;
`;
