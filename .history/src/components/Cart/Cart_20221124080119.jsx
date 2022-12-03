import React from 'react'
import CartProduct from './CartProduct'
import { Link } from 'react-router-dom';
const Cart = ({cart , HandleEmptyCart, removeCartProduct,updateCartProductQuantity}) => {
            const isEmpty= !cart.total_items
                console.log(cart);
            const EmptyCart=()=>{
                return(
                    <h1 className='text-[45px] ml-[150px]'>There is No Items </h1>
                )
                
            }

            if (!cart.line_items)  return <h1 className='text-[45px] ml-[150px]'>Loading...</h1>
            const FilledCart=()=>{
                return(
            <main>
                <div className='m-auto w-[90%] '>
                    <div className="heading flex items-center justify-between mb-[50px]">
                    <h1 className=' text-[30px] font-bold  ml-[50px]'>Your Shopping Cart</h1>

                    <div className="cart-andle flex items-center gap-[40px]">
                    <button onClick={()=>HandleEmptyCart()} className=' w-[100px] h-[30px] bg-red-500 rounded-xl hover:bg-red-400 transition duration-300  text-slate-50'>Clear Cart</button>
                    <Link <button  className=' w-[100px] h-[30px] bg-lime-500 rounded-xl hover:bg-lime-400 transition duration-300  text-slate-50'>Checkout</button>
                    </div>

                    </div>
                    
                    <div className='product flex  mb-[50px] gap-[20px] items-start justify-center flex-wrap'>
                        {
                            cart.line_items?.map(item=>{
                                console.log(item);
                                return (
                                    <CartProduct cartItemImage={item.image.url} cartItemName={item.name} cartItemPrice={item.line_total.formatted_with_symbol} itemQuantity={item.quantity}   productid={item.id}updateCartProductQuantity={updateCartProductQuantity} removeCartProduct={removeCartProduct} HandleEmptyCart={HandleEmptyCart} key={item.id}/>
                                            
                                        )
                            })

                        }
                            
                        </div>
                        
                </div>
            </main>
        
                )
            
            }
        return(
            <>
                {isEmpty ? <EmptyCart /> : <FilledCart/>}
            </>
        )

        Cart.propTypes = {
    cart: PropTypes.object,
    onEmptyCart: () => {},
};
}

export default Cart