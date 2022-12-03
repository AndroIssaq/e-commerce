import React from 'react'

const Review = ({checkoutToken}) => {
  console.log(checkoutToken);
  return (
    <>
      <h1 className='text-[30px]'>Order Summary</h1>
        {
          checkoutToken.line_items.map(product=>{
            console.log(product);
            return(
                <div className='product-summary flex items-center justify-between w-[100%] px-[40px] pb'>
                <div className="name">
                  <h3 className='text-[20px] font-bold'>{product.name}</h3>
                  <p className='text-[15px] text-slate-700'>Quantity:{product.quantity}</p>
                </div>
                <div className="price"><h3>{product.line_total.formatted_with_symbol}</h3></div>
              </div>
            )
            
          })
        }

        <div className="total flex w-[100%] justify-between items-center px-[40px]">
          <h1 className='text-[20px] font-bold'>Total</h1>
          <p>{checkoutToken.total.formatted_with_symbol}</p>
        </div>
    </>
  )
}

export default Review