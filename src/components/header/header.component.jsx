import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartDropdownHidden } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { 
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionStyles
} from './header.styles';

// import './header.styles.scss';

const Header = ({ currentUser, dropdownHidden }) => (
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
                    <OptionStyles as='div' onClick={() => auth.signOut()}>
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

export default connect(mapStateToProps)(Header);