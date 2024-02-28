import React, { useState, useEffect } from 'react';


function CalendarGrid() {
  const [cal, setCal] = useState([]);

  useEffect(() => {
    getCal();
  }, []);

  const getCal = async () => {
    try {
      const response = await fetch(
        "https://leetcode-api-faisalshohag.vercel.app/kronocodes"
      );
      const data = await response.json();
      console.log("Data from API:", data); // Log the data received from the API
      setCal(data.submissionCalendar);
    } catch (error) {
      console.error("Error fetching calendar data:", error);
    }
  };

  const getLast365Days = () => {
    const today = new Date();
    const days = [];

    for (let i = 0; i < 365; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      days.push(date);
    }

    return days.reverse();
  };

  const groupByWeek = (days) => {
    const weeks = [];
    let currentWeek = [];

    days.forEach((day) => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });

    // If there are remaining days, add them as another week
    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return weeks;
  };

  const days = getLast365Days();
  const weeks = groupByWeek(days);
  console.log("Cal State:", cal); // Log the entire cal state for debugging


  // console.log("Cal:", cal); // Log the cal state for debugging

  return (
    <div className="calendar-grid">
      {weeks.map((week, weekIndex) => (
        <div key={weekIndex} className="week">
          {week.map((day, dayIndex) => {
            const timestamp = Math.floor(day.getTime() / 1000); // Convert date to UNIX timestamp
            const value = cal[timestamp] || ''; // Get value from API data or set empty string if not available
            console.log("Date:", day.toISOString(), "Value:", value); // Log the date and corresponding value
            return (
              <div key={dayIndex} className="day">
                {value}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default CalendarGrid;
