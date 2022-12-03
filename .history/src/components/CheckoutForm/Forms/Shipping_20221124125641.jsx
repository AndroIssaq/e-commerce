import React from 'react'
import {useForm,FormProvider}from 'react-hook-form'
const Shipping = () => {
    const methods=useForm()
    return (
        <>
            <h1 className='text-[25px]'>Shipping Address</h1>
            <FormProvider {...methods}>
                <form >
                    <div>

                        <input type="text" />
                    </div>
                    
                </form>
            </FormProvider>
        </>
    )
}

export default Shipping