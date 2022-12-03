import React from 'react'

const CartProduct = () => {
  return (
    <div className='w-[300px] h-[400px] rounded-lg overflow-hidden flex flex-col items-start p-[20px] gap-[15px] shadow-lg hover:scale-[1.1] duration-300 cursor-pointer'>
        <img src={image} alt="" className='w-[100%] h-[200px] object-contain'/>
        <div className='title flex justify-between items-center w-[100%] '>
            <h5 className=' text-orange-600'></h5>
            <h5>{price}</h5>
        </div>
            <p dangerouslySetInnerHTML={{ __html: description}} className="h-[100px]" />
        <button onClick={()=>additem(product.id,1)}>
        <BsCartPlus />
        </button>
    </div>
  )
}

export default CartProduct