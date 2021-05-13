import React from 'react';

import './custom-button.styles.scss';

// Presentational Component (i.e. functional component with no state)
const CustomButton = ({ children, googleSignIn, inverted, ...otherProps }) => (
    <button 
        className={`
            ${inverted ? 'inverted' : ''}
            ${googleSignIn ? 'google-sign-in' : ''}
            custom-button
        `} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;