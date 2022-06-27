import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styledComponents from "styled-components";
import { NavBar } from "./NavBarClientPanel.Styled";

export const NavBarClientPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavBar
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="panelContainer">
        {/* <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div> */}
        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              // activeClassName="is-active"
              to="/"
            >
              <button type="button" value="Home">
                Home
              </button>
            </NavLink>
            <NavLink
              className="navbar-item"
              // activeClassName="is-active"
              to="/messages"
            >
              <button
                type="button"
                value="Wiadomości"
                styles={{ fontSize: "12px", border: "1px, solid, black" }}
              >
                Wiadomości
              </button>
            </NavLink>
            <NavLink
              className="navbar-item"
              // activeClassName="is-active"
              to="/mypanel"
            >
              <button type="button" value="Mój Panel">
                Mój Panel
              </button>
            </NavLink>
            <NavLink
              className="navbar-item"
              // activeClassName="is-active"
              to="/addoffer"
            >
              <button type="button" value="Dodaj ogłoszenie">
                Dodaj ogłoszenie
              </button>
            </NavLink>
            {/* <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons"> */}
            {/* <a className="button is-white">Wyloguj</a> */}
            {/* </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </NavBar>
  );
};
