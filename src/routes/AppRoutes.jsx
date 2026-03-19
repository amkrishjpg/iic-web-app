import React from "react";
import { Routes, Route } from "react-router-dom";
import EventDetailsPage from "../pages/Events/EventDetailsPage";
import Incubation from "../pages/Incubation/Incubation";

import Home from "../pages/Home/Home";
import IICOverview from "../pages/IIC/IICOverview";
import Members from "../pages/Members/Members";
import IECell from "../pages/IECell/IECell";

import IPRCell from "../pages/IPRCell/IPRCell";
import IPRCellMembers from "../pages/IPRCell/IPRCellMembers";
import KSCSTIPCellReport from "../pages/IPRCell/KSCSTIPCellReport";

import FacultyStartups from "../pages/Startups/FacultyStartups";
import StudentStartups from "../pages/Startups/StudentStartups";

import MentorMentee from "../pages/MentorMentee/MentorMentee";
import Achievements from "../pages/Achievements/Achievements";

import Events from "../pages/Events/Events";
import EventCalendar from "../pages/Events/EventCalendar";
import FacultyAllocation from "../pages/Events/FacultyAllocation";
import EventArchive from "../pages/Events/EventArchive";

import GenerateReport from "../pages/Reports/GenerateReport";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/iic" element={<IICOverview />} />

      <Route path="/members" element={<Members />} />

      <Route path="/ie-cell" element={<IECell />} />

      <Route path="/ipr-cell" element={<IPRCell />} />
      <Route path="/ipr-members" element={<IPRCellMembers />} />
      <Route path="/ipr-reports" element={<KSCSTIPCellReport />} />

      <Route path="/faculty-startups" element={<FacultyStartups />} />
      <Route path="/student-startups" element={<StudentStartups />} />

      <Route path="/mentor-mentee" element={<MentorMentee />} />

      <Route path="/achievements" element={<Achievements />} />

      <Route path="/events" element={<Events />} />
      <Route path="/events/calendar" element={<EventCalendar />} />
      <Route
        path="/events/faculty-allocation"
        element={<FacultyAllocation />}
      />
      <Route path="/events/archive" element={<EventArchive />} />

      <Route path="/generate-report" element={<GenerateReport />} />
      <Route path="/events/calendar" element={<EventCalendar />} />
      <Route path="/events/details/:id" element={<EventDetailsPage />} />
      <Route path="/incubation" element={<Incubation />} />
    </Routes>
  );
}

export default AppRoutes;
