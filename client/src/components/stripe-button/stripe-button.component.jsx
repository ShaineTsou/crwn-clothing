import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

// Stripe processes prices in cents
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IpZyrInMmVzIPA6DZ1cBynqv4nZuDPb0ZOO6pV1t0r0xXX8uzOSHF3bw5bxGh8eBpWI7oIb3aw7bdYrSNM0EYGh00qgBFdE1p';

    // Whenever the user completes the checkout process successfully, StripeCheckout will give back a token which will be passed to the /payment route of the backend and used to make a charge to Stripe
    // The token has all of the information that the user just filled out, e.g. credit card, cost, and everything we need to make a charge to Stripe
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then(response => {
                alert('Payment successful')
            })
            .catch(error => {
                console.log('Payment error: ', JSON.parse(error));
                alert(
                    'There was an issue with your payment. Please make sure you use the provided payment credit card'
                );
            })
    };

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