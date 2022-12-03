import React from 'react'

const Cart = () => {
  return (
    <main>
        <div className='m-auto w-[90%] '>
            <div className='product flex  mb-[50px] gap-[20px] items-start justify-center flex-wrap'>
            { Array.from(products).map(product=>{
                    return(
                      <h1></h1>
                       
                    )
                   
                })}
            </div>
        </div>
    </main>
  )
}

export default Cart