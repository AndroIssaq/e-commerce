import React from 'react'
import {useForm,FormProvider}from 'react-hook-form'
const Shipping = () => {
    const methods=useForm()
    return (
        <>
            <h1 className='text-[25px]'>Shipping Address</h1>
            <FormProvider {...methods}>
                <form className='flex flex-wrap items-center justify-center gap-[20px]'>
                    <div className='flex flex-col '>
                        <label htmlFor="name">name</label>
                        <input type="text" className=' outline-1 outline p-[2px] text-[10px] w rounded-md' placeholder='Write Your Name'/>
                    </div>
                    
                </form>
            </FormProvider>
        </>
    )
}

export default Shipping