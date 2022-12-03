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
            <form className='w-[100%] m-[20px] px-[20px]'>
              <CardElement/>
              <br/> <br/>
              <div className="buttons">
                <button className='w-[120px] h-[35px] mt-[30px] rounded-md text-white bg-orange-400' onClick={}></button>
                <button className='w-[120px] h-[35px] mt-[30px] rounded-md text-white bg-blue-700'>pay:{checkoutToken.total.formatted_with_symbol}</button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  )
}

export default Payment