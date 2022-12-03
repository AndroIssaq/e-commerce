import React from 'react'
import CartProduct from './CartProduct'
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
                    
                    <h1 className=' text-[30px] font-bold mb-[50px] ml-[50px]'>Your Shopping Cart</h1>
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
                        <button>asdasd</button>
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