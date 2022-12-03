import React from 'react'
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';
const CoustomInputs = ({name,label,required}) => {
    const {control}=useFormContext()
  return (
    <>
    <Grid>
        <Controller 
            as={ TextField}
            control={control}
            name={name}
            required={required}
            label={label}
        />
    </Grid>
    </>
  )
}

export default CoustomInputs