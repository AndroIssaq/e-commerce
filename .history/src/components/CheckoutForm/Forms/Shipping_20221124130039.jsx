import React from 'react'
import {useForm,FormProvider}from 'react-hook-form'
const Shipping = () => {
    const methods=useForm()
    return (
        <>
            <h1 className='text-[25px]'>Shipping Address</h1>
            <FormProvider {...methods}>
                <form className='flex flex-wrap items-center justify-center'>
                    <div>
                        <label htmlFor="name">name</label>
                        <input type="text" className=' outline'/>
                    </div>
                    <div>
                        <label htmlFor="name">name</label>
                        <input type="text" className=' outline'/>
                    </div>
                    <div>
                        <label htmlFor="name">name</label>
                        <input type="text" className=' outline'/>
                    </div>
                    <div>
                        <label htmlFor="name">name</label>
                        <input type="text" className=' outline'/>
                    </div>
                    <div>
                        <label htmlFor="name">name</label>
                        <input type="text" className=' outline'/>
                    </div>
                    <div>
                        <label htmlFor="name">name</label>
                        <input type="text" className=' outline'/>
                    </div>
                    
                </form>
            </FormProvider>
        </>
    )
}

export default Shipping