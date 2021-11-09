import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 10%;

  width: 280px;
  height: 0px;
  background-color: white;

  z-index: 3000;
  transition: 0.3s ease-in-out;

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
    color: gray;
  }
`;

export const CartItemsContainer = styled.div`
  display: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CartFooterContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0px 0px 7px 0px gray;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 0 15px 5px;
  text-align: center;

  padding: 10px 5px;
  /* .cart-total {
    margin: 10px 5px 5px;
    font-size: 1.5em;
  } */
`;
