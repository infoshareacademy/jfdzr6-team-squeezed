import { NavLink, } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
display: flex;
background-color: #149BFC;
justify-content: space-between;
max-width: 1440px;
margin: 0 auto;
padding: 20px;

.mainBar {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.logBar {
    display: flex;
    flex-direction: row;
    align-items: center;
}

h2 {
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    margin-right: 20px;
}

ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
   
}

li {
    margin-right: 20px;
    align-items: center;
}

a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    align-items: center;
    padding: 10px;
}

.logBar a {
    background-color: #fff;
    color: #149BFC;
    text-decoration: none;
    align-items: center;
    box-shadow: 2px -1px 16px -6px rgba(20, 155, 252, 1);
    border-radius: 4px;
    
}


.mainBar a.active {
    border-bottom: #fff 2px solid;
   
}

.logBar a.active {
    background-color: #0770bb;
    color: #fff
   
}


`

export const Navigation = () => {

    return (
        <NavBar className="navbar is-primary" >

            <div className="mainBar">

                <img src="/logo1.gif" width="40px" />
                <h2>Najemnicy</h2>

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
                </ul>
            </div>

            <div className="logBar">
                <ul>
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
                </ul>
            </div>
        </NavBar>
    );
};
