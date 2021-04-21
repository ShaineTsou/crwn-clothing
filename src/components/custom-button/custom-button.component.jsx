import React from 'react';

import './custom-button.styles.scss';

// Presentational Component (i.e. functional component with no state)
const CustomButton = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
)

export default CustomButton;