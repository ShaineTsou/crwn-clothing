import React from 'react';

import './custom-button.styles.scss';

// Presentational Component (i.e. functional component with no state)
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;