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
  {
    "id": 1,
    "title": "Business Systems Development Analyst",
  },
  {
    "id": 2,
    "title": "VP Quality Control",
  },
  {
    "id": 3,
    "title": "Statistician III",
  },
  {
    "id": 4,
    "title": "Recruiting Manager",
  },
  {
    "id": 5,
    "title": "Programmer Analyst I",
  }
];
    return camp;
}