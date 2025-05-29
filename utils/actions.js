'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/dist/server/api-utils"

export const createCamps = async(prevState ,formData) =>{
    // const title = formData.get('title')
    // const localtion = formData.get('location')
    const rawData = Object.fromEntries(formData)
    console.log(rawData)
    revalidatePath('/camp')
    // redirect('/')
    return 'Create camp success!!!'
}

export const fetchCamp = async()=>{
    const camp = [
        {id:1 , title: 'Korat'},
        {id:2 , title: 'สระบุรี'},
        {id:3 , title: 'นครนายก'},
    ]
    return camp;
}