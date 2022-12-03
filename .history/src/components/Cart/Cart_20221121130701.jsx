import React from 'react'
import CartProduct from './CartProduct'
const Cart = ({cart}) => {
    const cartItems=cart.line_items
    const arr=[1,2,3,4]
    
    
    console.log( typeof(arr));
    return (
    <main>
        <div className='m-auto w-[90%] '>
            <h1 className=' text-[30px] font-bold mb-[50px] ml-[50px]'>Your Shopping Cart</h1>
            <div className='product flex  mb-[50px] gap-[20px] items-start justify-center flex-wrap'>
                {cartItems.map((item)=>{
                    console.log();
                })}
                        <CartProduct />
                    
            </div>
        </div>
    </main>
    )
}

export default Cart