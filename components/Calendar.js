'use client'
import { updateCalendar } from '@/utils/calenda'
import cld from './css/Calendar.module.css'

export default function Calenda() {
    const data = updateCalendar();
    // console.log(data)
    return(
       
       <div className={cld.calendar}>
            <div className={cld.header}> 
               {/* <button id='prevBtn' >
                    <i className={cld.left}></i>
               </button> */}
               {/* <div className={cld.monthYear} id='monthYear'>{data}</div> */}
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
                <div className={cld.day}>อาทิตย์</div>
            </div>
            <div className={cld.dates} id='dates'></div>
       </div>
      
    )
}