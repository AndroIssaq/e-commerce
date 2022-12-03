import React from 'react'

const Review = ({checkoutToken}) => {
  console.log(checkoutToken);
  return (
    <>
      <h1 className='text-[30px]'>Order Summary</h1>
        {
          checkoutToken.line_items?.map(product=>{
              
          })
        }
      
    </>
  )
}

export default Review