'use client'

import cld from './css/Calendar.module.css'
import { dayinMonth, formatMonthYear, formatYear, getMonthYear, getWeekDays } from '@/lib/date-utils'
import { useMemo, useState } from 'react'




export default function Calendar() {
     const [currentDate, setCurrentDate] = useState(new Date());
     const [mode, setMode] = useState('D');

     const year = currentDate.getFullYear();
     const month = currentDate.getMonth();
     const weekDays = getWeekDays();

     const months = useMemo(() => {
          return getMonthYear(currentDate)
     }, [currentDate])

     const calendar = useMemo(() => {
          return dayinMonth(year, month)
     }, [year, month])

     const formatHearder = useMemo(() => {
          let formatM;
          if (mode === "D") {
               formatM = formatMonthYear(currentDate);
          } else {
               formatM = formatYear(currentDate)
          }
          return (formatM);
     }, [currentDate, mode])

     const today = new Date();
     const isToday = (day) => {
          const CalendarDate = new Date(day)
          return (CalendarDate.toDateString() === new Date().toDateString());
     };

     const handleHeader = () => {
          if (mode === "D") {
               setMode("M")
          }
          else if (mode === "M") {
               setMode("Y")
          }
     };
     const handleSelectMonth = (even) => {
          setCurrentDate(new Date(year,even.currentTarget.id,1));
          setMode("D");
          // setCurrentDate();
     };
     return (
          <div className={cld.calendar}>
               <div className={cld.header}>

                    <div className={`${cld.monthYear}`} onClick={handleHeader} id={mode}>
                         {formatHearder}
                    </div>
                    <div className={cld.header_button}>
                         <button ><i className={cld.button_up}></i></button>
                         <button ><i className={cld.button_down}></i></button>
                    </div>
               </div>
               <div className={mode != 'D' ? cld.hide : ''}>
                    <div className={cld.days}>
                         {weekDays.map((item, index) => (
                              <div key={index} className={`${cld.day} ${item.holi ? cld.holiday : ''}`}>{item.day}</div>
                         ))}
                    </div>
                    <div className={cld.dates}>
                         {calendar.day.map((item, index) => (
                              <div className={`${cld.date} ${isToday(item.Day) ? cld.active : ''} ${item.holi ? cld.holiday : ''} ${item.ina?cld.inactive:''}`} key={index}>
                                   {item.Day.getDate()}
                              </div>
                         ))}
                    </div>
               </div >
               <div className={mode != 'M' ? cld.hide : ''}>

                    <div className={cld.months}>
                         {months.map((item, index) => {
                              return (<div className={`${cld.month} ${item.act ? cld.active : ''} `} id={item.id} key={index} onClick={handleSelectMonth} >{item.month}</div>)
                         })}
                    </div>
               </div>
          </div>

     )
}