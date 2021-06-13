const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// In order to leverage the Stripe library, we need to have access to the secret key stored in the .env file
// The stripe library gives back a function which expects the stripe secret key as the first argument
// Then aftering invoking this function with the secret key, it gives back a stripe object
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
});

// Whenever the client makes a get request for service worker, response with the service-worker.js file
app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'service-worker.js'))
})

// The client side will make a request with the token to this endpoint when the users completes the checkout process
// This payment endpoint will pass this body object to the Stripe library
app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    }

    // stripe.charges.create receive the body object as the first argument
    // The second one is a callback function which represents the request and the response we get back from the Stripe API
    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({ error: stripeErr })
        } else {
            res.status(200).send({ success: stripeRes })
        }
    });
});