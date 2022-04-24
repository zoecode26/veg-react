import React, { Component } from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm"

const stripePromise = loadStripe("pk_test_51Ko3PfKGarRscSW7xuUpWGrPJMU6ieJXqqq6UZzIYFOeXzxHbGDZmoEV3JOPCtS14WWKGw6mGpltqT9hXjE9Hv9w00brzZbKi8")

class Payment extends Component {
    render() {
        return (
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        )
    }
}

export default Payment;