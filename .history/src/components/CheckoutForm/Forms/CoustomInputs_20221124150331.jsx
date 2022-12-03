import React from 'react'
import { TextField,Grid } from '@mui/material'
import {useFormContext , Controller} from 'react-hook-form'
const CoustomInputs = (name,label,required) => {
    const {control}=useFormContext()
  return (
    <>
    <Grid
        <Controller 
            as={ TextField}
            control={control}
            name={name}
            required={required}
            label={label}
        />
    </>
  )
}

export default CoustomInputs