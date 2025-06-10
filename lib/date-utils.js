
export const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0);
};


export const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
};

function subtractOneMonth(year, month) {
    const newDate = new Date(year, month, 0);
    newDate.setMonth(newDate.getMonth() - 1);
    const newlastDate = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0)
    return newlastDate;
}
export const setDayOfMonth = (date, day) => {
    const newDate = new Date(date);
    newDate.setDate(day);
    return newDate;
}

export const dayinMonth =  (year, month) => {
    const daysInMonth = getDaysInMonth(year, month)
    const firstDay = getFirstDayOfMonth(year, month); // 0 = Sunday, 1 = Monday, ...
    const lastDay = subtractOneMonth(year, month);
    const days = [];
    let ind = 1;

    // Add leading empty cells for days before the 1st of the month
    for (let i = firstDay; i > 0; i--) {
        const preDay = { "id": ind, "Day": setDayOfMonth(lastDay, lastDay.getDate() - (i - 1)), "holi": false, "ina": true }
        days.push(preDay)
        ind = ind + 1;
    }

    // Add actual days of the month
    for (let i = 1; i <= daysInMonth.getDate(); i++) {
        const holiday = setDayOfMonth(daysInMonth, i).getDay() === 0;
        const dayInmonth = { "id": ind, "Day": setDayOfMonth(daysInMonth, i), "holi": holiday, "ina": false };
        days.push(dayInmonth);
        ind = ind + 1;
    }
    for (let i = 1; i <= 6 - daysInMonth.getDay(); i++) {

        const nextDate = { "id": ind, "Day": new Date(year, month + 1, i), "holi": false, "ina": true };
        days.push(nextDate);
        ind = ind + 1;
    }

    return { "header": formatMonthYear(new Date(year, month, 1)), "day": days };

};

export const formatMonthYear = (date) => {
    return date.toLocaleString('th-TH', { month: 'long', year: 'numeric' });
};
export const formatYear = (date) => {
    return date.toLocaleString('th-TH', { year: 'numeric' });
};


export const getWeekDays = () => {
    return [
        {
            "id": 0,
            "day": 'อาทิตย์',
            "holi": true
        }
        , {
            "id": 1,
            "day": 'จันทร์',
            "holi": false
        },
        {
            "id": 2,
            "day": 'อังคาร',
            "holi": false
        }
        , {
            "id": 3,
            "day": 'พุธ',
            "holi": false
        }
        , {
            "id": 4,
            "day": 'พฤหัส',
            "holi": false
        }
        , {
            "id": 5,
            "day": 'ศุกร์',
            "holi": false
        }
        , {
            "id": 6,
            "day": 'เสาร์',
            "holi": false
        }];
};
export const getMonthYear = (date) => {
    const numYear = new Date(date).getFullYear()
    const monthYear = [];
    for (let i = 0; i < 12; i++) {
        const activeYear = numYear === new Date().getFullYear()
        const activeMonth = activeYear && i === new Date().getMonth()
        monthYear.push({ "id": i, "month": new Date(numYear, i, 1).toLocaleString('th-TH', { month: 'long' }), "act": activeMonth })
    }
    return monthYear
}
export const getYears = (initialYear,YearGroupStart) => {

    const selectedYear = initialYear;
    const years = [];
    for (let i = 0; i < 16; i++) { // แสดงประมาณ 12 ปี
        const year = YearGroupStart + 543 + i;
        years.push({ "id": i, "Year": year, "act": selectedYear === YearGroupStart + i });
    }
    return years

}