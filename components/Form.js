'use client'
import { createCamps } from "@/utils/actions"
import { useActionState } from "react";
import { useFormState } from "react-dom";

// const SubmitButton =()=>{
//     const { pending } = useFormState()
//     return <button type="submit" disabled={pending}>
//       {pending ? 'Submitting....'  : 'Submit'}
//     </button>
// }




export default function Form(){
  const [message,fromAction] = useActionState(createCamps,null)
    return(   
    <>
    {message}
    <form action={fromAction}> 
        Form

        <input
          placeholder="Camping Name" 
          className="border"
          name="title"
          defaultValue="korat 3060"
        />

        <input
          placeholder="location"
          name="location"
          className="border"
          defaultValue="korat"
        />


          {/* <SubmitButton/> */}

    </form>
    </> 
    )

}