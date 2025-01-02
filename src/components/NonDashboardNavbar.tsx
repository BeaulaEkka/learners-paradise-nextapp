import { Bell, BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";


const NonDashboardNavbar = () => {
  return (
    <nav className="nondashboard-navbar">
      <div className="nondashboard-navbar__container ">
        <Link
          href="/"
          className="nondashboard-navbar__brand uppercase tracking-wide"
        >
          Learners Paradise
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Link href="/search" className="nondashboard-navbar__search-input">
              <span className="hidden sm:inline">Search courses</span>
              <span className="sm:hidden">Search</span>
            </Link>
            <BookOpen className="nondashboard-navbar__search-icon" size={18} />
          </div>
        </div>
      </div>
      <div className="nondashboard-navbar__actions">
        <button className="nondashboard-navbar__notification-button">
          <span className="nondashboard-navbar__notifications-indicator"></span>
          <Bell className="nondashboard-navbar__notification-icon" />
        </button>
        {/* sign in button */}
      </div>
    </nav>
  );
};

export default NonDashboardNavbar;
