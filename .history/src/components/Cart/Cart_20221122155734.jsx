import React from 'react'
import CartProduct from './CartProduct'
const Cart = ({cart , HandleEmptyCart, removeCartProduct,updateCartProductQuantity}) => {
    const isEmpty=true
    
            const EmptyCart=()=>{
                <h1 className='text-[30px]'>There is No Items Yet</h1>
            }

            const FilledCart=()=>{
            <main>
                <div className='m-auto w-[90%] '>
                    <h1 className=' text-[30px] font-bold mb-[50px] ml-[50px]'>Your Shopping Cart</h1>
                    <div className='product flex  mb-[50px] gap-[20px] items-start justify-center flex-wrap'>
                        {
                            cart.line_items?.map(item=>{
                                console.log(item.id);
                                return (
                                    <CartProduct cartItemImage={item.image.url} cartItemName={item.name} cartItemPrice={item.price.formatted_with_symbol} itemQuantity={item.quantity}   productid={item.id}updateCartProductQuantity={updateCartProductQuantity} removeCartProduct={removeCartProduct} HandleEmptyCart={HandleEmptyCart} key={item.id}/>
                                            
                                        )
                            })

                        }
                    </div>
                </div>
            </main>
        }

        return(
            {isEmpty?EmptyCart :}
        )
}

export default Cart