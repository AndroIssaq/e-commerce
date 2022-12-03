import React from 'react'
import {Elements,CardElement , ElementsConsumer} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Review from '../Checkout/Review'
const Payment = ({checkoutToken}) => {
  const stripePromise = loadStripe('...');
  return (
    <>
      <Review checkoutToken={checkoutToken}/>
      <h3>Pyment Method</h3>
      <Elements stripe={stripePromise} >
        <ElementsConsumer>
          {({stripe, elements}) => (
            <form className='w-[100%]'>
              <CardElement/>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  )
}

export default Payment