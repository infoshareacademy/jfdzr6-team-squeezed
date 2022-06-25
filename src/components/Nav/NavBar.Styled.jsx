import styled from "styled-components";

export const NavBar = styled.nav`
display: flex;
background-color: #0975C3;
justify-content: space-between;
width: 1440px;
min-width: 900px;
margin: 0 auto;
padding: 20px;
font-family: 'Montserrat', sans-serif;
border-radius: 4px;

.logo {
    height: 50px;
    margin-right: 5px;
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
   
  border-radius:  20px; 
  text-align:  center; 
  padding:  10px 30px;
  margin-top:  5px; 
  background-color:white;
  color:  #0975C3; 
  font-size:  14px;
  margin-left:  auto; 
  box-shadow:  0px 2px 6px -1px rgba(0,0,0,.13); 
  border:  none;
  transition:  all .3s ease; 
  outline: 0; 
  &:hover {
    transform:  translateY(-3px);
    box-shadow:  0 2px 6px -1px rgba($primary, .65);
    &:active {
      transform:  scale(.99);
    }
  }
    
}


.mainBar a.active {
    border-bottom: #fff 2px solid;
   
}

.logBar a.active {
    background-color: #a1afdb;
    color: #fff
   
}


`



