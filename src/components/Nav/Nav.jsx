import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { NavBar } from "./NavBar.Styled";
import { AuthStyled } from "./isAuth.Styled";
import { SearchBar } from "../SearchOffers/SearchBar/SearchBar";
import { useEffect } from "react";
import logo from "./logo/logo.ico";
import Burger from "./Burger";
import { useState } from "react";

export const Navigation = ({ isAuth, email, flatsFromDb, setFlats, setFavourites, flats, setIsLanding, isLanding }) => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <NavBar isOpen={open} className="navbar is-primary">
        <div className="mainBar" >
          <div className="logoContainer">
            <img className="logo" src={logo}></img>
          </div>
          <div className="headerContainer">
            <h2>Najemnicy</h2>
          </div>
          <ul className="homeLink">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="o-nas">O Nas</NavLink>
            </li>
            <li>
              <NavLink to="kontakt">Kontakt</NavLink>
            </li>
          </ul>
        </div>
        <Burger open={open} setOpen={setOpen} />
        <div>
          {!isLanding &&
            <SearchBar
              flatsFromDb={flatsFromDb}
              setFlats={setFlats}
              setFavourites={setFavourites}
              flats={flats}
              isLanding={isLanding}
            />}
        </div>

        <div className="logBar">
          <ul className="logLink">
            {!isAuth && (
              <>
                <li>
                  <NavLink to="auth/register">Rejestracja</NavLink>
                </li>
                <li>
                  <NavLink to="auth/login">Logowanie</NavLink>
                </li>
              </>
            )}

            {isAuth && (
              <>
                <li>
                  <NavLink to="mypanel">Mój panel</NavLink>
                </li>
                <li>
                  <NavLink to="messages">Wiadomości</NavLink>
                </li>
                <li>
                  <NavLink to="addoffer">Dodaj ogłoszenie</NavLink>
                </li>
                <li onClick={() => signOut(auth)}>
                  <NavLink to="/">Wyloguj się</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </NavBar>

      {email && (
        <AuthStyled>
          <p className="auth">
            Jesteś zalogowany pod adresem:
            <a href="mailto:" target="_blank">
              {email}
            </a>
          </p>
        </AuthStyled>
      )}
    </>
  );
};
