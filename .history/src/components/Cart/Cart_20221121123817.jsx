import React from 'react'
import CartProduct from './CartProduct'
const Cart = () => {
  return (
    <main>
        <h1>Your </h1>
        <div className='m-auto w-[90%] '>
            <div className='product flex  mb-[50px] gap-[20px] items-start justify-center flex-wrap'>
                <CartProduct />
            </div>
        </div>
    </main>
  )
}

export default Cart