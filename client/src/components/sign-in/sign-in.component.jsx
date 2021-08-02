import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart  } from '../../redux/user/user.actions';

import { SignInContainer, SignInTitle, ButtonContainer } from './sign-in.styles';

const SignIn = () => {
    const dispatch = useDispatch();
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        // Prevent the default submit action from firing in order for us to have full control over what exactly this submit will do.
        event.preventDefault();      
        dispatch(emailSignInStart({ email, password }))
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form className='sign-in-form' onSubmit={handleSubmit}>
                <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    handleChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <ButtonContainer>
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                    <CustomButton 
                        type='button' 
                        onClick={() => dispatch(googleSignInStart())} 
                        googleSignIn
                    >
                        Sign in with Google
                    </CustomButton>
                </ButtonContainer>
            </form>
        </SignInContainer>
    );
}

export default SignIn;