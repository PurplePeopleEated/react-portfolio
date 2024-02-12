import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const activeLink = "text-white font-bold";
  const inactiveLink = "text-slate-900 hover:font-bold";

  return (
  <>
    <Link to="/" className="text-lg font-semibold">
      Karra Maynard
    </Link>
      <nav className="flex space-x-4">
        <Link to="/" className={location.pathname === "/" ? activeLink : inactiveLink}>
        About Me
        </Link>

        <Link to="/projects" className={location.pathname === "/projects" ? activeLink : inactiveLink}>
        Projects
        </Link>

        <Link to="/contact" className={location.pathname === "/contact" ? activeLink : inactiveLink}>
        Contact
        </Link>
      </nav>
  </>
  );
}

export default Navigation;