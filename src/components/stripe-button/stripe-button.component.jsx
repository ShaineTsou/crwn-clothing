import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// Stripe processes prices in cents
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IpZyrInMmVzIPA6DZ1cBynqv4nZuDPb0ZOO6pV1t0r0xXX8uzOSHF3bw5bxGh8eBpWI7oIb3aw7bdYrSNM0EYGh00qgBFdE1p';

    // The token is the on success callback that triggers when we submit. Then the token will be passed to the backend and creates the charge
    // We aren't goint to process the payment, so onToken is just going to be a function that takes the token and then logs it out
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='OWL Clothing Co.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;