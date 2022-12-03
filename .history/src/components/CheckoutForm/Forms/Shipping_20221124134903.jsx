import React from 'react'
import {useForm,FormProvider}from 'react-hook-form'
import {useFormik} from  'formik'
const Shipping = () => {
    const methods=useForm()
    // formic logic
    const formik=useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            Address1:'',
            Email:'',
            Zip:'',
            City:'',

        }
    })
    return (
        <>
            <h1 className='text-[25px]'>Shipping Address</h1>
            <FormProvider {...methods}>
                <form className='flex flex-wrap items-center justify-center gap-[20px]'>
                    <div className='flex flex-col '>
                        <label htmlFor="name">First Name</label>
                        <input type="text" onChange={formik.h} value={formik.values.firstname} className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md'/>
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="name">Last Name</label>
                        <input type="text" value={formik.values.lastname} className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="name">Address1</label>
                        <input type="text" value={formik.values.Address1} className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="name">Email</label>
                        <input type="text" value={formik.values.Email} className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="name">City</label>
                        <input type="text" value={formik.values.City} className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="name">Zip/Post Code</label>
                        <input type="text" value={formik.values.Zip} className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md' />
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default Shipping