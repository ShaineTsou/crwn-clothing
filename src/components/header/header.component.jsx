import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartDropdownHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { 
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionStyles
} from './header.styles';

const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const dropdownHidden = useSelector(selectCartDropdownHidden);
    const dispatch = useDispatch();

    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionStyles to='/shop'>
                    SHOP
                </OptionStyles>
                <OptionStyles to='/contact'>
                    CONTACT
                </OptionStyles>
                {
                    currentUser ? (
                        <OptionStyles as='div' onClick={() => dispatch(signOutStart())}>
                            SIGN OUT
                        </OptionStyles>
                    ) : (
                        <OptionStyles to='/signin'>
                            SIGN IN
                        </OptionStyles>
                    )
                }
                <CartIcon />
            </OptionsContainer>
            { dropdownHidden ? null : <CartDropdown /> }
        </HeaderContainer>
    )
}

export default Header;