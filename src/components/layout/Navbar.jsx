import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* LOGO / HOME */}
        <Link to="/" className="text-2xl font-bold text-blue-700 tracking-wide">
          CMRIT IIC
        </Link>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link className="hover:text-blue-700 transition" to="/">
            Home
          </Link>

          <Link className="hover:text-blue-700 transition" to="/ie-cell">
            I&E Cell
          </Link>

          <Link className="hover:text-blue-700 transition" to="/members">
            Members
          </Link>

          {/* IPR DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("ipr")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span className="cursor-pointer hover:text-blue-700">
              Patents ▾
            </span>

            {openMenu === "ipr" && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg p-3 space-y-2">
                <Link to="/ipr-cell" className="block hover:text-blue-700">
                  Overview
                </Link>

                <Link to="/ipr-members" className="block hover:text-blue-700">
                  Members
                </Link>

                <Link to="/ipr-reports" className="block hover:text-blue-700">
                  Reports
                </Link>
              </div>
            )}
          </div>

          {/* STARTUPS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("startups")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span className="cursor-pointer hover:text-blue-700">
              Startups ▾
            </span>

            {openMenu === "startups" && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg p-3 space-y-2">
                <Link
                  to="/faculty-startups"
                  className="block hover:text-blue-700"
                >
                  Faculty Startups
                </Link>

                <Link
                  to="/student-startups"
                  className="block hover:text-blue-700"
                >
                  Student Startups
                </Link>
              </div>
            )}
          </div>

          <Link className="hover:text-blue-700 transition" to="/achievements">
            Achievements
          </Link>

          <Link className="hover:text-blue-700 transition" to="/events">
            Events
          </Link>

          <Link className="hover:text-blue-700 transition" to="/incubation">
            Incubation
          </Link>

          <Link className="hover:text-blue-700 transition" to="/events/archive">
            Archive
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
