import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './FormInput';
import { commerce } from './../../../lib/commerce';
import { object } from 'yup';
const Shipping = ({checkoutToken}) => {
    const methods=useForm()
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState('')
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState('')
    // to get countries data
    const fetchCountries= async (checkoutTokenId)=>{
    const {countries}= await commerce.services.localeListShippingCountries(checkoutTokenId)
        setShippingCountries(countries)
        setShippingCountry(Object.keys(countries)[0])
    } 
    // to get Subdevitions data
    const fetchSubdevitions= async (countrycode)=>{
        const {subdivisions}= await commerce.services.localeListSubdivisions(countrycode)
        setShippingSubdivisions(subdivisions)
        setShippingSubdivision(Object.keys(subdivisions)[0])
    }

    // to get Options 
    
    useEffect(()=>{
        fetchCountries(checkoutToken.id)
    },[])

    useEffect(()=>{
        if(shippingCountry) fetchSubdevitions(shippingCountry)
    },[shippingCountry])

    const countries=Object.entries(shippingCountries).map(([code,name])=>({id:code,label:name}))
    const subdivisions=Object.entries(shippingSubdivisions).map(([code,name])=>({id:code,label:name}))
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
                            <Select  fullWidth value={shippingCountry}  onChange={(e)=>setShippingCountry(e.target.value)}>
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
                            <Select  fullWidth value={shippingSubdivision}  onChange={(e)=>setShippingSubdivision(e.target.value)}>
                                {
                                    subdivisions.map(subdivision=>{
                                        return(
                                            <MenuItem key={subdivision.id} value={subdivision.id} >
                                                {subdivision.label}
                                            </MenuItem>
                                        )
                                    })
                                }
                            
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