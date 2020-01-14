import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends React.Component {
  onToken = (token, addresses) => {
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.
  };

  render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_5uDfh0YByS1TRY15TqdFAKqN00Dy9ivW4e"
        amount="500"
        billingAddress
        description="Checkout"
        label="Buy"
        token={this.onToken}
      />
    )
  }
}