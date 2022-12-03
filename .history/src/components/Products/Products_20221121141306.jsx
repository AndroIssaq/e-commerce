import React from 'react'
import Grid from '@mui/material/Grid'
import Product from './Product/Product'
const Products = ({products , additem}) => {
  return (
    <main>
        <div className='m-auto w-[90%] '>
            <div className='product flex  mb-[50px] gap-[20px] items-start justify-center flex-wrap'>
            { Array.from(products).map(product=>{
                    return(
                        <>
                        <Product id={product.id} name={product.name} price={product.price.formatted_with_symbol
                            } description={product.description} image={product.image.url} product={product} additem={additem} />
                        </>
                    )
                   
                })}
            </div>
        </div>
    </main>
    
  )
}

export default Products


