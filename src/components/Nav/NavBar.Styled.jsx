import styled from "styled-components";

export const NavBar = styled.nav`
display: flex;
background-color: #0975C3;
flex-direction: row;
justify-content: space-between;
width: 100%;
margin: 0 auto;
padding: 20px;
font-family: 'Montserrat', sans-serif;

@media (max-width: 800px) {

}

.logo {
    height: 40px;
    margin-right: 10px;
}

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
    margin: auto;
    text-transform: uppercase;
    margin-right: 20px;
    font-size: 18px;
}

ul {
    display: flex;
    margin: auto;
    flex-direction: row;
    align-items: center;
    list-style: none;
    @media (max-width: 800px) {
    display: none;
}
}

li {
    margin-right: 20px;
}

.mainBar a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    align-items: center;
    padding: 10px;
}

.logBar a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    align-items: center;
    padding: 10px;
    border-radius:  20px; 
    text-align:  center; 
    padding:  10px 30px;
    background-color:white;
    color:  #0975C3; 
    margin-left:  auto; 
    box-shadow:  0px 2px 6px -1px rgba(0,0,0,.13); 
   
}


.mainBar a.active {
    border-bottom: #fff 2px solid;
   
}

.logBar a.active {
    background-color: #a1afdb;
    color: #fff
   
}


`



