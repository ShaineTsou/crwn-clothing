import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

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

const Header = ({ currentUser, dropdownHidden, signOutStart }) => (
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
                    <OptionStyles as='div' onClick={signOutStart}>
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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    dropdownHidden: selectCartDropdownHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);