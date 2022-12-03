import React from 'react'
import {useFormContext , Controller} from 'react-hook-form'
const CoustomInputs = () => {
    const {control}=useFormContext()
  return (
    <>
        <Controller 
            as={ 
            <div className='flex flex-col '>
                <label htmlFor="name">First Name</label>
                <input type="text" 
                name='name'
                className='border-gray-500 border-2  p-[2px] pl-[10px] text-[15px] w-[200px] rounded-md'/>
            </div>}
            control={control}
            name={name}
            req
        />
    </>
  )
}

export default CoustomInputs