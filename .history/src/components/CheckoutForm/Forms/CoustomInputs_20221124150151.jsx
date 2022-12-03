import React from 'react'
import { TextField } from '@mui/material'
import {useFormContext , Controller} from 'react-hook-form'
const CoustomInputs = (name,label,required) => {
    const {control}=useFormContext()
  return (
    <>
        <Controller 
            as={ }
            control={control}
            name={name}
            required={required}
            label={label}
        />
    </>
  )
}

export default CoustomInputs