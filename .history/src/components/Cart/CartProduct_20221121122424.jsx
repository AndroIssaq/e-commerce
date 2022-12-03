import React from 'react'

const CartProduct = () => {
  return (
    <div className='w-[300px] h-[400px] rounded-lg overflow-hidden flex flex-col items-start p-[20px] gap-[15px] shadow-lg hover:scale-[1.1] duration-300 cursor-pointer'>
        <img src='' alt="" className='w-[100%] h-[200px] object-contain'/>
        <div className='title flex justify-between items-center w-[100%] '>
            <h5 className=' text-orange-600'>sdfsdfdsf</h5>
            <h5>sdfsdfdf</h5>
        </div>
            <p className="h-[100px]"> </p>
            <div className="btns">
                <div className="quantty">
                    <button>-</button> <span>5</span> <button>+</button>
                </div>

                <button>remove</button>
            </div>
      
    </div>
  )
}

export default CartProduct