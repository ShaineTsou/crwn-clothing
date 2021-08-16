import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
    width: 70%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    .total {
      margin-top: 30px;
      margin-left: auto;
      font-size: 36px;
    }

    button {
      margin-left: auto;
      margin-top: 30px;
    }

    .test-warning {
      text-align: center;
      margin-top: 40px;
      font-size: 22px;
      color: red
    }

    @media screen and (max-width: 800px) {
      width: 90%;
      .total {
        margin-top: 20px;
        font-size: 25px;
      }

      .test-warning {
        font-size: 16px;
      }

      .header-block {
        font-size: 14px;
      }
    }
`;

export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    .header-block {
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
    }
`;