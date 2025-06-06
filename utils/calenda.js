'use client'


export const updateCalendar =  ( modeSelect= "D" ,currentDate = "" ) => {
    
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const firstDay = new Date(currentYear, currentMonth, 0);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    const day = [];
    let ind = 1;


    let monthYearDiv = {};

    if (modeSelect === "D") {
        monthYearDiv = {
            id: "monthYear",
            monthYearString: currentDate.toLocaleString('th-TH', { month: 'long', year: 'numeric' })
        }
        for (let i = firstDayIndex; i > 0; i--) {
            const preDay = { id: ind, Day: new Date(currentYear, currentMonth, 0 - i + 1).getDate(), act: false, ina: true };
            day.push(preDay);
            ind = ind + 1;
        }
        for (let i = 1; i <= totalDays; i++) {
            const date = new Date(currentYear, currentMonth, i);

            const preDay = { id: ind, Day: date.getDate(), act: date.toDateString() === new Date().toDateString() ? true : false, ina: false };
            day.push(preDay);
            ind = ind + 1;
        }
        for (let i = 1; i <= 7 - lastDayIndex; i++) {
            const nextDate = new Date(currentYear, currentMonth + 1, i);
            const nextDay = { id: ind, Day: nextDate.getDate(), act: false, ina: true }
            day.push(nextDay)
        }
    }
    else if (modeSelect === "M") {
        monthYearDiv = {
            id: "years",
            monthYearString: currentDate.toLocaleString('th-TH', { year: 'numeric' })
        }
        for( ind =0 ;ind<12;ind++){
            const date = new Date(currentYear,ind,1);
            day.push({
                index:ind,
                month: date.toLocaleString('th-TH',{month:'long'}),
                act: currentDate.getMonth() === date.getMonth()
            })
        }
    }

    const days = {
        monthYear: monthYearDiv,
        daycalendar: day
    }

     return day;

}


