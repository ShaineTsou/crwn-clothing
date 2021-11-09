import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import Cart from "../cart/cart.component";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionStyles,
} from "./header.styles";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionStyles to="/shop">SHOP</OptionStyles>
        <OptionStyles to="/contact">CONTACT</OptionStyles>
        {currentUser ? (
          <OptionStyles as="div" onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </OptionStyles>
        ) : (
          <OptionStyles to="/signin">SIGN IN</OptionStyles>
        )}
        <Cart />
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
