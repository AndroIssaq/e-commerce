import React from 'react'
import { useState,useEffect } from 'react'
import './Checkout.css'
import Shipping from '../Forms/Shipping'
import Payment from '../Forms/Payment'
import { commerce } from '../../../lib/commerce'
export const Checkout = ({cart}) => {
    const steps=['Shipping Address' , 'Payment Details']
    const [currentStep,setCurrentStep]=useState(1)
    const [checkoutToken, setcheCkoutToken] = useState(null)
    const [sippingData,setShippingData]=useState({})
    const Form=()=> currentStep===1 ? checkoutToken && <Shipping  setCurrentStep={setCurrentStep}checkoutToken={checkoutToken} currentStep={currentStep}/> : <Payment />
    const Confirmation=()=>{
        return (
            <div>Confirmation</div>
        )
    }

    useEffect(() => {
        const generateToken= async ()=>{
            try {
                const token=await commerce.checkout.generateToken(cart.id , {type:'cart'})
                setcheCkoutToken(token)
                console.log(token);
            } catch (error) {
                
            }
        }
        generateToken()
    }, [cart])
    
    const nextStep=()=>setCurrentStep(prev=>prev+1)
    const backStep=()=>setCurrentStep(prev=>prev-1)
    const next=(data)=>{
        setShippingData(data)
        
    }
    return (
        <main className=' flex items-center justify-center'>
            <div className="box  sm:w-[600px] md:w-[600px] w-[400px]  shadow-md rounded-md flex flex-col gap-[20px] items-center p-[20px]">
                <h1 className=' text-[30px] mt-[30px]'>Checkout</h1>
                <div className="progress mb-[30px] flex items-center justify-center gap-[50px]  ">
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
