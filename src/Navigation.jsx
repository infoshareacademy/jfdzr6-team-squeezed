import { NavLink, } from "react-router-dom";
import styled from "styled-components";
const NavBar = styled.nav`
display: flex;
background-color: #149BFC;
justify-content: space-between;
margin: 0px auto 0 auto;
padding: 20px;
ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    text-align: center;
    width: 1280px;
    justify-content: end;
}
li {
    margin-right: 20px;
}
a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 4px;
    padding: 5px;
}
a.active {
    color: black;
    background-color: #fff;
}
`
export const Navigation = () => {
    return (
        <NavBar className="navbar is-primary" >
            <ul>
                <li>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/o-nas'>
                        O Nas
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/kontakt'>
                        Kontakt
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/rejestracja'>
                        Rejestracja
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/logowanie'>
                        Logowanie
                    </NavLink>
                </li>
            </ul>
        </NavBar>
    );
};