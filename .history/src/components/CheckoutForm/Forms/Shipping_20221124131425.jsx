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
                        <label htmlFor="name">First Name</label>
                        <input type="text" className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md' placeholder='Write Your Name'/>
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="name">Last Name</label>
                        <input type="text" className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md' placeholder='Write Your Last Name'/>
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="name">name</label>
                        <input type="text" className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md' placeholder='Write Your Name'/>
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="name">name</label>
                        <input type="text" className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md' placeholder='Write Your Name'/>
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="name">name</label>
                        <input type="text" className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md' placeholder='Write Your Name'/>
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="name">name</label>
                        <input type="text" className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md' placeholder='Write Your Name'/>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default Shipping