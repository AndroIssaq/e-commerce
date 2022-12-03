import React from 'react'

const CartProduct = ({cartItemImage,cartItemName,cartItemPrice,itemQuantity , HandleEmptyCart , removeCartProduct ,updateCartProductQuantity}) => {
    return (
    <div className='w-[300px] h-[400px] rounded-lg overflow-hidden flex flex-col items-start p-[20px] gap-[15px] shadow-lg hover:scale-[1.1] duration-300 cursor-pointer'>
        <img src={cartItemImage} alt="" className='w-[100%] h-[200px] object-contain'/>
        <div className='title flex justify-between items-center w-[100%] '>
            <h5 className=' text-orange-600'>{cartItemName}</h5>
            <h5>{cartItemPrice}</h5>
        </div>
            <div className="btns flex items-center justify-between w-[100%]">
                <div className="quantty flex items-center gap-[10px]">
                    <button onClick={()=>updateCartProductQuantity(itemQuantity)} className='text-[25px] w-[30px] h-[30px] bg-slate-300 rounded-sm  hover:scale-[1.1] transition duration-300'>-</button> <span>{itemQuantity}</span> <button className='text-[25px] w-[30px] h-[30px] bg-slate-300 rounded-sm hover:scale-[1.1] transition duration-300'>+</button>
                </div>
                <button className=' w-[100px] h-[30px] bg-red-500 rounded-xl hover:bg-red-400 transition duration-300  text-slate-50'>remove</button>
            </div>
    </div>
    )
}

export default CartProduct