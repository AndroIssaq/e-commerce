import React from 'react'
import {useForm , FormProvider} from 'react-hook-form'
const Shipping = () => {

    const methods=useForm()

    return (
        <>
            <h1 className='text-[25px]'>Shipping Address</h1>
                <FormProvider {}>
                    <form className='flex flex-wrap items-center justify-center gap-[20px]'>
                        <div className='flex flex-col '>
                            <label htmlFor="name">First Name</label>
                            <input type="text" 
                            name='name'
                            className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md'/>
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="name">Last Name</label>
                            <input type="text"   className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="name">Address1</label>
                            <input type="text"  className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="name">Email</label>
                            <input type="text"  className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="name">City</label>
                            <input type="text"  className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="name">Zip/Post Code</label>
                            <input type="text" className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md' />
                        </div>
                    </form>
                </FormProvider>
        </>
    )
}

export default Shipping