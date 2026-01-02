import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarSection = () => {
  const [date, setDate] = useState(new Date());
  const today = new Date(); // اليوم الحالي

  return (
    <section id="calendar" className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Calendar</h2>
      <Calendar
        onChange={setDate}
        value={date}
        selectRange={true} // لتحديد فترة
        minDate={today} // منع اختيار الأيام الماضية
      />
      <p className="mt-2 text-sm text-gray-500">
        Selected:{" "}
        {Array.isArray(date)
          ? `${date[0].toDateString()} - ${date[1]?.toDateString()}`
          : date.toDateString()}
      </p>
    </section>
  );
};

export default CalendarSection;
