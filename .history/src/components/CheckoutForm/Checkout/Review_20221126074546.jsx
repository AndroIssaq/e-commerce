import React from 'react'

const Review = ({checkoutToken}) => {
  console.log(checkoutToken);
  return (
    <>
      <h1 className='text-[30px]'>Order Summary</h1>
        {
          checkoutToken.line_items?.map(product=>{
            return(
                <div className='product-summary flex items-center justify-between w-[100%] p-[40px]'>
                <div className="name">
                  <h3 className='text-[20px] font-bold'>{product.name}</h3>
                  <p className='text-[15px] text-slate-700'>Quantity:{product.quantity}</p>
                </div>
                <div className="price"><h3>30$</h3></div>
              </div>
            )
            
          })
        }
      
    </>
  )
}

export default Review