import Calenda from "@/components/Calendar";
import sty from "./Time.module.css"
export default async function Page() {

  return (
  
      <div className={sty.calendar}>
      <Calenda/>
      </div>
     
   
  )
}