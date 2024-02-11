import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const activeLink = "text-blue-500 font-bold";
  const inactiveLink = "text-gray-500 hover:font-bold";

  return (
  <>
    {/* <Link>
      fisrtfskladjf
    </Link> */}
      <nav>
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