import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './FormInput';
import { commerce } from './../../../lib/commerce';
import { object } from 'yup';
const Shipping = ({checkoutToken}) => {
    const methods=useForm()
    const [shippingCountries, setShippingCountries] = useState([])
    const [shhippingCountry, setShippingCountry] = useState('')
    const [shippingSubdevitions, setShippingSubdevitions] = useState([])
    const [shippingSubdevition, setShippingSubdevition] = useState('')
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState('')
    // to get countries data
    const fetchCountries= async (checkoutTokenId)=>{
        const {countries}= await commerce.services.localeListShippingCountries(checkoutTokenId)
        setShippingCountries(countries)
        setShippingCountry(Object.keys(countries)[0])
    } 

    const fetchSubdevisions= async (countrycode)=>{
        const {subdevisions}= await commerce.services.localeListSubdivisions(countrycode)
        setShippingSubdevitions(subdevitions)
    }

    useEffect(()=>{
        fetchCountries(checkoutToken.id)
    },[])

    const countries=Object.entries(shippingCountries).map(([code,name])=>({id:code,label:name}))
    console.log(countries);
    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping address</Typography>
            <FormProvider {...methods}>
                <form >
                    <Grid container spacing={3}>
                        <FormInput required name="firstName" label="First name" />
                        <FormInput required name="lastName" label="Last name" />
                        <FormInput required name="address1" label="Address line 1" />
                        <FormInput required name="email" label="Email" />
                        <FormInput required name="city" label="City" />
                        <FormInput required name="zip" label="Zip / Postal code" />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select  fullWidth value={shhippingCountry}  onChange={(e)=>setShippingCountry(e.target.value)}>
                                {
                                    countries.map(country=>{
                                        return(
                                            <MenuItem key={country.id} value={country.id} >
                                                {country.label}
                                            </MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdevision</InputLabel>
                            <Select  fullWidth >
                          
                            
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select  fullWidth >
                            <MenuItem >
                                selectme
                            </MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </form>
    </FormProvider>
        </>
    )
}

export default Shipping