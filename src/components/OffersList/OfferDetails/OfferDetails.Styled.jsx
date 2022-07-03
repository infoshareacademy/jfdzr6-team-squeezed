import styled from "styled-components";


export const ContainerDivStyled = styled.div`
display: flex;
flex-direction: column;
max-width: 1440px;
height: 100%;
margin: 60px auto;
margin-bottom: 200px;


.section-1 {
   display: flex;
   flex-direction: row;
   justify-content: space-around;

   @media (max-width: 1340px) {
   flex-wrap: wrap;
  
  }
   
}


.picture {
   width: 900px;
   height: fit-content;
   border-radius:  20px; 
   background-color: white;
   box-shadow: 0px 1px 11px -3px rgba(66, 68, 90, 1);
   &:hover {
    box-shadow:  0 2px 6px -1px rgba($primary, .65);
    &:active {
      transform:  scale(.99);
    }
  }

  @media (max-width: 1340px) {
   width: 100%;
  
  }
   
 
  
}

.picture img {
   width: 100%;
   height: 600px;
   object-fit: cover;
   background-color: white;
   border-radius:  20px; 

}

.form {

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 600px;
    background-color: white;
    box-shadow: 0px 1px 11px -3px rgba(66, 68, 90, 1);
    border-radius:  20px; 
    @media (max-width: 1340px) {
   margin-top: 20px;
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
  
  }


  @media (max-width: 765px) {
   margin-top: 20px;
   display: flex;
    flex-direction: column;
    align-items: center;

  
  }
    
}

.contact {
    padding: 20px;
  
  

}

.contact-email {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 25px;

}


.contact-number {
  display: flex;
  flex-direction: row;
  margin-left: 25px;

 
}


.first {
  color: #0975C3;
  margin-left: 5px;
}

.firstChild {
  color:  #000; 
  opacity: 70%;
}




 .contact h3 {
    color: #0975C3;
    margin-left: 25px;
}





input {
font-size:  16px; 
  padding:  20px 10px; 
  height:  56px; 
  border:  none; 
  border-bottom:  solid 1px rgba(0,0,0,.1); 
  background:  #fff; 
  width:  280px; 
  color:  #000; 
}


textarea {
font-size:  16px; 
padding:  20px 10px; 
  height:  200px;
  max-height: 200px;
    max-width: 280px;
    min-width: 280px;
  border:  none; 
  border-bottom:  solid 1px rgba(0,0,0,.1);
  width:  280px; 
  color:  #000;   
  
}


button {
  width: auto;
  min-width:  100px;
  border-radius:  20px; 
  text-align:  center; 
  padding:  10px 30px;
  margin-top:  15px; 
  background-color:#0975C3;
  color:  #fff; 
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
  display: block;
  margin: 10px auto;
  
}

.section-2 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media (max-width: 1340px) {
   flex-wrap: wrap;
   order: 2;
   
  }

 
  }

.render-div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
    width: 900px;
    height: 200px;
    background-color: white;
    box-shadow: 0px 1px 11px -3px rgba(66, 68, 90, 1);
    border-radius:  20px;  
    @media (max-width: 1340px) {
width: 100%;
  }
  @media (max-width: 575px) {
width: 100%;
height: 250px;
  }

  @media (max-width: 574px) {
width: 100%;
display: flex;
flex-direction: column;
height: 100%;
padding: 20px;
  }
  
  
}

.render-div2 {
    display: flex;
    flex-direction: row;
    justify-content: space-around; 
    width: 900px;
    height: 200px;
    @media (max-width: 1340px) {
width: 100%;
  }

  @media (max-width: 574px) {
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
  }

    
}

  .render-list {
    list-style: none;
  
    
}

.render-list li { 
  border-bottom:  solid 1px rgba(0,0,0,.1); 
  background:  #fff; 
  padding: 7px;
  width:  150px; 
  color:  #000; 
  opacity: 70%;
  @media (max-width: 1340px) {
width: 100%;
  }
  
  
}

.fetch li {
  color: #0975C3;
  opacity: 100%;
  @media (max-width: 1340px) {
width: 100%;
  }

}

  .map {
    margin-top: 20px;
    width: 400px;
    height: 200px;
    background-color: white;
    box-shadow: 0px 1px 11px -3px rgba(66, 68, 90, 1);
    background-color:#0975C3 ;
    border-radius:  20px; 

    @media (max-width: 1340px) {
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
background-color: #fff;

  }
}

  .description {
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: white;
    box-shadow: 0px 1px 11px -3px rgba(66, 68, 90, 1);
    margin: 20px auto 0;
    padding: 20px;
    width: 1358px;
    border-radius:  20px; 
    @media (max-width: 1340px) {
width: 100%;
order: 1;
  }
    
}

.description h3 {
  color: #0975C3;
  margin-bottom: 20px;

}

.render-list div {
  display: flex;
  
}

.icon {
  height: 20px;
  align-self: center;
}

.formDiv {
  display: flex;
  
}

.iconInput {
  height: 20px;
  align-self: center;
  margin-right: 5px;
  opacity: 70%;
}

`
