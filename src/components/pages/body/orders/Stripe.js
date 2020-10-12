/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { loadStripe } from "@stripe/stripe-js";
import { stripeRequest } from "../../../../api/orders";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
    "pk_test_51HbAonE4JzAJB7t2WQMWh4r46COAv7GS6dnPm1LAGf1UR9LYabm990wvALqxbhFRgwNkY4GLc95kOYz232zu5qck00i1MiPwBT"
);

export const Stripe = () => {
    const handleClick = async (event) => {
        // Get Stripe.js instance
        const stripe = await stripePromise;

        // Call your backend to create the Checkout Session
        const response = await stripeRequest();
        console.log("the raw response ", response);
        const session = await response;

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            console.error(result.error);
        }
    };

    return (
        <button role="link" onClick={handleClick}>
            Proceed to Payment
        </button>
    );
};

export const stripeConnection = async () => {
    console.log("getting to stripe function");
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await stripeRequest();
    console.log("the raw response ", response);
    const session = await response;

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
        sessionId: session.id,
    });

    if (result.error) {
        console.error(result.error);
    }
};
