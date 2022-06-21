import { NavLink, } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { NavBar } from "./NavBar.Styled";
import { AuthStyled } from "./isAuth.Styled";
import logo from "./logo/logo.svg"

export const Navigation = ({ isAuth, email }) => {

    return (
        <>
            <NavBar className="navbar is-primary" >

                <div className="mainBar">

                    <img className="logo" src={logo} ></img>
                    <h2>Najemnicy</h2>

                    <ul>
                        <li>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='o-nas'>
                                O Nas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='kontakt'>
                                Kontakt
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="logBar">

                    <ul>
                        {!isAuth && (
                            <>
                                <li>
                                    <NavLink to='auth/register'>
                                        Rejestracja
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='auth/login'>
                                        Logowanie
                                    </NavLink>
                                </li>
                            </>
                        )}
                        {isAuth && (
                            <>
                                <li>
                                    <NavLink to="offer">Dodaj ogłoszenie</NavLink>
                                </li>
                                <li
                                    onClick={() => signOut(auth)}

                                >
                                    <NavLink to="/">
                                        Wyloguj się</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

            </NavBar>
            <AuthStyled>
                {email && <p className="auth">Jesteś zalogowany pod adresem: <a href="mailto:" target="_blank" > {email}</a></p>}
            </AuthStyled>
        </>
    );
};
