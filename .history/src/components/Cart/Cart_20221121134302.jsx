import React from 'react'
import CartProduct from './CartProduct'
const Cart = ({cart}) => {
    console.log(cart);

    if(cart.total_items===0){
        return  (
            <h1 className='text-[30px]'>There is No Items Yet</h1>
        )
    }else{

    }
   
}

export default Cart