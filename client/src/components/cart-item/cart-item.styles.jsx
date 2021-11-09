import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 85px;
  border: 1px solid rgb(230, 230, 230);

  img {
    width: 25%;
  }
`;

export const ItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 70%;
  padding: 10px 20px;

  .name {
    font-size: 1.2em;
  }
`;
