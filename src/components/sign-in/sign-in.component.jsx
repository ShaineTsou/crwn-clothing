import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async (event) => {
        // Prevent the default submit action from firing in order for us to have full control over what exactly this submit will do.
        event.preventDefault();
        
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }


        // Clear up the email and password field once the form is submitted
        this.setState({ email: '', password: '' });
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form className='sign-in-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='email'
                        name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={ signInWithGoogle } googleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}


export default SignIn;