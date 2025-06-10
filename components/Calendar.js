'use client'

import cld from './css/Calendar.module.css'
import { dayinMonth, formatMonthYear, formatYear, getMonthYear, getWeekDays, getYears } from '@/lib/date-utils'
import { useEffect, useMemo, useState } from 'react'




export default function Calendar() {
     const [currentDate, setCurrentDate] = useState(new Date());
     const [currentYearGroupStart, setCurrentYearGroupStart] = useState(Math.floor(currentDate.getFullYear() / 10) * 10);
     const [mode, setMode] = useState('D');
     const [holiday, setHoliday] = useState(null)
     const year = currentDate.getFullYear();
     const month = currentDate.getMonth();
     const weekDays = getWeekDays();

     const months = useMemo(() => {
          return getMonthYear(currentDate)
     }, [currentDate, mode === "M"])

     const calendar = useMemo(() => {
          return dayinMonth(year, month)
     }, [year, month])

     const years = useMemo(() => {
          return getYears(currentDate.getFullYear(), currentYearGroupStart);
     }, [currentYearGroupStart, mode === "Y"])

     const formatHearder = useMemo(() => {
          let formatM;
          if (mode === "D") {
               formatM = formatMonthYear(currentDate);
          } else if (mode === "M") {
               formatM = formatYear(currentDate)
          } else if (mode === "Y") {
               const minYear = years.reduce((prev, current) => {
                    return (prev.Year < current.Year) ? prev : current;
               })
               const maxYear = years.reduce((prev, current) => {
                    return (prev.Year > current.Year) ? prev : current;
               })

               return (`${minYear.Year} - ${maxYear.Year}`)
          }
          return (formatM);
     }, [currentDate, currentYearGroupStart, mode])

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
          setMode("D");
          setCurrentDate(new Date(year, even.currentTarget.id, 1));

     };
     const handleSelectYear = (even) => {
          setMode("M");
          const idYear = parseInt(even.currentTarget.id);
          const Year = years.find(year => year.id === idYear).Year
          setCurrentDate(new Date(Year - 543, 0, 1));

     };
     const handleNextMonth = () => {
          switch (mode) {
               case "D":
                    setCurrentDate(prevDate => {

                         const newDate = new Date(prevDate);
                         newDate.setMonth(prevDate.getMonth() + 1);
                         return newDate;
                    });

                    break;
               case "M":
                    setCurrentDate(prevDate => {
                         const nextYear = prevDate.getFullYear() + 1
                         const newDate = new Date(nextYear, 0);
                         return newDate
                    })
                    break
               case "Y":
                    setCurrentYearGroupStart(preavDate => preavDate - 10)
                    break;
          }
     };
     const handlePrevMonth = () => {
          switch (mode) {
               case "D":
                    setCurrentDate(prevDate => {
                         const newDate = new Date(prevDate);
                         newDate.setMonth(prevDate.getMonth() - 1);
                         return newDate;
                    });
                    break;
               case "M":
                    setCurrentDate(prevDate => {
                         const nextYear = prevDate.getFullYear() - 1
                         const newDate = new Date(nextYear, 0);
                         return newDate
                    })
                    break;
               case "Y":
                    setCurrentYearGroupStart(preavDate => preavDate + 10)
                    break;

          }
     };
     const isHoliday = (date)=>{
          if(date===null || holiday === null) return false;
            const holi = holiday.some(holiday =>new Date(holiday.DT).toDateString() === date.toDateString());
            return holi
     }
     useEffect(() => {
          async function fetchData() {
               try {
                    const res = await fetch('/api/holiday'); // Call your internal API route
                    if (!res.ok) {
                         throw new Error('Failed to fetch from API route');
                    }
                    const json = await res.json();
                    setHoliday(json);
               } catch (err) {
                    console.log(err)
               }
          }
          fetchData();
     }, [currentDate]);

     return (
          <div className={cld.calendar}>
               <div className={cld.header}>
                    <div className={`${cld.monthYear}`} onClick={handleHeader} id={mode}>
                         {formatHearder}
                    </div>
                    <div className={cld.header_button}>
                         <button onClick={handleNextMonth}><i className={cld.button_up}></i></button>
                         <button onClick={handlePrevMonth}><i className={cld.button_down}></i></button>
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
                              <div className={`${cld.date} ${isToday(item.Day) ? cld.active : ''} ${item.holi ||isHoliday(item.Day) ? cld.holiday : ''} ${item.ina ? cld.inactive : ''}`} key={index}>
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
               <div className={mode != 'Y' ? cld.hide : ''}>
                    <div className={cld.years}>
                         {years.map((item, index) => {
                              return (<div className={`${cld.year} ${item.act ? cld.active : ''} `} id={item.id} key={index} onClick={handleSelectYear}>{item.Year}</div>)
                         })} </div>
               </div>
          </div>

     )
}