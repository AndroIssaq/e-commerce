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

    console.log(shippingOptions);
    // to get Options 
    const fetchShippingOptions=async(checkoutTokenId,country,region=null)=>{
        const options= await commerce.checkout.getShippingOptions(checkoutTokenId,{country,region})
        setShippingOptions(options)
        setShippingOption(options[0])
    }
    useEffect(()=>{
        fetchCountries(checkoutToken.id)
    },[])

    useEffect(()=>{
        if(shippingCountry) fetchSubdevitions(shippingCountry)
    },[shippingCountry])

    useEffect(()=>{
        if(shippingSubdivision) fetchShippingOptions(checkoutToken.id,shippingCountry , shippingSubdivision)
    },[shippingSubdivision])

    const countries=Object.entries(shippingCountries).map(([code,name])=>({id:code,label:name}))
    const subdivisions=Object.entries(shippingSubdivisions).map(([code,name])=>({id:code,label:name}))
    return (
        <>
        <div className='flex items-center justify-center flex-col gap-[20px]'>
            <Typography variant="h6"  gutterBottom>Shipping address</Typography>
            <FormProvider {...methods}>
                <form className='flex items-center justify-center flex-wrap w-100% ml-[0]' >
                    <Grid container spacing={2} >
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
                            <Select  fullWidth value={shippingOption} onChange={(e)=>setShippingOption(e.target.value)}>
                                {
                                    shippingOptions.map(option=>{
                                        return(
                                            <MenuItem value={shippingOption}  key={option.id}>
                                                {`${option.description} - ( ${option.price.formatted_with_symbol} )`}
                                            </MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </Grid>
                    </Grid>
                    <br/>
                    <div  className='w-[100%] flex justify-between items-center px-[40px] gap-[20px]'>
                        <button className='w-[120px] h-[35px] mt-[30px] rounded-md text-white bg-orange-400'>back to cart</button>
                    <button className=' w-[120px] h-[35px] mt-[30px] rounded-md text-white bg-blue-700'>Next</button>
                    </div>
                </form>
    </FormProvider>
    </div>
        </>
    )
}

export default Shipping