import React from 'react'
import {useForm,FormProvider}from 'react-hook-form'
const Shipping = () => {
    const methods=useForm()
    return (
        <>
            <h1 className='text-[25px]'>Shipping Address</h1>
            <FormProvider {...methods}>
                <form >
                    <input type="text" />
                </form>
            </FormProvider>
        </>
    )
}

export default Shipping