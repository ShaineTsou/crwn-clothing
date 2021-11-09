import styled from "styled-components";

export const SignInContainer = styled.div`
  margin: 20px 0;
  width: 45%;
  display: flex;
  flex-direction: column;

  button {
    min-width: unset;
    padding: 0 20px;
  }

  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
