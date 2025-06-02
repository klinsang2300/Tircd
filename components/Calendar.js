'use client'
import { updateCalendar } from '@/utils/calenda'
import cld from './css/Calendar.module.css'

export default function Calenda() {
    const data = updateCalendar();
    return(
       
       <div className={cld.calendar}>
            <div className={cld.header}> 
               {/* <button id='prevBtn' >
                    <i className={cld.left}></i>
               </button> */}
               <div  id='monthYear'>{data.monthYear}</div>
               {/* <button id='nextBtn' >
                    <i className={cld.right}></i>
               </button> */}
            </div>
            <div className={cld.days}>
                <div className={cld.day}>จันทร์</div>
                <div className={cld.day}>อังคาร</div>
                <div className={cld.day}>พุธ</div>
                <div className={cld.day}>พฤหัส</div>
                <div className={cld.day}>ศุกร์</div>
                <div className={cld.day}>เสาร์</div>
                <div className={`${cld.day} ${cld.holiday}`}>อาทิตย์</div>
            </div>
            <div className={cld.dates}>
            {data.daycalendar.map((item,index)=>{
               const holi = item.id %7===0?cld.holiday :'';
                    return (
                         
                    <div  className={`${cld.date} ${item.act? cld.active:''} ${item.ina?cld.inactive:''} ${holi}`} key={index}>{item.Day}</div>)
            })}
            </div>
       </div>
      
    )
}