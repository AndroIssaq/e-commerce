import React from 'react'
import {Elements,CardElement , ElementsConsumer} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Review from '../Checkout/Review'
const Payment = ({checkoutToken}) => {
  return (
    <>
      <Review checkoutToken={checkoutToken}/>
      <h3>Pyment Method</h3>
      <Elements stripe={stripePromise} >
        <ElementsConsumer>
        {({stripe, elements}) => (
          <CheckoutForm stripe={stripe} elements={elements} />
        )}
    </ElementsConsumer>
      </Elements>
    </>
  )
}

export default Payment