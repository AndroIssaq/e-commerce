import React from 'react'
import CartProduct from './CartProduct'
const Cart = ({cart}) => {
  return (
    <main>
       
        <div className='m-auto w-[90%] '>
            <h1 className=' text-[30px] font-bold mb-[50px] ml-[50px]'>Your Shopping Cart</h1>
            <div className='product flex  mb-[50px] gap-[20px] items-start justify-center flex-wrap'>
                
                <CartProduct cart={cart}/>
            </div>
        </div>
    </main>
  )
}

export default Cart