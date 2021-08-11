import React from 'react';

import { InputGroup } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <InputGroup>
        <input 
            className='form-input'
            onChange={handleChange}
            { ...otherProps }
        />
        {
            label ? (
                <label 
                    className={`${ 
                        otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
                >
                    {label}
                </label> 
            ) : null
        }
    </InputGroup>
);

export default FormInput;