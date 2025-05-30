import { fetchCamp } from "@/utils/actions"

export default async function CamplistPage(){

    const data = await fetchCamp();
    console.log(data)
return(
<>
    {data.map(camp=>{
        return <li key={camp.id} >{camp.title}</li>
    })}

</>

)
    





}