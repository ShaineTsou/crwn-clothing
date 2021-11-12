import styled from "styled-components";

export const CartContainer = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    &:hover {
      .cart-dropdown {
        display: block;
        height: 400px;
        padding: 5px 10px;
        box-shadow: 0px 1px 7px 0px gray;

        .cart-items {
          display: flex;
        }

        .cart-footer {
          display: flex;
        }
      }
    }
  }
`;
