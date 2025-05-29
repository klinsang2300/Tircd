import { fetchCamp } from "@/utils/actions"

export default async function CamplistPage(){

    const camps = await fetchCamp();
    console.log(camps)
return(

<>
<h1>data</h1>
    {camps.map((item,index)=>{
         return  <li id={index}>{item} </li> 
    })
    }
</>

)
    





}