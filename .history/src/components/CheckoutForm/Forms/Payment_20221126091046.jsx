import React from 'react'
import {Elements,CardElement , ElementsConsumer} from '@stripe/react-stripe-js'
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import Review from '../Checkout/Review'
const Payment = ({checkoutToken,backStep}) => {
  const stripePromise = loadStripe(import.meta.env.VITE_PUPLIC_KEY_STRIPE);
  const stripe = useStripe();
  const elements = useElements();

  
  return (
    <>
      <Review checkoutToken={checkoutToken}/>
      <h3>Pyment Method</h3>
      <Elements stripe={stripePromise} >
        <ElementsConsumer>
          {({stripe, elements}) => (
            <form className='w-[100%] m-[20px] px-[20px]' >
              <CardElement/>
              <br/> <br/>
              <div className="buttons w-[100%] flex justify-between items-center px-[40px] gap-[20px]">
                <button className='w-[120px] h-[35px] mt-[30px] rounded-md text-white bg-orange-400' onClick={backStep}>back</button>
                <button disabled={!stripe} className='w-[120px] h-[35px] mt-[30px] rounded-md text-white bg-blue-700'>pay: {checkoutToken.total.formatted_with_symbol}</button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  )
}

export default Payment