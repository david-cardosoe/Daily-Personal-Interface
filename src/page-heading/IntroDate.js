import React from 'react'
import { useState, useEffect } from 'react';

const IntroDate = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const [today, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1 * 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    const day = today.getDate();
    const month = today.getMonth();
    const dayOfWeek = today.getDay();
    const year = today.getFullYear();

    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

    const time = `Current Local Time is ${(today.getHours() === 0 && 12) || (today.getHours() > 12 && today.getHours() - 12) || today.getHours()}:${(today.getMinutes() < 10 && '0' + today.getMinutes()) || today.getMinutes()} ${(hour < 12 && 'am') || 'pm'}`;

  return (
    <div>
        <h1>{wish} David Cardoso</h1>
        <h5 className='mt-4 font-styling'> Today is {daysOfWeek[dayOfWeek]} {months[month]} {day}th, {year}</h5>
        <h5 className='mt-4 font-styling'>{time}</h5>
    </div>
  )
}

export default IntroDate