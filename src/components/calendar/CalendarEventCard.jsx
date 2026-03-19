import React from "react";

function CalendarEventCard({ title, date, department }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md">
      <h3 className="font-semibold">{title}</h3>

      <p className="text-gray-600 text-sm">{department}</p>

      <p className="text-gray-500 text-sm">{date}</p>
    </div>
  );
}

export default CalendarEventCard;
