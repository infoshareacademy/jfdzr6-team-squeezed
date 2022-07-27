import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { NavBar } from "./NavBar.Styled";
import { SearchBar } from "../SearchOffers/SearchBar/SearchBar";
import { useEffect } from "react";
import logo from "./logo/logo.ico";
import Burger from "./Burger";
import { useState } from "react";
import React from "react";

interface Props {
  isAuth: any;
  email: string;
  flatsFromDb: Object[];
  setFlats: React.Dispatch<React.SetStateAction<Object[]>>;
  setFavourites: React.Dispatch<React.SetStateAction<Object[] | null>>;
  flats: Object[];
  setIsLanding: React.Dispatch<React.SetStateAction<boolean>>;
  isLanding: boolean;
  favourites: Object[] | null;
  setActiveFlat: React.Dispatch<React.SetStateAction<string>>;
  activeFlat: string;
}

export const Navigation = ({
  isAuth,
  email,
  flatsFromDb,
  setFlats,
  setFavourites,
  flats,
  setIsLanding,
  isLanding,
  favourites,
  setActiveFlat,
  activeFlat,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <NavBar isOpen={open} className='navbar is-primary'>
        <div className='mainBar'>
          <div className='logoContainer'>
            <img className='logo' src={logo}></img>
          </div>
          <div className='headerContainer'>
            <h2>Najemnicy</h2>
          </div>
          <ul className='homeLink'>
            <li>
              <NavLink
                onClick={() => {
                  setOpen(!open);
                }}
                to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  setOpen(!open);
                }}
                to='o-nas'>
                O Nas
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  setOpen(!open);
                }}
                to='kontakt'>
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
        <Burger open={open} setOpen={setOpen} />
        <div>
          {!isLanding && (
            <SearchBar
              flatsFromDb={flatsFromDb}
              setFlats={setFlats}
              setFavourites={setFavourites}
              flats={flats}
              setIsLanding={setIsLanding}
              isLanding={isLanding}
              favourites={favourites}
              setActiveFlat={setActiveFlat}
              activeFlat={activeFlat}
            />
          )}
        </div>

        <div className='logBar'>
          <ul className='logLink'>
            {!isAuth && (
              <>
                <li>
                  <NavLink
                    onClick={() => {
                      setOpen(!open);
                    }}
                    to='auth/register'>
                    Rejestracja
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      setOpen(!open);
                    }}
                    to='auth/login'>
                    Logowanie
                  </NavLink>
                </li>
              </>
            )}

            {isAuth && (
              <>
                <li>
                  <NavLink
                    onClick={() => {
                      setOpen(!open);
                      setActiveFlat("");
                    }}
                    to='mypanel'>
                    Mój panel
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      setOpen(!open);
                    }}
                    to='messages'>
                    Wiadomości
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      setOpen(!open);
                    }}
                    to='addoffer'>
                    Dodaj ogłoszenie
                  </NavLink>
                </li>
                <li onClick={() => signOut(auth)}>
                  <NavLink
                    onClick={() => {
                      setOpen(!open);
                    }}
                    to='/'>
                    Wyloguj się
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </NavBar>
    </>
  );
};
