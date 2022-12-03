import React from 'react'
import {Elements,CardElement , ElementsConsumer} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Review from '../Checkout/Review'
const Payment = ({checkoutToken}) => {
  return (
    <>
      <Review checkoutToken={checkoutToken}/>
      <h3></h3>
    </>
  )
}

export default Payment