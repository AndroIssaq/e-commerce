import React from 'react'
import { useState } from 'react'
import './Checkout.css'
export const Checkout = () => {
    const steps=['Shipping Address' , 'Payment Details']
    const [currentStep,setCurrentStep]=useState(1)
    return (
        <main className=' flex items-center justify-center'>
            <div className="box  sm:w-[600px] md:w-[600px] w-[300px] h-[200px] shadow-md rounded-md flex flex-col gap-[20px] items-center p-[20px]">
                <h1 className=' text-[30px] mt-[30px]'>Checkout</h1>
                <div className="progress flex items-center justify-center gap-[50px] flex-wrap ">
                    {steps?.map((step,i)=>{
                        return(
                            <div key={i} className="shipping flex items-center gap-[10px] active ">
                                <div className='step w-[25px] h-[25px]  rounded-full shadow-md flex items-center justify-center'><p>{i+1}</p></div> 
                                <h1 className='t'>{step}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
