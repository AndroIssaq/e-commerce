import React from 'react'

const Review = ({checkoutToken}) => {
  console.log(checkoutToken);
  return (
    <>
      <h1 className='text-[30px]'>Order Summary</h1>

      <div>
        <div className="name"></div>
      </div>
    </>
  )
}

export default Review