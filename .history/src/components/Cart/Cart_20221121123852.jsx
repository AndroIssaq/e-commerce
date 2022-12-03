import React from 'react'
import CartProduct from './CartProduct'
const Cart = () => {
  return (
    <main>
       
        <div className='m-auto w-[90%] '>
        <h1 className=' text-[]'>Your Shopping Cart</h1>
            <div className='product flex  mb-[50px] gap-[20px] items-start justify-center flex-wrap'>
                <CartProduct />
            </div>
        </div>
    </main>
  )
}

export default Cart