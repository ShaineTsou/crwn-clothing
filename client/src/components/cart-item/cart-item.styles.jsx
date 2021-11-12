import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  border: 1px solid rgb(230, 230, 230);

  img {
    width: 80px;
  }
`;

export const ItemDetailsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 70%;
  padding: 10px;

  .value {
    margin: 10px;
  }

  .item-buttons {
    padding: 5px 8px;
    background-color: transparent;
    border-radius: 100%;
    border: 1px solid silver;
    margin-top: 5px;
    cursor: pointer;

    &:hover {
      box-shadow: 1px 1px 3px gray;
    }
  }

  .delete-btn {
    position: absolute;
    right: 0px;
    bottom: 10px;
    padding: 1px 3px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
