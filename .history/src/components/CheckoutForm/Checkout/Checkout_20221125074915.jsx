import React from 'react'
import { useState,useEffect } from 'react'
import './Checkout.css'
import Shipping from '../Forms/Shipping'
import Payment from '../Forms/Payment'
import { commerce } from '../../../lib/commerce'
export const Checkout = () => {
    const steps=['Shipping Address' , 'Payment Details']
    const [currentStep,setCurrentStep]=useState(1)

    const Form=()=> currentStep===1 ? <Shipping /> : <Payment />
    const Confirmation=()=>{
        return (
            <div>Confirmation</div>
        )
    }

    useEffect(() => {
    
    }, [third])
    
    return (
        <main className=' flex items-center justify-center'>
            <div className="box  sm:w-[600px] md:w-[600px] w-[300px]  shadow-md rounded-md flex flex-col gap-[20px] items-center p-[20px]">
                <h1 className=' text-[30px] mt-[30px]'>Checkout</h1>
                <div className="progress mb-[30px] flex items-center justify-center gap-[50px] flex-wrap ">
                    {steps?.map((step,i)=>{
                        return(
                            <div key={i} className={`shipping flex items-center gap-[10px] ${currentStep===i+1  && 'active' || currentStep===3 && 'active' }  `}>
                                <div className='step  text-white w-[25px] h-[25px]  rounded-full shadow-md bg-slate-600 flex items-center justify-center'><p>{i+1}</p></div> 
                                <h1 >{step}</h1>
                            </div>
                        )
                    })}
                </div>
                {
                    currentStep===steps.length+1? <Confirmation />: <Form/> 
                }
                    

            </div>
        </main>
    )
}
