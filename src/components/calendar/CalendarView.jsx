// import React from "react";
// import CalendarEventCard from "./CalendarEventCard";

// function CalendarView() {
//   const events = [
//     { title: "Workshop", date: "20 Nov", department: "CSE" },
//     { title: "Bootcamp", date: "5 Dec", department: "ISE" },
//     { title: "Hackathon", date: "10 Jan", department: "ECE" },
//   ];

//   return (
//     <div className="grid md:grid-cols-3 gap-4">
//       {events.map((event, index) => (
//         <CalendarEventCard key={index} {...event} />
//       ))}
//     </div>
//   );
// }

// export default CalendarView;
// import React from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";

// function CalendarView() {
//   const events = [
//     {
//       title: "Entrepreneurship Workshop",
//       date: "2025-11-20",
//     },
//     {
//       title: "Design Thinking Bootcamp",
//       date: "2025-12-05",
//     },
//     {
//       title: "Startup Ideathon",
//       date: "2026-01-12",
//     },
//   ];

//   return (
//     <div className="bg-white p-6 rounded-lg shadow">
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         headerToolbar={{
//           left: "prev,next today",
//           center: "title",
//           right: "dayGridMonth,timeGridWeek,timeGridDay",
//         }}
//         events={events}
//         height="auto"
//       />
//     </div>
//   );
// }

// export default CalendarView;
// import React, { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";

// import { parseExcel } from "../../utils/excelParser";

// function CalendarView() {
//   const [events, setEvents] = useState([]);

//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];

//     const data = await parseExcel(file);

//     // Map Excel fields → Calendar format
//     const formattedEvents = data.map((item) => ({
//       title: item.Activity || "Event",
//       date: formatDate(item["Planned Date of Event"]),
//       color: getStatusColor(item.Status),
//     }));

//     setEvents(formattedEvents);
//   };

//   // Convert Excel date formats
//   const formatDate = (date) => {
//     if (!date) return "";

//     const d = new Date(date);
//     return d.toISOString().split("T")[0];
//   };

//   // Color coding
//   const getStatusColor = (status) => {
//     if (!status) return "#2563eb";

//     if (status.toLowerCase().includes("completed")) return "#16a34a";
//     if (status.toLowerCase().includes("planned")) return "#9333ea";

//     return "#2563eb";
//   };

//   return (
//     <div className="space-y-6">
//       {/* Upload Excel */}

//       <div className="bg-white p-4 rounded shadow">
//         <h2 className="font-semibold mb-2">Upload Event Excel Sheet</h2>

//         <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
//       </div>

//       {/* Calendar */}

//       <div className="bg-white p-6 rounded shadow">
//         <FullCalendar
//           plugins={[dayGridPlugin, interactionPlugin]}
//           initialView="dayGridMonth"
//           events={events}
//           height="auto"
//         />
//       </div>
//     </div>
//   );
// }

// export default CalendarView;
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useNavigate } from "react-router-dom";
import { parseExcel } from "../../utils/excelParser";

function CalendarView() {
  const navigate = useNavigate();

  // DEFAULT EVENTS (so UI is never empty)
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Innovation Workshop",
      date: "2025-11-20",
      extendedProps: {
        department: "CSE",
        status: "Completed",
        description: "Workshop on innovation and entrepreneurship",
      },
      color: "#16a34a",
    },
    {
      id: "2",
      title: "Startup Bootcamp",
      date: "2025-12-05",
      extendedProps: {
        department: "ISE",
        status: "Planned",
        description: "Startup learning program",
      },
      color: "#9333ea",
    },
  ]);

  // FORMAT DATE
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  };

  // COLOR BASED ON STATUS
  const getStatusColor = (status) => {
    if (!status) return "#2563eb";
    if (status.toLowerCase().includes("completed")) return "#16a34a";
    if (status.toLowerCase().includes("planned")) return "#9333ea";
    return "#2563eb";
  };

  // EXCEL UPLOAD
  const handleFileUpload = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;

      const data = await parseExcel(file);

      if (!data || data.length === 0) {
        alert("Excel file is empty or invalid");
        return;
      }

      const formattedEvents = data.map((item, index) => ({
        id: index.toString(),
        title: item.Activity || "Event",
        date: formatDate(item["Planned Date of Event"]),
        extendedProps: {
          department: item.Department || "N/A",
          description: item.Description || "No description",
          status: item.Status || "Planned",
        },
        color: getStatusColor(item.Status),
      }));

      setEvents(formattedEvents);
    } catch (err) {
      console.error(err);
      alert("Error reading Excel file");
    }
  };

  return (
    <div className="space-y-6">
      {/* Upload */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2 text-blue-700">
          Upload Event Excel Sheet
        </h2>

        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="border p-2 rounded"
        />
      </div>

      {/* Calendar */}
      <div className="bg-white p-6 rounded shadow">
        {events.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No events yet. Upload an Excel file to display events.
          </div>
        ) : (
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            height="auto"
            eventClick={(info) => {
              const event = info.event;

              navigate(`/events/details/${event.id}`, {
                state: {
                  title: event.title,
                  date: event.startStr,
                  ...event.extendedProps,
                },
              });
            }}
          />
        )}
      </div>
    </div>
  );
}

export default CalendarView;
