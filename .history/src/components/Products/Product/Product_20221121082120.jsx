import React from 'react'
import { BsCartPlus } from "react-icons/bs";
const Product = ({id,name,price,description,image , addItemHandelr}) => {
    return (
    <div className='w-[300px] h-[400px] rounded-lg overflow-hidden flex flex-col items-start p-[20px] gap-[15px] shadow-lg hover:scale-[1.1] duration-300 cursor-pointer'>
        <img src={image} alt="" className='w-[100%] h-[200px] object-contain'/>
        <div className='title flex justify-between items-center w-[100%] '>
            <h5 className=' text-orange-600'>{name}</h5>
            <h5>{price}</h5>
        </div>
           <p dangerouslySetInnerHTML={{ __html: description}} className="h-[100px]" />
        <button >
        <BsCartPlus />
        </button>
       
    </div>
    )
}

export default Product