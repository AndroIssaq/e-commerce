import React from 'react'
import {useForm , FormProvider} from 'react-hook-form'
import CoustomInputs from './CoustomInputs'
import { Grid } from '@mui/material'
const Shipping = () => {

    const methods=useForm()

    return (
        <>
            <h1 className='text-[25px]'>Shipping Address</h1>
                <FormProvider {...methods}>
                    
                    <form onSubmit=''>
                        <Grid></Grid>
                        <CoustomInputs name='FirstName' label='First Name' required  />
                        
                    </form>
                </FormProvider>
        </>
    )
}

export default Shipping