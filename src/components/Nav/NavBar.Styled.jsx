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


@media (max-width: 950px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.logo {
    height: 40px;
    margin-right: 10px;
}

.mainBar {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 950px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content:center;
 
}
    
}

.logoContainer {
    @media (max-width: 775px) {
align-self: flex-start;
padding-top: 5px;
    }
}

.headerContainer {
    @media (max-width: 775px) {
align-self: flex-start;
padding-top: 15px;
    }
}


.logBar {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 950px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;


}
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
    margin: 0px;
    
    @media (max-width: 775px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-end;
    /* transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'}; */
    }
  
}

li {
    margin-right: 20px;
    @media (max-width: 775px) {
    padding: 10px;
    width: 150px;
   
    
    }
  
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



