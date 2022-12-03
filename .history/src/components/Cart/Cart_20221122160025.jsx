import React from 'react'
import CartProduct from './CartProduct'
const Cart = ({cart , HandleEmptyCart, removeCartProduct,updateCartProductQuantity}) => {
            const isEmpty=false
    
            const EmptyCart=()=>{
                <h1 className='text-[30px]'>There is No Items Yet</h1>
            }

            const FilledCart=()=>{
                return(

                )
            

        return(
            <>
                {isEmpty ? <EmptyCart /> : <FilledCart/>}
            </>
        )
}

export default Cart