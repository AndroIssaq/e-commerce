import React from 'react'
import Grid from '@mui/material/Grid'
import Product from './Product/Product'
const Products = ({products , add}) => {
  return (
    <main>
        <div className='m-auto w-[90%] '>
            <div className='product flex  mb-[50px] gap-[20px] items-start justify-center flex-wrap'>
                {products.map(product=>{
                    return(
                        <>
                        <Product id={product.id} name={product.name} price={product.price.formatted_with_symbol
} description={product.description} image={product.image.url}/>
                        </>
                    )
                   
                })}
            </div>
        </div>
    </main>
    
  )
}

export default Products