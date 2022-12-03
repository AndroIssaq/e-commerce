import React from 'react'
import CartProduct from './CartProduct'
const Cart = ({cart , HandleEmptyCart, removeCartProduct,updateCartProductQuantity}) => {

    if(cart.total_items===0){
            const EmptyCart=()=>{
                <h1 className='text-[30px]'>There is No Items Yet</h1>
            }
            const FilledCart=()=>{

            }
          
        
    }else{
        return (
    
    )
    }
   
}

export default Cart