import React from 'react'
import Grid from '@mui/material/Grid'
import Product from './Product/Product'
const Products = ({products , addItemHandelr}) => {
  return (
    <main>
        <div className='m-auto w-[90%] '>
            <div className='product flex  mb-[50px] gap-[20px] items-start justify-center flex-wrap'>
            {products.map((product)=>{
                    return( 
                        
                    )
                })}
            </div>
        </div>
    </main>
    
  )
}

export default Products