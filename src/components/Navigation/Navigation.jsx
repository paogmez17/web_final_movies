import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `nav__link ${isActive ? "nav__link_active" : ""}`
        }
      >
        Inicio
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `nav__link ${isActive ? "nav__link_active" : ""}`
        }
      >
        Sobre el proyecto
      </NavLink>
    </nav>
  );
}

export default Navigation;
